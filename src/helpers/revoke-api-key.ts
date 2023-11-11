export default async function revokeApiKey({ keyId }: { keyId: string }) {
  try {
    const res = await fetch("/api/api-key/revoke", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keyId }),
    });

    if (!res.ok) {
      // Handle non-successful responses
      const errorText = await res.text();
      throw new Error(`Error ${res.status}: ${errorText}`);
    }

    const data = (await res.json()) as { error?: string };
    if (data.error) {
      throw new Error(data.error);
    }
  } catch (error) {
    // Handle network errors or other fetch issues
    throw error; // Re-throw the error for further handling (if needed)
  }
}
