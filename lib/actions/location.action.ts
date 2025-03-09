"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";
import Location from "@/database/location.model";
import { TDeleteParams, TLocationParams } from "./shared.types";
import Distance from "@/database/distance.model";

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

export async function editLocationAction(params: TLocationParams) {
  const { _id, name, path } = params;

  await Location.findByIdAndUpdate(_id, { name });

  revalidatePath(path);
  try {
    connectToDatabase();
    return {
      status: "200",
      message: "Location updated successfully",
    };
  } catch (error) {
    return {
      status: "500",
      message: "Error editing location",
    };
  }
}

export async function deleteLocationAction(params: TDeleteParams) {
  try {
    connectToDatabase();

    const { _id, path } = params;

    await Location.deleteOne({ _id });
    await Distance.deleteMany({ from: _id, to: _id });

    revalidatePath(path);

    return {
      status: "200",
      message: "Location deleted successfully",
    };
  } catch (error) {
    return {
      status: "500",
      message: "Error deleting Location",
    };
  }
}
