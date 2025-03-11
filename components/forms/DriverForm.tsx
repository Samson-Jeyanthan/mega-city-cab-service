"use client";

import { Form, FormField } from "../ui/form";
import { DriverPhotoInput, FormInput } from "../inputs";
import { Button } from "../ui/button";
import { DriverSchema } from "@/lib/validations/admin.validations";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { z } from "zod";
import { useState } from "react";
import Image from "next/image";

interface Props {
  type: "edit" | "create";
  driverDetails?: string;
  carDetails?: string;
}

const DriverForm = ({ type, driverDetails, carDetails }: Props) => {
  const pathname = usePathname();
  const parsedData = driverDetails ? JSON.parse(driverDetails) : null;
  const parsedCarDetails = carDetails ? JSON.parse(carDetails) : null;
  const [selectedCars, setSelectedCars] = useState([]);

  const form = useForm<z.infer<typeof DriverSchema>>({
    resolver: zodResolver(DriverSchema),
    defaultValues: {
      driverName: parsedData?.driverName || "",
      nicNo: parsedData?.nicNo || "",
      phoneNo: parsedData?.phoneNo || "",
      email: parsedData?.email || "",
      address: parsedData?.address || "",
      driverPhoto: [],
    },
  });

  async function onSubmit(values: z.infer<typeof DriverSchema>) {
    console.log(values);

    let res = {
      status: "",
      message: "",
    };

    try {
      if (type === "edit") {
        // res = await editDistrictAction({
        //   _id: parsedData?._id,
        //   name: values.district.toLowerCase(),
        //   path: pathname,
        // });
      } else {
        // res = await createLocationAction({
        //   name: values.driverName.toLowerCase(),
        //   path: pathname,
        // });
      }
      if (res.status === "200") {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex gap-10 items-start w-full">
          <FormField
            control={form.control}
            name="driverPhoto"
            render={({ field }) => (
              <DriverPhotoInput
                fieldChange={field.onChange}
                defaultPic="/user-single.png"
                mediaUrl={parsedData?.driverPhoto}
              />
            )}
          />

          <div className="flex flex-col gap-4 w-full">
            <FormInput
              form={form}
              inputName="driverName"
              formLabel="Driver Name"
            />
            <FormInput form={form} inputName="nicNo" formLabel="NIC Number" />
          </div>
        </div>
        <FormInput form={form} inputName="phoneNo" formLabel="Phone Number" />
        <FormInput form={form} inputName="email" formLabel="Email" />
        <FormInput form={form} inputName="address" formLabel="Address" />

        <p className="font-semibold text-sm -mb-2">Select Cars to assign</p>
        <div className="flex-wrap flex gap-4">
          {parsedCarDetails?.map((car: any, index: number) => (
            <div
              key={index}
              className="p-4 rounded-lg border flex gap-4 w-[22rem]"
            >
              <Image
                src={car.carPhoto || "/car.png"}
                alt="car photo"
                width={200}
                height={200}
                className="w-20 h-20 object-cover rounded-md bg-light-700"
              />

              <div className="flex flex-col gap-2">
                <p className="font-semibold">
                  {car.carMade}-{car.carModel}
                </p>
                <p>{car.carNo}</p>
              </div>
            </div>
          ))}
        </div>
        <Button
          className="bg-primary-500 text-light-900 w-full"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting
            ? type === "edit"
              ? "Editing..."
              : "Creating..."
            : type === "edit"
            ? "Edit"
            : "Create"}
        </Button>
      </form>
    </Form>
  );
};

export default DriverForm;
