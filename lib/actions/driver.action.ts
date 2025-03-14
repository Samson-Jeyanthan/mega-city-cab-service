"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";
import Driver from "@/database/driver.model";
import { TDriverParams } from "./shared.types";

export async function createDriverAction(params: TDriverParams) {
  try {
    connectToDatabase();

    const {
      driverName,
      nicNo,
      phoneNo,
      email,
      address,
      driverPhoto,
      assignedCars,
      path,
    } = params;

    await Driver.create({
      driverName,
      nicNo,
      phoneNo,
      email,
      address,
      driverPhoto,
      assignedCars,
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

export async function getAllDriversAction(params: any) {
  try {
    connectToDatabase();

    const { isClientSide } = params;

    const drivers = await Driver.find().sort({ createdAt: -1 });

    if (isClientSide) {
      const stringyFiedDrivers = JSON.stringify(drivers);

      return {
        status: "200",
        data: JSON.parse(stringyFiedDrivers),
      };
    } else {
      return {
        status: "200",
        data: drivers,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error fetching driver details",
    };
  }
}

export async function getDriverByIdAction(params: { _id: string }) {
  try {
    connectToDatabase();

    const { _id } = params;

    const driver = await Driver.findById(_id);

    return driver;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
