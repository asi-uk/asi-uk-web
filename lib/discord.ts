// Discord webhook notification for membership applications

interface DiscordNotificationParams {
    applicantName: string;
    membershipType: string;
    email: string;
    notionPageUrl?: string;
    notionFailed?: boolean;
}

export async function sendDiscordNotification(params: DiscordNotificationParams): Promise<{ success: boolean; error?: string }> {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
        console.log("Discord webhook URL not configured - skipping notification");
        return { success: false, error: "Discord webhook not configured" };
    }

    const fields = [
        {
            name: "Applicant",
            value: params.applicantName,
            inline: true,
        },
        {
            name: "Type",
            value: params.membershipType,
            inline: true,
        },
        {
            name: "Email",
            value: params.email,
            inline: false,
        },
    ];

    if (params.notionFailed) {
        fields.push({
            name: "Notion",
            value: "FAILED - check email for details",
            inline: false,
        });
    } else if (params.notionPageUrl) {
        fields.push({
            name: "Notion",
            value: `[View Application](${params.notionPageUrl})`,
            inline: false,
        });
    }

    const embed = {
        title: params.notionFailed
            ? "[MANUAL ENTRY NEEDED] New Membership Application"
            : "New Membership Application",
        color: params.notionFailed ? 0xcc0000 : 0x1e3a5f,
        fields,
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
