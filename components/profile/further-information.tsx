import React from "react";
import LoginBoxLayout from "../signup/login-box-layout.component";
import FurtherInformationForm from "./further-information-form.component";

const FurtherInformation = () => {
  return (
    <LoginBoxLayout
      title="تایید شماره"
      description="کد تایید ۵ رقمی ارسال شده به شماره 09385051602 را وارد نمایید "
      disableBackButton
    >
      <FurtherInformationForm />
    </LoginBoxLayout>
  );
};

export default FurtherInformation;
