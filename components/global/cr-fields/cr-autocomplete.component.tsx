"use client";
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteProps,
} from "@nextui-org/autocomplete";
import { extendVariants } from "@nextui-org/system";

export const CrAutocomplete = extendVariants(
  (props: AutocompleteProps) => (
    <Autocomplete
      inputProps={{
        classNames: {
          inputWrapper:
            "bg-primary-lighter data-[hover=true]:bg-primary-lightest group-data-[focus=true]:bg-primary-lighter text-neutral  group-data-[invalid=true]:!bg-primary-lighter group-data-[invalid=true]:!border-error-light group-data-[invalid=true]:!border-2",
          label: "text-neutral-lighter ",
        },
      }}
      {...props}
    />
  ),
  {
    variants: {
      color: {
        primary: {
          label:
            "!bg-primary-lighter data-[hover=true]:bg-primary-lightest group-data-[focus=true]:bg-primary-lighter text-neutral  group-data-[invalid=true]:!bg-primary-lighter group-data-[invalid=true]:!border-error-light group-data-[invalid=true]:!border-2  ",
          base: "text-neutral-lighter group-data-[invalid=true]:!text-neutral-lighter",
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
