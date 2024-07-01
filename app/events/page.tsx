import { tv } from "tailwind-variants";
import { container } from "../../globalStyles/layout";
import Events from "@/components/events/events.compnent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "رویداد ها",
  description: "رویداد های تخصصی، در همه حوزه های کاری.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

interface Props {}

const EventsPage = (props: Props) => {
  return <Events />;
};

export default EventsPage;
