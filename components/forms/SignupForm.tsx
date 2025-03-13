"use client";

import { SignupSchema } from "@/lib/validations/admin.validations";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { z } from "zod";
import { Form } from "../ui/form";
import { FormInput } from "../inputs";
import { Button } from "../ui/button";
import Link from "next/link";

const SignupForm = () => {
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      nicNo: "",
      phoneNo: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignupSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <FormInput form={form} inputName="name" formLabel="Name" />
        <FormInput form={form} inputName="nicNo" formLabel="NIC Number" />
        <FormInput form={form} inputName="phoneNo" formLabel="Phone Number" />
        <FormInput form={form} inputName="address" formLabel="Address" />
        <FormInput form={form} inputName="email" formLabel="Email" />
        <FormInput
          form={form}
          inputName="password"
          formLabel="Password"
          inputType="password"
        />
        <FormInput
          form={form}
          inputName="confirmPassword"
          formLabel="Confirm Password"
          inputType="password"
        />
        <footer className="w-full flex flex-col items-center">
          <p className="text-sm text-light-300 mb-10">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary-500 hover:underline cursor-pointer"
            >
              Login
            </Link>
          </p>

          <Button
            className="bg-primary-500 text-light-900 w-full"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Registering..." : "Signup"}
          </Button>
        </footer>
      </form>
    </Form>
  );
};

export default SignupForm;
