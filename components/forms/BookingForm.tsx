"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { z } from "zod";
import { Form } from "../ui/form";
import { Dropdown, FormInput } from "../inputs";
import { Button } from "../ui/button";
import { BookingSchema } from "@/lib/validations/admin.validations";
import { HOURS_OPTIONS, MINUTES_OPTIONS } from "@/constants";

interface Props {
  locations: string;
}

const BookingForm = ({ locations }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const LOCATIONS_OPTIONS =
    locations &&
    JSON.parse(locations)?.map((location: any) => ({
      _id: location._id,
      name: location.name,
    }));

  const form = useForm<z.infer<typeof BookingSchema>>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      from: "",
      to: "",
      date: "",
      hrsTime: "",
      minTime: "",
      pickupLocation: "",
    },
  });

  async function onSubmit(values: z.infer<typeof BookingSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full items-center mt-6"
      >
        <h2 className="text-center font-bold text-2xl">Search for Cabs</h2>
        <div className="flex gap-6 max-w-7xl w-full">
          <Dropdown
            form={form}
            inputName="from"
            formLabel="From"
            options={LOCATIONS_OPTIONS}
          />
          <Dropdown
            form={form}
            inputName="to"
            formLabel="To"
            options={LOCATIONS_OPTIONS}
          />
          <FormInput
            form={form}
            inputName="pickupLocation"
            formLabel="Pickup Location / Address"
          />
        </div>
        <div className="flex gap-6 max-w-7xl w-full items-start">
          <Dropdown
            form={form}
            inputName="hrsTime"
            formLabel="Pickup Time - Hrs"
            options={HOURS_OPTIONS}
          />
          <Dropdown
            form={form}
            inputName="minTime"
            formLabel="Pickup Time - Min"
            options={MINUTES_OPTIONS}
          />
          <FormInput
            form={form}
            inputName="date"
            formLabel="Date"
            inputType="date"
          />
        </div>

        <Button
          className="bg-primary-500 text-light-900 w-[36rem] mt-8"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Loading..." : "Search"}
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;
