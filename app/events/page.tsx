import { GET_ALL_EVENTS } from "@/apis/event.api";
import Events from "@/components/events/events.main";
import { getClient } from "@/lib/appolo-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "رویداد ها",
  description: "رویداد های تخصصی، در همه حوزه های کاری.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

const EventsPage = async () => {
  const { data } = await getClient().query({
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
