import { z } from "zod";

export const ManagerSchema = z.object({});

export const LocationSchema = z.object({
  location: z.string().min(3).max(130),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
