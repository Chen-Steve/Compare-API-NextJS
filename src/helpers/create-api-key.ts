import { CreateApiData } from "@/types/api";

export default async function createApiKey() {
  try {
    const res = await fetch("/api/api-key/create");

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = (await res.json()) as CreateApiData;

    if (data.error || !data.createdApiKey) {
      if (Array.isArray(data.error)) {
        throw new Error(data.error.join(", "));
      }
      throw new Error(data.error ?? "Something went wrong");
    }

    return data.createdApiKey.key;
  } catch (error) {
    // Handle network errors, timeouts, etc.
    console.error("Error creating API key:", error);
    throw new Error("Failed to create API key. Please try again.");
  }
}