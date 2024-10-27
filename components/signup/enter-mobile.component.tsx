"use client";
import { LOGIN } from "@/apis/auth.api";
import { LoginStates } from "@/interfaces/signup.interface";
import { validatePhoneNumber } from "@/lib/utils/validate";
import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { AlertCircle, Phone } from "react-feather";
import toast from "react-hot-toast";
import { tv } from "tailwind-variants";
import { CrTextField } from "../global/cr-fields/cr-text-field.compnent";
import { Button } from "../ui/button";
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
  const savedPhoneNumber: string = localStorage.getItem("phoneNumber")!;
  const [phoneNumber, setPhoneNumber] = useState<string>(savedPhoneNumber);
  const goToEnterOtp = () => props.setActiveLoginState(LoginStates.EnterOtp);
  const [callLogin, { data, loading }] = useLazyQuery(LOGIN, {
    onCompleted: () => {
      toast(data?.login.message!, {
        icon: <AlertCircle />,
      });
      goToEnterOtp();
      localStorage.setItem(
        "remainingSeconds",
        `${data?.login.remainingSeconds!}`
      );
    },
    onError: (error) => {
      toast.error(error.message);
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
    if (isPhoneNumberValid) {
      callLogin({
        variables: {
          phoneNumber: phoneNumber!,
        },
      });
      localStorage.setItem("phoneNumber", phoneNumber!);
    }
  };
  const isPhoneNumberValid = validatePhoneNumber(phoneNumber!);
  console.log(isPhoneNumberValid);
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
        required
        value={phoneNumber}
        isInvalid={!!phoneNumber && !isPhoneNumberValid}
        errorMessage="شماره تلفن را به درستی وارد کنید"
      />
      <Button color="light" type="submit" >
        تایید و ادامه
      </Button>
    </form>
  );
};
export default EnterMobile;
