"use client";
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteProps,
} from "@nextui-org/autocomplete";
import { AutocompleteItemProps } from "@nextui-org/react";
import { extendVariants } from "@nextui-org/system";

export const CrAutocomplete = extendVariants(
  (props: AutocompleteProps) => (
    <Autocomplete
      {...props}
      inputProps={{
        classNames: {
          input: "placeholder:text-neutral-light placeholder:text-xs ",
          inputWrapper:
            "bg-primary-lighter data-[hover=true]:bg-primary-lightest group-data-[focus=true]:bg-primary-lighter text-neutral  group-data-[invalid=true]:!bg-primary-lighter group-data-[invalid=true]:!border-error-light group-data-[invalid=true]:!border-2",
          label: "text-neutral-lighter ",
        },
        ...props.inputProps,
      }}
    />
  ),
  {
    variants: {
      color: {
        primary: {
          label:
            "!bg-primary-lighter data-[hover=true]:bg-primary-lightest group-data-[focus=true]:bg-primary-lighter text-neutral  group-data-[invalid=true]:!bg-primary-lighter group-data-[invalid=true]:!border-error-light group-data-[invalid=true]:!border-2  ",
          base: "text-neutral-lighter group-data-[invalid=true]:!text-neutral-lighter",
          popoverContent: "!bg-primary-lighter",
          selectorButton: "text-neutral-lighter",
        },
      },
      isLtr: {
        true: {
          input: "ltr",
        },
      },
    },
  }
);

export const CrAutocompleteItem = extendVariants(AutocompleteItem, {});
