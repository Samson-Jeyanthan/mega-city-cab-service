import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Converting date to format like 2024 Dec 31
export const getConvertedDate = (date: Date): string => {
  // Extract the year, month, and day from the Date object
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" }); // Use short month format (e.g., "Dec")
  const year = date.getFullYear();

  // Create the formatted date string (e.g., "2024 Dec 31")
  const formattedDate = `${year} ${month} ${day}`;

  return formattedDate;
};
