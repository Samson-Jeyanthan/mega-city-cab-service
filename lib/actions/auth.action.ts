"use server";

import Customer from "@/database/customer.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";
import { TCustomerParams } from "./shared.types";

export async function customerRegisterAction(params: any) {
  try {
    connectToDatabase();

    const { name, email, password, nicNo, phoneNo, address } = params;

    await Customer.create({
      customerName: name,
      email,
      password,
      nicNo,
      phoneNo,
      address,
    });

    return {
      status: "200",
      message: "Registration successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error registering",
    };
  }
}

export async function getCustomerByIdAction(params: any) {
  const { _id } = params;

  const customer = await Customer.findById(_id);

  try {
    connectToDatabase();
    return {
      status: "200",
      message: "",
      data: customer,
    };
  } catch (error) {
    return {
      status: "500",
      message: "Error getting customer details",
    };
  }
}

export async function editCustomerAction(params: TCustomerParams) {
  const { _id, customerName, nicNo, phoneNo, address, path } = params;

  await Customer.findByIdAndUpdate(_id, {
    customerName,
    nicNo,
    phoneNo,
    address,
  });

  revalidatePath(path);
  try {
    connectToDatabase();
    return {
      status: "200",
      message: "Customer updated successfully",
    };
  } catch (error) {
    return {
      status: "500",
      message: "Error editing customer",
    };
  }
}
