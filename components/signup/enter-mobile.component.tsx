"use client";
import { LOGIN } from "@/apis/signup.api";
import { LoginStates } from "@/interfaces/signup.interface";
import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { AlertCircle, Phone } from "react-feather";
import toast from "react-hot-toast";
import { tv } from "tailwind-variants";
import { CrButton } from "../global/cr-button/cr-button.component";
import { CrTextField } from "../global/cr-text-fields/cr-text-field.compnent";

interface Props {
  setActiveLoginState: React.Dispatch<React.SetStateAction<LoginStates>>;
}
const loginStyles = tv({
  slots: {
    formInputsWrapper: "flex flex-col  gap-7",
    mobileInput: "bg-primary-lighter",
  },
});
const styles = loginStyles();
const EnterMobile = (props: Props) => {
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [callLogin, { data, loading }] = useLazyQuery(LOGIN, {
    onCompleted: () => {
      toast("کد فرستاده شده را وارد کنید", {
        icon: <AlertCircle />,
      });
      props.setActiveLoginState(LoginStates.EnterOtp);
    },
    onError: (error) => {
      toast.error(error.message);
      props.setActiveLoginState(LoginStates.EnterOtp);
    },
    fetchPolicy: "no-cache",
  });

  const handleChangePhoneNumber = (value: string) => {
    setPhoneNumber(value);
  };
  const handleSubmitPhoneNumber: React.FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();
    callLogin({
      variables: {
        phoneNumber: phoneNumber!,
      },
    });
    localStorage.setItem("phoneNumber", phoneNumber!);
  };
  return (
    <form
      onSubmit={handleSubmitPhoneNumber}
      className={styles.formInputsWrapper()}
    >
      <CrTextField
        type="text"
        label="شماره تلفن"
        placeholder="شماره تلفن خود را وارد کنید"
        startContent={<Phone size={14} />}
        color="primary"
        radius="sm"
        onValueChange={handleChangePhoneNumber}
      />
      <CrButton
        color="light"
        variant="bordered"
        radius="sm"
        type="submit"
        isLoading={loading}
      >
        تایید و ادامه
      </CrButton>
    </form>
  );
};
export default EnterMobile;
