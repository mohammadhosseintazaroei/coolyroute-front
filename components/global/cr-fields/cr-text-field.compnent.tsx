"use client";
import { Input, InputProps } from "@nextui-org/input";
import {
  extendVariants,
  InternalForwardRefRenderFunction,
} from "@nextui-org/system";

export const CrTextField = extendVariants(Input, {
  variants: {
    color: {
      primary: {
        inputWrapper:
          " bg-primary-lighter data-[hover=true]:bg-primary-lightest group-data-[focus=true]:bg-primary-lighter text-neutral  group-data-[invalid=true]:!bg-primary-lighter group-data-[invalid=true]:!border-error-light group-data-[invalid=true]:!border-2  ",
        label:
          "text-neutral-lighter group-data-[invalid=true]:!text-neutral-lighter",
        input:
          "placeholder:text-nutral text-neutral-lighter group-data-[invalid=true]:!text-neutral-lighter",
        errorMessage: "group-data-[invalid=true]:!text-neutral-lighte",
      },
    },
    isLtr: {
      true: {
        input: "ltr",
      },
    },
  },
});
