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
      light: "border-light",
    },
  },
  defaultVariants: {
    radius: "md",
    color: "primary",
  },
  compoundVariants: [
    {
      class: "border-x",
    },
  ],
});
