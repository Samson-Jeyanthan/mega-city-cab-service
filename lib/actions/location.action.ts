"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";
import Location from "@/database/location.model";
import { TLocationParams } from "./shared.types";

export async function createLocationAction(params: TLocationParams) {
  try {
    connectToDatabase();

    const { name, path } = params;

    await Location.create({ name });

    revalidatePath(path);

    return {
      status: "200",
      message: "Location created successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error creating location",
    };
  }
}

export async function getAllLocationsAction() {
  try {
    connectToDatabase();

    const locations = await Location.find().sort({ createdAt: -1 });

    return {
      status: "200",
      data: locations,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error fetching locations",
    };
  }
}
