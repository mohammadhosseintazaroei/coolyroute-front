"use client";
import React, { useState } from "react";
import { tv } from "tailwind-variants";
type Varaints = "fill" | "outlined";
interface Props {
  label: string;
  placeholder?: string;
  variant: Varaints;
  name: string;
}
const crTextFieldStyles = tv({
  slots: {
    input: "py-5 px-3 border-none bg-inherit",
  },
});
const styles = crTextFieldStyles();
const CrTextField = (props: Props) => {
  const [id, setId] = useState(() => Math.random().toString(36).substr(2, 9));
  return (
    <div className="bg-primary-lighter rounded-lg   size-fit relative flex items-center ">
      <input
        className={styles.input()}
        onChange={(e) => console.log(e.target.value)}
        id={id}
        name={id}
        placeholder={props.placeholder}
      />
      <label htmlFor={id} className="absolute right-0 cursor-text text-base">
        {props.label}
      </label>
    </div>
  );
};

export default CrTextField;
