"use client";

import { Form } from "../ui/form";
import { FormInput } from "../inputs";
import { Button } from "../ui/button";
import { ManagerSchema } from "@/lib/validations/admin.validations";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { z } from "zod";

interface Props {
  type: "edit" | "create";
  managerDetails?: string;
}

const CarManagerForm = ({ type, managerDetails }: Props) => {
  const pathname = usePathname();

  const form = useForm<z.infer<typeof ManagerSchema>>({
    resolver: zodResolver(ManagerSchema),
    defaultValues: {
      managerName: "",
      nicNo: "",
      phoneNo: "",
      email: "",
      carMade: "",
      carModel: "",
      carNo: "",
      carPhoto: [],
    },
  });

  async function onSubmit(values: z.infer<typeof ManagerSchema>) {
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
      //   name: values.location.toLowerCase(),
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
        className="flex flex-col px-16 gap-4 pt-4"
      >
        <FormInput
          form={form}
          inputName="managerName"
          formLabel="Location Name"
        />

        <FormInput form={form} inputName="nicNo" formLabel="NIC Number" />
        <FormInput
          form={form}
          inputName="phoneNo"
          formLabel="Phone Number Name"
        />
        <FormInput form={form} inputName="email" formLabel="Email" />

        <FormInput form={form} inputName="carMade" formLabel="Car Made Name" />

        <FormInput
          form={form}
          inputName="carModel"
          formLabel="Car Model Name"
        />
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

export default CarManagerForm;
