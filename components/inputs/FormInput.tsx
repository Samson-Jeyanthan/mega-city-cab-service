"use client";

import { cn } from "@/lib/utils";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface Props {
  form: any;
  inputName: string;
  inputType?: string;
  formLabel: string;
  formDescription?: string;
  customClassName?: string;
  placeholder?: string;
}

const FormInput = ({
  form,
  inputName,
  inputType,
  formLabel,
  formDescription,
  customClassName,
  placeholder,
}: Props) => {
  return (
    <FormField
      control={form.control}
      name={inputName}
      render={({ field }) => (
        <FormItem className="flex w-full flex-col pt-[3px]">
          <FormLabel className="text-light-100 mb-[2px]">{formLabel}</FormLabel>
          <FormControl>
            <Input
              type={inputType || "text"}
              {...field}
              onChange={(e) =>
                field.onChange(
                  inputType === "number"
                    ? Number(e.target.value)
                    : e.target.value
                )
              }
              placeholder={placeholder}
              className={cn(
                "no-focus text-light-100 bg-light-800 border border-solid border-light-700 text-sm placeholder:text-light-500",
                customClassName
              )}
            />
          </FormControl>
          {formDescription && (
            <FormDescription className="-mt-1 text-xs text-light-500">
              {formDescription}
            </FormDescription>
          )}
          <FormMessage className="text-xs text-red-600" />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
