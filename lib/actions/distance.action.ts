"use server";

import Distance from "@/database/distance.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";
import { TDistanceParams } from "./shared.types";

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

    const distances = await Distance.find().sort({ createdAt: -1 });

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
