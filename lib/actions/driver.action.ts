"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";
import Driver from "@/database/driver.model";
import { TDriverParams } from "./shared.types";

export async function createDriverAction(params: TDriverParams) {
  try {
    connectToDatabase();

    const { driverName, nicNo, phoneNo, email, address, driverPhoto, path } =
      params;

    await Driver.create({
      driverName,
      nicNo,
      phoneNo,
      email,
      address,
      driverPhoto,
    });

    revalidatePath(path);

    return {
      status: "200",
      message: "Driver created successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error creating driver",
    };
  }
}

export async function getAllDriversAction() {
  try {
    connectToDatabase();

    const locations = await Driver.find().sort({ createdAt: -1 });

    return {
      status: "200",
      data: locations,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error fetching driver details",
    };
  }
}
