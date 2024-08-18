"use client";
import { Button } from "@nextui-org/button";
import { Input, InputProps } from "@nextui-org/input";
import {
  extendVariants,
  InternalForwardRefRenderFunction,
} from "@nextui-org/system";

export const CrButton = extendVariants(Button, {
  variants: {
    color: {
      light: "border-light ",
      success: "text-light",
    },
    variant: {
      bordered: "border-x border-y",
    },
  },
  defaultVariants: {
    radius: "md",
    color: "primary",
  },
});
