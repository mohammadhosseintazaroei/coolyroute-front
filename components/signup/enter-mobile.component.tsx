import React from "react";
import { CrTextField } from "../global/cr-text-fields/cr-text-field.compnent";
import { tv } from "tailwind-variants";
import { Input } from "@nextui-org/input";
import { Phone } from "react-feather";
import { Button } from "@nextui-org/button";
import { CrButton } from "../global/cr-button/cr-button.component";

type Props = {};

const loginStyles = tv({
  slots: {
    formInputsWrapper: "flex flex-col  gap-7",
    mobileInput: "bg-primary-lighter",
  },
});
const styles = loginStyles();
const EnterMobile = (props: Props) => {
  return (
    <div className={styles.formInputsWrapper()}>
      <CrTextField
        type="email"
        label="شماره تلفن"
        placeholder="شماره تلفن خود را وارد کنید"
        startContent={<Phone size={14} />}
        color="primary"
        radius="sm"
      />
      <CrButton color="light" variant="bordered" radius="sm">
        تایید و ادامه
      </CrButton>
    </div>
  );
};
export default EnterMobile;
