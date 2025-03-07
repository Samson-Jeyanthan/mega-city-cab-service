"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";
import Location from "@/database/location.model";
import { TLocationParams } from "./shared.types";

export async function createManagerAction(params: TLocationParams) {
  try {
    connectToDatabase();

    const { name, path } = params;

    await Manager.create({ name });

    revalidatePath(path);

    return {
      status: "200",
      message: "Manager created successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error creating manager",
    };
  }
}