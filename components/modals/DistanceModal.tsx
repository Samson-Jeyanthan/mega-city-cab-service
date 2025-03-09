"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { DistanceSchema } from "@/lib/validations/admin.validations";
import { createDistanceAction } from "@/lib/actions/distance.action";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { Form } from "../ui/form";
import { FormInput, Dropdown } from "../inputs";
import { Button } from "../ui/button";

interface Props {
  type: "edit" | "create";
  distanceDetails?: string;
  locations: string;
}

const DistanceModal = ({ type, distanceDetails, locations }: Props) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const parsedDistanceDetails =
    distanceDetails && JSON.parse(distanceDetails || "");

  const LOCATIONS_OPTIONS =
    locations &&
    JSON.parse(locations)?.map((location: any) => ({
      _id: location._id,
      name: location.name,
    }));

  const form = useForm<z.infer<typeof DistanceSchema>>({
    resolver: zodResolver(DistanceSchema),
    defaultValues: {
      from: "",
      to: "",
      distance: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof DistanceSchema>) {
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
        res = await createDistanceAction({
          from: values.from,
          to: values.to,
          distance: values.distance,
          path: pathname,
        });
      }

      if (res.status === "200") {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsOpen(false);
      form.reset();
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {type === "edit" ? (
        <DialogTrigger>
          <MdEdit className="text-lg" />
        </DialogTrigger>
      ) : (
        <DialogTrigger className="flex gap-2 items-center px-4 py-2.5 text-sm bg-primary-500 text-light-900 font-medium rounded-lg">
          <FaPlus />
          Add Distance
        </DialogTrigger>
      )}

      <DialogContent aria-describedby={undefined} className="bg-light-900">
        <DialogHeader>
          <DialogTitle>
            {type === "edit" ? "Edit" : "Create"} Distance
          </DialogTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 pt-4"
            >
              <Dropdown
                form={form}
                inputName="from"
                formLabel="From"
                options={LOCATIONS_OPTIONS}
                prevValue={parsedDistanceDetails?.from}
              />

              <Dropdown
                form={form}
                inputName="to"
                formLabel="To"
                options={LOCATIONS_OPTIONS}
                prevValue={parsedDistanceDetails?.to}
              />

              <FormInput
                form={form}
                inputName="distance"
                formLabel="Distance"
                inputType="number"
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
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DistanceModal;
