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
      date: new Date(),
      time: "",
      pickupLocation: "",
    },
  });

  async function onSubmit(values: z.infer<typeof BookingSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 w-full"
      >
        <div>
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
        </div>
        <div>
          <FormInput
            form={form}
            inputName="date"
            formLabel="Date"
            inputType="date"
          />
        </div>
        <FormInput
          form={form}
          inputName="pickupLocation"
          formLabel="Pickup Location / Address"
        />
      </form>
    </Form>
  );
};

export default BookingForm;
