import React, { ReactNode } from "react";
import { tv } from "tailwind-variants";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  disabled?: boolean;
}
const button = tv({
  base: "text-white text-sm py-2 duration-200 px-4 rounded-md",
  variants: {
    color: {
      success: "bg-success hover:bg-green-700 active:bg-green-900",
      secondary: "bg-purple-500 hover:bg-purple-700",
    },
    disabled: {
      true: "opacity-50 bg-gray-500 pointer-events-none",
    },
  },
  compoundVariants: [
    {
      color: "success",
      disabled: true,
      class: "bg-green-100 text-green-700 dark:text-green-800", // You can also use "className"
    },
  ],
});

const CrButton = (props: Props) => {
  return (
    <button
      {...props}
      className={button({ color: "success", disabled: props.disabled })}
    >
      {props.children}
    </button>
  );
};

export default CrButton;
