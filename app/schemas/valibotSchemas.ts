// app/valibotSchemas.ts
import { email, maxLength, nonEmpty, object, pipe, string } from "valibot";

export const subscribeDataSchema = object({
    email: pipe(
        string(),
        nonEmpty("Please enter your email."),
        email("The email is badly formatted."),
        maxLength(30, "Your email is too long.")
    ),
    firstName: pipe(
        string(),
        nonEmpty("Please enter your first name."),
        maxLength(30, "Your first name is too long.")
    ),
    lastName: pipe(
        string(),
        nonEmpty("Please enter your last name."),
        maxLength(30, "Your first name is too long.")
    ),
});