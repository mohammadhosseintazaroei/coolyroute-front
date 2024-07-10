"use client";
import { LOGIN, VERIFICATION_CODE } from "@/apis/signup.api";
import { LoginStates, LoginSteps } from "@/interfaces/signup.interface";
import { useLazyQuery } from "@apollo/client";
import React, { useContext, useState } from "react";
import { AlertCircle, Code, Hash, Phone } from "react-feather";
import toast from "react-hot-toast";
import { tv } from "tailwind-variants";
import { CrButton } from "../global/cr-button/cr-button.component";
import { CrTextField } from "../global/cr-text-fields/cr-text-field.compnent";
import { GeneralDataContext } from "../providers/general-data-provider";

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
const EnterOtp = (props: Props) => {
  const [otp, setOtp] = useState<string>();
  const { setToken } = useContext(GeneralDataContext);

  const [callLogin, { data, loading }] = useLazyQuery(VERIFICATION_CODE, {
    onCompleted: (data) => {
      props.setActiveLoginState(LoginStates.FurtherInformation);
      setToken({ access_token: data.verifyOtp.access_token! });
    },
    fetchPolicy: "no-cache",
  });

  const handleChangePhoneNumber = (value: string) => {
    setOtp(value);
  };
  const handleSubmitPhoneNumber: React.FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();
    callLogin({
      variables: {
        phoneNumber: localStorage.getItem("phoneNumber")!,
        code: otp!,
      },
    });
  };
  return (
    <form
      onSubmit={handleSubmitPhoneNumber}
      className={styles.formInputsWrapper()}
    >
      <CrTextField
        type="text"
        startContent={<Hash size={14} />}
        radius="sm"
        color="primary"
        isLtr
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
export default EnterOtp;
