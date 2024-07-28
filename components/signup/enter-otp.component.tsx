"use client";
import { LOGIN, VERIFICATION_CODE } from "@/apis/signup.api";
import { LoginStates, LoginSteps } from "@/interfaces/signup.interface";
import { useLazyQuery } from "@apollo/client";
import React, { useContext, useState } from "react";
import { AlertCircle, Code, Hash, Phone } from "react-feather";
import toast from "react-hot-toast";
import { tv } from "tailwind-variants";
import { CrButton } from "../global/cr-button/cr-button.component";
import { CrTextField } from "../global/cr-fields/cr-text-field.compnent";
import { GeneralDataContext } from "../providers/general-data-provider";
import { useRouter } from "next/navigation";

interface Props {
  setActiveLoginState: React.Dispatch<React.SetStateAction<LoginStates>>;
}
const loginStyles = tv({
  slots: {
    formInputsWrapper: "flex flex-col  gap-7",
    mobileInput: "bg-primary-lighter",
    buttonContainer: "flex w-full gap-7",
  },
});
const styles = loginStyles();
const EnterOtp = (props: Props) => {
  const [otp, setOtp] = useState<string>();
  const { setToken } = useContext(GeneralDataContext);
  const [timeRemaining, setTimeRemaining] = React.useState<number>(
    Number(localStorage.getItem("remainingSeconds")) || 120
  );
  React.useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    }
  }, [timeRemaining]);

  const router = useRouter();
  const phoneNumber: string = localStorage.getItem("phoneNumber")!;

  const [callLogin, { data, loading }] = useLazyQuery(VERIFICATION_CODE, {
    onCompleted: (data) => {
      setToken({ access_token: data.verifyOtp.access_token! });
      localStorage.removeItem("phoneNumber");
    },
    fetchPolicy: "network-only",
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
        phoneNumber,
        code: otp!,
      },
    });
  };
  const handleEditNumberClick = () => {
    props.setActiveLoginState(LoginStates.Login);
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
        required
        onValueChange={handleChangePhoneNumber}
      />
      <div>{timeRemaining}</div>
      <div className={styles.buttonContainer()}>
        <CrButton
          color="success"
          radius="sm"
          type="submit"
          fullWidth
          isLoading={loading}
        >
          تایید و ادامه
        </CrButton>
        <CrButton
          color="light"
          variant="bordered"
          radius="sm"
          onClick={handleEditNumberClick}
          type="submit"
          fullWidth
        >
          ویرایش شماره
        </CrButton>
      </div>
    </form>
  );
};
export default EnterOtp;
