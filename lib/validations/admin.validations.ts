import { z } from "zod";

export const ManagerSchema = z.object({});

export const LocationSchema = z.object({
  location: z.string().min(3).max(130),
});
