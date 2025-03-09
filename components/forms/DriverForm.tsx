"use client";

import { Form } from "../ui/form";
import { FormInput } from "../inputs";
import { Button } from "../ui/button";
import { DriverSchema } from "@/lib/validations/admin.validations";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { z } from "zod";
import { createLocationAction } from "@/lib/actions/location.action";

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
      }
      // res = await createLocationAction({
      //   name: values.driverName.toLowerCase(),
      //   path: pathname,
      // });

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
        <FormInput form={form} inputName="driverName" formLabel="Driver Name" />
        <FormInput form={form} inputName="nicNo" formLabel="NIC Number" />
        <FormInput
          form={form}
          inputName="phoneNo"
          formLabel="Phone Number Name"
        />
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
