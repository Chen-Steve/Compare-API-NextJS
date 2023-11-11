import authOptions from "@/lib/auth";
import NextAuth from "next-auth";
import { nanoid } from 'nanoid';

export default NextAuth(authOptions);
