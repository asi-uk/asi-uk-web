// Discord webhook notification for convention registrations

interface ConventionDiscordNotificationParams {
    email: string;
    attendeeCount: number;
    orderTotal: number;
    notionPageUrl: string;
    status: string;
}

export async function sendConventionDiscordNotification(
    params: ConventionDiscordNotificationParams
): Promise<{ success: boolean; error?: string }> {
    const webhookUrl = process.env.DISCORD_CONVENTION_REGISTRATION_WEBHOOK_URL;

    if (!webhookUrl) {
        console.log("Discord webhook URL not configured - skipping notification");
        return { success: false, error: "Discord webhook not configured" };
    }

    const statusColor = params.status === "Confirmed" ? 0x22c55e : 0xf59e0b; // green for confirmed, amber for pending

    const embed = {
        title: "New Convention Registration",
        color: statusColor,
        fields: [
            {
                name: "Email",
                value: params.email,
                inline: true,
            },
            {
                name: "Attendees",
                value: String(params.attendeeCount),
                inline: true,
            },
            {
                name: "Total",
                value: params.orderTotal === 0 ? "Free" : `£${params.orderTotal}`,
                inline: true,
            },
            {
                name: "Status",
                value: params.status,
                inline: true,
            },
            {
                name: "Notion",
                value: `[View Registration](${params.notionPageUrl})`,
                inline: false,
            },
        ],
        footer: {
            text: "ASI UK Convention 2026",
        },
        timestamp: new Date().toISOString(),
    };

    const payload = {
        embeds: [embed],
    };

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Discord webhook failed:", response.status, errorText);
            return { success: false, error: `Discord webhook failed: ${response.status}` };
        }

        console.log("Discord notification sent successfully");
        return { success: true };
    } catch (error) {
        console.error("Error sending Discord notification:", error);
        return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
    }
}
