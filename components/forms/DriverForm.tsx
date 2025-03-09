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

interface Props {
  type: "edit" | "create";
  driverDetails?: string;
}

const DriverForm = ({ type, driverDetails }: Props) => {
  const pathname = usePathname();

  const form = useForm<z.infer<typeof DriverSchema>>({
    resolver: zodResolver(DriverSchema),
    defaultValues: {
      driverName: "",
      nicNo: "",
      phoneNo: "",
      email: "",
      address: "",
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
