"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";
import Manager from "@/database/manager.model";
import { TDeleteParams, TManagerParams } from "./shared.types";

export async function createManagerAction(params: TManagerParams) {
  try {
    connectToDatabase();

    const {
      managerName,
      nicNo,
      phoneNo,
      email,
      carMade,
      carModel,
      carNo,
      carPhoto,
      path,
    } = params;

    await Manager.create({
      managerName,
      nicNo,
      phoneNo,
      email,
      carMade,
      carModel,
      carNo,
      carPhoto,
    });

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

export async function getAllManagersAction() {
  try {
    connectToDatabase();

    const managers = await Manager.find().sort({ createdAt: -1 });

    return {
      status: "200",
      data: managers,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error fetching Managers",
    };
  }
}

export async function editManagerAction(params: TManagerParams) {
  const {
    _id,
    managerName,
    nicNo,
    phoneNo,
    email,
    carMade,
    carModel,
    carNo,
    carPhoto,
    path,
  } = params;

  await Manager.findByIdAndUpdate(_id, {
    managerName,
    nicNo,
    phoneNo,
    email,
    carMade,
    carModel,
    carNo,
    carPhoto,
  });

  revalidatePath(path);
  try {
    connectToDatabase();
    return {
      status: "200",
      message: "Manager updated successfully",
    };
  } catch (error) {
    return {
      status: "500",
      message: "Error editing manager",
    };
  }
}

export async function deleteManagerAction(params: TDeleteParams) {
  try {
    connectToDatabase();

    const { _id, path } = params;

    await Manager.deleteOne({ _id });

    revalidatePath(path);

    return {
      status: "200",
      message: "Manager detail deleted successfully",
    };
  } catch (error) {
    return {
      status: "500",
      message: "Error deleting manager",
    };
  }
}
