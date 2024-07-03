import { tv } from "tailwind-variants";
import { container } from "../../globalStyles/layout";
import Events from "@/components/events/events.compnent";
import { Metadata } from "next";
import { getClient } from "@/lib/appolo-client";
import { GET_ALL_EVENTS } from "@/apis/event.api";

export const metadata: Metadata = {
  title: "رویداد ها",
  description: "رویداد های تخصصی، در همه حوزه های کاری.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

interface Props {}

const events = [
  {
    title: "salam",
    description:
      "توضیحات رویداد برای مثال تاریخ و زمان و موضوعاتی که قراره پوشش داده شه داخخل این رویداد...",
  },
  {
    title: "salam",
    description:
      "توضیحات رویداد برای مثال تاریخ و زمان و موضوعاتی که قراره پوشش داده شه داخخل این رویداد...",
  },
];

const EventsPage = async (props: Props) => {
  const { data, loading, error } = await getClient().query({
    query: GET_ALL_EVENTS,
    fetchPolicy: "cache-first",
    context: {
      fetchOptions: {
        next: { revalidate: 1 },
      },
    },
  });

  return <Events events={data.getAllEvents} />;
};

export default EventsPage;
