"use server";

import { parse, ValiError } from "valibot";
import { subscribeDataSchema } from "@/app/schemas/valibotSchemas";
import { googleAuth } from "@/app/actions/googleAuth";
import { google } from "googleapis";

export const subscribeAction = async (state: {}, formData: FormData) => {

    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

    if (!spreadsheetId) {
        return {
            success: false,
            errors: ["There was an error connecting to google."],
        };
    }

    const rawData = {
        email: formData.get("email"),
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
    };

    try {
        const data = parse(subscribeDataSchema, rawData);

        const sheets = await google.sheets({
            auth: await googleAuth(),
            version: "v4",
        });

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: "A1:C1",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[data.email, data.firstName, data.lastName]],
            },
        });

        return {
            success: true,
            errors: null,
        };
    } catch (error: unknown) {
        if (error instanceof ValiError) {
            const issues = error.issues;
            const errorMessages = issues.map((issue) => issue.message);

            return {
                success: false,
                errors: errorMessages,
            };
        } else {
            console.error(error);
            return {
                success: false,
                errors: ["An error occurred."],
            };
        }
    }
};