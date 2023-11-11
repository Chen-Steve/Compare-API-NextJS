import { ApiKey } from "@prisma/client";
import { ZodIssue } from "zod";
import { ObjectId } from "mongodb";

export interface CreateApiData {
  error: string | ZodIssue[] | null;
  createdApiKey: ApiKey | null;
}

export interface RevokeApiData {
  error: string | ZodIssue[] | null;
  success: boolean;
}

export interface YourModel {
  usedApiKey: string;
  ApiKey: ApiKey;
  userId: ObjectId;
}
