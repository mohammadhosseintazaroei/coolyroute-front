import EnterMobile from "@/components/signup/enter-mobile.component";
import EnterOtp from "@/components/signup/enter-otp.component";
import LoginBoxLayout from "@/components/signup/login-box-layout.component";
import Login from "@/components/signup/login.component";
import { LoginStates, LoginSteps } from "@/interfaces/signup.interface";
import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "ثبت نام",
  description: "ثبت نام در کولی کد",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

const Page = () => {
  return <Login />;
};
export default Page;
