"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { z } from "zod";
import { LoginSchema } from "@/lib/validations/admin.validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../inputs";

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
        className="flex flex-col gap-4"
      >
        <FormInput form={form} inputName="email" formLabel="Email" />
        <FormInput
          form={form}
          inputName="password"
          formLabel="Password"
          inputType="password"
        />
        <Button
          className="bg-primary-500 text-light-900 w-full"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
