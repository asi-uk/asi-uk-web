// Mailchimp newsletter subscription

interface SubscribeResult {
  success: boolean;
  error?: string;
  alreadySubscribed?: boolean;
}

export async function subscribeToNewsletter(email: string): Promise<SubscribeResult> {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !listId || !serverPrefix) {
    console.warn("Mailchimp not configured - missing MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID, or MAILCHIMP_SERVER_PREFIX");
    return { success: false, error: "Newsletter service is not configured" };
  }

  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: "pending", // Double opt-in (GDPR compliant)
      }),
    });

    if (response.ok) {
      return { success: true };
    }

    const data = await response.json();

    // Mailchimp returns "Member Exists" when email is already subscribed
    if (response.status === 400 && data.title === "Member Exists") {
      return { success: true, alreadySubscribed: true };
    }

    console.error("Mailchimp API error:", response.status, data.title, data.detail);
    return { success: false, error: "Failed to subscribe. Please try again later." };
  } catch (error) {
    console.error("Error calling Mailchimp API:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
