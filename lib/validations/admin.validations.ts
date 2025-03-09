import { z } from "zod";

export const LocationSchema = z.object({
  location: z.string().min(3).max(130),
});

export const DistanceSchema = z.object({});

export const ManagerSchema = z.object({});

export const DriverSchema = z.object({});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const SignupSchema = z.object({});
