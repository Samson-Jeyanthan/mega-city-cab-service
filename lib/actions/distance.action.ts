"use server";

import Distance from "@/database/distance.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";
import { TDeleteParams, TDistanceParams } from "./shared.types";
import Location from "@/database/location.model";

export async function createDistanceAction(params: TDistanceParams) {
  try {
    connectToDatabase();

    const { from, to, distance, path } = params;

    await Distance.create({
      from,
      to,
      distance,
    });

    revalidatePath(path);

    return {
      status: "200",
      message: "Distance created successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error creating distance",
    };
  }
}

export async function getAllDistancesAction() {
  try {
    connectToDatabase();

    const distances = await Distance.find().sort({ createdAt: -1 }).populate({
      path: "from to",
      model: Location,
      select: "_id name",
    });

    console.log(distances);
    return {
      status: "200",
      data: distances,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error fetching distance details",
    };
  }
}

export async function deleteDistanceAction(params: TDeleteParams) {
  try {
    connectToDatabase();

    const { _id, path } = params;

    await Distance.deleteOne({ _id });

    revalidatePath(path);

    return {
      status: "200",
      message: "Distance deleted successfully",
    };
  } catch (error) {
    return {
      status: "500",
      message: "Error deleting distance",
    };
  }
}
