"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { z } from "zod";
import { LoginSchema } from "@/lib/validations/admin.validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../inputs";
import Link from "next/link";

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <FormInput form={form} inputName="email" formLabel="Email" />
        <FormInput
          form={form}
          inputName="password"
          formLabel="Password"
          inputType="password"
        />
        <footer className="w-full flex flex-col items-center">
          <p className="text-sm text-light-300 mb-10">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-primary-500 hover:underline cursor-pointer"
            >
              Signup
            </Link>
          </p>

          <Button
            className="bg-primary-500 text-light-900 w-full"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </footer>
      </form>
    </Form>
  );
};

export default LoginForm;
