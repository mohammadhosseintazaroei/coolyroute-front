"use client";
import { LOGIN, RENEW_OTP, VERIFICATION_CODE } from "@/apis/auth.api";
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
import { Button } from "../ui/button";

interface Props {
  setActiveLoginState: React.Dispatch<React.SetStateAction<LoginStates>>;
}
const loginStyles = tv({
  slots: {
    formInputsWrapper: "flex flex-col  gap-7",
    mobileInput: "bg-primary-lighter",
    buttonContainer: "flex w-full gap-7",
    resendOtp: "text-lg bold pointer text-[#99BCFF] cursor-pointer",
    timeRemainingMessage: "text-lg bold  text-nutral-lighter",
    resendWrapper: "flex justify-center",
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

  const [callVerifyCode, { data, loading }] = useLazyQuery(VERIFICATION_CODE, {
    onCompleted: (data) => {
      setToken({ access_token: data.verifyOtp.access_token! });
      localStorage.removeItem("phoneNumber");
    },
    fetchPolicy: "network-only",
  });
  const [callRenewOtp, { loading: renewOtpLoading }] = useLazyQuery(LOGIN, {
    onCompleted: (data) => {
      toast(data?.login.message!, {
        icon: <AlertCircle />,
      });
      data.login.remainingSeconds
        ? setTimeRemaining(data.login.remainingSeconds)
        : setTimeRemaining(120);
    },
    onError: (error) => {
      toast.error(error.message);
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
    callVerifyCode({
      variables: {
        phoneNumber,
        code: otp!,
      },
    });
  };
  const handleEditNumberClick = () => {
    props.setActiveLoginState(LoginStates.Login);
  };
  const handleRenewOtpClick = () => {
    callRenewOtp({
      variables: {
        phoneNumber: phoneNumber,
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
        required
        onValueChange={handleChangePhoneNumber}
      />

      <div className={styles.resendWrapper()}>
        {timeRemaining > 0 ? (
          <div className={styles.timeRemainingMessage()}>
            ارسال مجدد کد تا {timeRemaining} ثانیه دیگر
          </div>
        ) : (
          <span className={styles.resendOtp()} onClick={handleRenewOtpClick}>
            ارسال مجدد کد
          </span>
        )}
      </div>
      <div className={styles.buttonContainer()}>
        <Button color="success" type="submit">
          تایید و ادامه
        </Button>
        <Button color="light" onClick={handleEditNumberClick} type="button">
          ویرایش شماره
        </Button>
      </div>
    </form>
  );
};
export default EnterOtp;
