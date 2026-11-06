import { FAITH_AND_WORK_2026 } from "@/data/faith-and-work";

interface FaithAndWorkDiscordParams {
    leadName: string;
    email: string;
    attendeeCount: number;
    attendeesList: string;
    notionPageUrl?: string;
}

// Falls back to the convention webhook so notifications land somewhere
// sensible until a dedicated channel is set up.
export async function sendFaithAndWorkDiscordNotification(
    params: FaithAndWorkDiscordParams,
): Promise<{ success: boolean; error?: string }> {
    const webhookUrl =
        process.env.DISCORD_EVENT_REGISTRATION_WEBHOOK_URL ||
        process.env.DISCORD_CONVENTION_REGISTRATION_WEBHOOK_URL;

    if (!webhookUrl) {
        console.log("Discord webhook URL not configured - skipping notification");
        return { success: false, error: "Discord webhook not configured" };
    }

    const fields = [
        { name: "Lead", value: params.leadName, inline: true },
        { name: "Email", value: params.email, inline: true },
        { name: "Attendees", value: String(params.attendeeCount), inline: true },
        { name: "Who", value: params.attendeesList.slice(0, 1024), inline: false },
    ];
    if (params.notionPageUrl) {
        fields.push({ name: "Notion", value: `[View Registration](${params.notionPageUrl})`, inline: false });
    }

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                embeds: [
                    {
                        title: `New ${FAITH_AND_WORK_2026.title} Registration`,
                        color: 0x22c55e,
                        fields,
                        footer: { text: `ASI UK ${FAITH_AND_WORK_2026.title} — ${FAITH_AND_WORK_2026.dateShort}` },
                        timestamp: new Date().toISOString(),
                    },
                ],
            }),
        });

        if (!response.ok) {
            console.error("Discord webhook failed:", response.status, await response.text());
            return { success: false, error: `Discord webhook failed: ${response.status}` };
        }
        return { success: true };
    } catch (error) {
        console.error("Error sending Discord notification:", error);
        return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
    }
}
