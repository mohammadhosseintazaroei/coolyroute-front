"use client";
import CrTextField from "@/components/global/cr-text-fields/cr-text-field.compnent";
import EnterMobile from "@/components/signup/enter-mobile.component";
import LoginBoxLayout from "@/components/signup/login-box-layout.component";
import React, { useState } from "react";
import { ArrowLeft, ChevronRight } from "react-feather";
import { tv } from "tailwind-variants";

type Props = {};

enum LoginStates {
  Login = "LOGIN",
  EnterOtp = "ENTEROTP",
  FurtherInformation = "FURTHERINFORMATION",
}
interface LoginSteps {
  state: LoginStates;
  title: string;
  description: string;
  disableBackButton?: boolean;
}
const loginSteps: LoginSteps[] = [
  {
    title: "ثبت‌نام/ورود به حساب کاربری",
    description: "برای ورود به حساب کاربری خود شماره خود را وارد کنید.",
    state: LoginStates.Login,
    disableBackButton: true,
  },
  {
    title: "تایید شماره",
    description:
      "کد تایید ۵ رقمی ارسال شده به شماره 09385051602 را وارد نمایید ",
    state: LoginStates.EnterOtp,
  },
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
            <EnterMobile />
          </LoginBoxLayout>
        );
      case LoginStates.EnterOtp:
        return <>dsfa</>;

      case LoginStates.FurtherInformation:
        return <>dfd</>;

      default:
        return (
          <LoginBoxLayout
            title="ثبت‌نام/ورود به حساب کاربری"
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
