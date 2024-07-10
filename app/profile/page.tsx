"use client";
import { GeneralDataContext } from "@/components/providers/general-data-provider";
import React, { useContext } from "react";

type Props = {};

const Page = (props: Props) => {
  const { userInfo } = useContext(GeneralDataContext);
  console.log(userInfo);
  return <div>Page</div>;
};
export default Page;
