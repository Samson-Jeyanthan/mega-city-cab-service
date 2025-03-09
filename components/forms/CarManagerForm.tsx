"use client";

import { Form, FormField } from "../ui/form";
import { FormInput, PhotoInput } from "../inputs";
import { Button } from "../ui/button";
import { ManagerSchema } from "@/lib/validations/admin.validations";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { z } from "zod";
import { createManagerAction } from "@/lib/actions/manager.action";
import { getSignedURL } from "@/lib/actions/utils.action";

interface Props {
  type: "edit" | "create";
  managerDetails?: string;
}

const CarManagerForm = ({ type, managerDetails }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

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
    let carImageURL = "";

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
        if (values.carPhoto && values.carPhoto.length > 0) {
          const signedURLResult = await getSignedURL({
            fileType: "image/jpeg",
          });
          console.log(signedURLResult);

          if (signedURLResult.failure !== undefined) {
            console.log(signedURLResult.failure);
            return;
          }

          const url = signedURLResult.success;

          const res = await fetch(url, {
            method: "PUT",
            body: values.carPhoto[0],
            headers: {
              "Content-Type": "image/jpeg",
            },
          });

          if (res.ok) {
            carImageURL = url.split("?")[0];
          }
        }

        res = await createManagerAction({
          managerName: values.managerName,
          nicNo: values.nicNo,
          phoneNo: values.phoneNo,
          email: values.email,
          carMade: values.carMade,
          carModel: values.carModel,
          carNo: values.carNo,
          carPhoto: carImageURL,
          path: pathname,
        });

        if (res.status === "200") {
          toast.success(res.message);
          router.push("/admin/car-managers");
        } else {
          toast.error(res.message);
        }
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
        <FormField
          control={form.control}
          name="carPhoto"
          render={({ field }) => <PhotoInput fieldChange={field.onChange} />}
        />

        <FormInput
          form={form}
          inputName="managerName"
          formLabel="Manager Name"
        />

        <FormInput form={form} inputName="nicNo" formLabel="NIC Number" />
        <FormInput
          form={form}
          inputName="phoneNo"
          formLabel="Phone Number Name"
        />
        <FormInput form={form} inputName="email" formLabel="Email" />

        <FormInput form={form} inputName="carMade" formLabel="Car Made Name" />
        <FormInput form={form} inputName="carNo" formLabel="Car Number Plate" />

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
