import { GET_EVENT_BY_ID } from "@/apis/event.api";
import EventPage from "@/components/event-page";
import { getClient } from "@/lib/appolo-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "رویداد ها",
  description: "رویداد های تخصصی، در همه حوزه های کاری.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

const Page = async ({ params }: { params: { id: string } }) => {
  const { data, loading, error } = await getClient().query({
    query: GET_EVENT_BY_ID,
    variables: {
      id: Number(params.id),
    },
    fetchPolicy: "cache-first",
    context: {
      fetchOptions: {
        next: { revalidate: 1 },
      },
    },
  });
  console.log("hi", data);
  return (
    <div className="flex flex-col overflow-hidden">
      <EventPage data={data.getEventById} />
    </div>
  );
};

export default Page;
