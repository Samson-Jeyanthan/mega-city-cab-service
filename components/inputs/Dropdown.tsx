"use client";

import { useState } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type TDropdownProps = {
  form: any;
  formLabel?: string;
  inputName: string;
  options: { _id: string; name: string }[];
  formDescription?: string;
  prevValue?: string;
  onValueChange?: (_id: string) => {};
  dependentFieldPlaceholder?: string;
  dependentFieldValue?: boolean;
};

const Dropdown = ({
  form,
  formLabel,
  inputName,
  options,
  formDescription,
  prevValue,
  onValueChange,
  dependentFieldPlaceholder,
  dependentFieldValue,
}: TDropdownProps) => {
  const [value, setValue] = useState(prevValue || "");

  const handleSelectChange = (_id: string, field: any) => {
    field.onChange(_id);
    onValueChange && onValueChange(_id);
    console.log(_id, dependentFieldValue);
  };

  return (
    <FormField
      control={form.control}
      name={inputName}
      render={({ field }) => (
        <FormItem className="w-full pb-2">
          <FormLabel className="text-black">{formLabel}</FormLabel>
          <FormControl className="no-focus">
            <Select
              onValueChange={(_id: string) => handleSelectChange(_id, field)}
            >
              <SelectTrigger className="no-focus text-black border border-solid border-light-700 bg-light-800 text-sm dark:border-dark-350 dark:bg-dark-250 capitalize">
                {value ? (
                  <p className="first-letter:capitalize">{value}</p>
                ) : (
                  <SelectValue className="capitalize" />
                )}
              </SelectTrigger>
              <SelectContent className="no-focus text-light-100 border border-solid border-light-700 bg-light-800 text-sm">
                {!dependentFieldValue && dependentFieldPlaceholder && (
                  <div className="text-light-400 flex items-center p-1 text-sm">
                    -- {dependentFieldPlaceholder} --
                  </div>
                )}
                {options?.map((option, index) => (
                  <SelectItem
                    key={index}
                    value={option?._id}
                    className="cursor-pointer capitalize hover:bg-light-700"
                    onClick={() => setValue("")}
                  >
                    {option?.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          {formDescription && (
            <FormDescription className="mt-2 text-xs text-light-500">
              {formDescription}
            </FormDescription>
          )}
          <FormMessage className="text-xs text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default Dropdown;
