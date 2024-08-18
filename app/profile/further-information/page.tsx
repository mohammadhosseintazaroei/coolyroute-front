import FurtherInformation from "@/components/profile/further-information";
import Login from "@/components/signup/login.component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "اطلاعات تکمیلی",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

const Page = () => {
  return <FurtherInformation />;
};
export default Page;
