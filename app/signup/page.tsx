"use client";
import EnterMobile from "@/components/signup/enter-mobile.component";
import EnterOtp from "@/components/signup/enter-otp.component";
import LoginBoxLayout from "@/components/signup/login-box-layout.component";
import { LoginStates, LoginSteps } from "@/interfaces/signup.interface";
import { useState } from "react";

const loginSteps: LoginSteps[] = [
  {
    title: "اطلاعات زیر رو پر کن تا به همه خدمات سایت دسترسی پیدا کنی !",
    description: "برای ورود به حساب کاربری خود شماره خود را وارد کنید.",
    state: LoginStates.FurtherInformation,
  },
];

const LoginPage = (props: Props) => {



  
  const [activeLoginState, setActiveLoginState] = useState<LoginStates>(
    LoginStates.Login
  );

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
export default LoginPage;
