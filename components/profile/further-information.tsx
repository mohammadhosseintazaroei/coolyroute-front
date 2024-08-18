"use client";
import { useContext } from "react";
import { GeneralDataContext } from "../providers/general-data-provider";
import LoginBoxLayout from "../signup/login-box-layout.component";
import FurtherInformationForm from "./further-information-form.component";
import { useRouter } from "next/navigation";

const FurtherInformation = () => {
  const router = useRouter();
  const { isLoggedIn, isLoading, userInfo } = useContext(GeneralDataContext);
  if (isLoading) {
    return <>loading ...</>;
  }
  if (isLoggedIn && userInfo.isComplete) {
    router.push("/events");
    return;
  }
  return (
    <LoginBoxLayout
      title="تکمیل اطالاعات حساب کاربردی"
      description="اطلاعات زیر رو پر کن تا به همه خدمات سایت دسترسی پیدا کنی !"
      disableBackButton
    >
      <FurtherInformationForm />
    </LoginBoxLayout>
  );
};

export default FurtherInformation;
