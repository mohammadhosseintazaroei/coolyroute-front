"use client";
import CrTextField from "@/components/global/cr-text-fields/cr-text-field.compnent";
import React, { useState } from "react";
import { ArrowLeft, ChevronRight } from "react-feather";
import { tv } from "tailwind-variants";

type Props = {};

enum LoginStates {
  login = "LOGIN",
  enterOtp = "ENTEROTP",
  furtherInformation = "FURTHERINFORMATION",
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
    state: LoginStates.login,
    disableBackButton: true,
  },
  {
    title: "تایید شماره",
    description:
      "کد تایید ۵ رقمی ارسال شده به شماره 09385051602 را وارد نمایید ",
    state: LoginStates.login,
  },
  {
    title: "اطلاعات زیر رو پر کن تا به همه خدمات سایت دسترسی پیدا کنی !",
    description: "برای ورود به حساب کاربری خود شماره خود را وارد کنید.",
    state: LoginStates.login,
  },
];
const loginStyles = tv({
  slots: {
    formWrapper:
      "flex flex-col rounded-lg bg-primary-light px-6 pt-8 pb-11 w-[630px] gap-10",
    formTitle: "text-2xl font-medium text-neutral-light",
    backButton:
      "bg-primary-lighte rounded-2xl size-12 flex justify-center items-center",
    backIcon: "size-5",
    formHeader: "flex flex-col gap-3",
    headerDescription: "text-neutral",
    formTitleWrapper: "flex gap-5 items-center",
    formInputsWrapper: "flex flex-col  gap-7",
  },
});
const styles = loginStyles();
const LoginPage = (props: Props) => {
  const [activeLoginState, setActiveLoginState] = useState<LoginStates>(
    LoginStates.login
  );
  return (
    <div className={styles.formWrapper()}>
      <div className={styles.formHeader()}>
        <div className={styles.formTitleWrapper()}>
          <button className={styles.backButton()}>
            <ChevronRight className="size-7" />
          </button>
          <h1 className={styles.formTitle()}>ثبت‌نام/ورود به حساب کاربری</h1>
        </div>
        <span className={styles.headerDescription()}>
          برای ورود به حساب کاربری خود شماره خود را وارد کنید.
        </span>
      </div>
      <div className={styles.formInputsWrapper()}>
        <CrTextField variant="fill" label="شماره تلفن" name="phonenumber" />
      </div>
    </div>
  );
};
export default LoginPage;
