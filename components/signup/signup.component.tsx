"use client";

import { LoginStates, LoginSteps } from "@/interfaces/signup.interface";
import { useContext, useState } from "react";
import LoginBoxLayout from "./login-box-layout.component";
import EnterMobile from "./enter-mobile.component";
import EnterOtp from "./enter-otp.component";
import { GeneralDataContext } from "../providers/general-data-provider";
import { useRouter } from "next/navigation";

const loginSteps: LoginSteps[] = [
  {
    title: "اطلاعات زیر رو پر کن تا به همه خدمات سایت دسترسی پیدا کنی !",
    description: "برای ورود به حساب کاربری خود شماره خود را وارد کنید.",
    state: LoginStates.FurtherInformation,
  },
];
const Signup = () => {
  const router = useRouter();
  const [activeLoginState, setActiveLoginState] = useState<LoginStates>(
    LoginStates.Login
  );

  const { isLoggedIn, isLoading } = useContext(GeneralDataContext);

  if (isLoading) {
    return <>loading...</>;
  }
  if (isLoggedIn) {
    router.push("/");
  }
  const returnActiveLoginView = () => {
    switch (activeLoginState) {
      case LoginStates.Login:
        return (
          <LoginBoxLayout
            title="ثبت‌نام/ورود به حساب کاربری"
            description="برای ورود به حساب کاربری خود شماره خود را وارد کنید."
            disableBackButton
          >
            <EnterMobile setActiveLoginState={setActiveLoginState} />
          </LoginBoxLayout>
        );
      case LoginStates.EnterOtp:
        return (
          <LoginBoxLayout
            title="تایید شماره"
            description="کد تایید ۵ رقمی ارسال شده به شماره 09385051602 را وارد نمایید "
            disableBackButton
          >
            <EnterOtp setActiveLoginState={setActiveLoginState} />
          </LoginBoxLayout>
        );

      case LoginStates.FurtherInformation:
        return (
          <LoginBoxLayout
            title="اطلاعات زیر رو پر کن تا به همه خدمات سایت دسترسی پیدا کنی !"
            description="برای ورود به حساب کاربری خود شماره خود را وارد کنید."
            disableBackButton
          >
            {/* <FurtherInformation setActiveLoginState={setActiveLoginState} /> */}
            <>DFAS</>
          </LoginBoxLayout>
        );

      default:
        return (
          <LoginBoxLayout
            title="اطلاعات زیر رو پر کن تا به همه خدمات سایت دسترسی پیدا کنی !"
            description="برای ورود به حساب کاربری خود شماره خود را وارد کنید."
            disableBackButton
          >
            <EnterMobile />
          </LoginBoxLayout>
        );
    }
  };

  return returnActiveLoginView();
};

export default Signup;
