import { z } from "zod";

export const LocationSchema = z.object({
  location: z.string().min(3).max(130),
});

export const DistanceSchema = z.object({
  from: z.string().min(1),
  to: z.string().min(1),
  distance: z.number().min(1),
});

export const ManagerSchema = z.object({
  managerName: z.string().min(3),
  nicNo: z.string().min(7),
  phoneNo: z.string().min(10).max(10),
  email: z.string().optional(),
  carMade: z.string().min(3),
  carModel: z.string().min(1),
  carNo: z.string().min(3),
  carPhoto: z.custom<File[]>().optional(),
});

export const DriverSchema = z.object({
  driverName: z.string().min(3),
  nicNo: z.string().min(7),
  phoneNo: z.string().min(10),
  email: z.string().optional(),
  address: z.string().min(1),
  driverPhoto: z.custom<File[]>().optional(),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
