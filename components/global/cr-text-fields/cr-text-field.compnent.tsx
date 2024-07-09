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
          " bg-primary-lighter data-[hover=true]:bg-primary-lightest group-data-[focus=true]:bg-primary-lighter text-neutral ltr-grid",
        label: "text-neutral-lighter ",
        input: "placeholder:text-nutral text-neutral-lighter",
      },
    },
  },
  defaultVariants: {
    radius: "md",
    color: "primary",
  },
});
