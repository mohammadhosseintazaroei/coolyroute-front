import { GET_EVENT_BY_ID } from "@/apis/event.api";
import { getClient } from "@/lib/appolo-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "رویداد ها",
  description: "رویداد های تخصصی، در همه حوزه های کاری.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

const Page = async ({ params }: { params: { id: string } }) => {
  console.log("params", params);
  console.log("params", typeof params.id);
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

  return (
    <div className="flex flex-col">
      <h1 className="block">{data.getEventById.id}</h1>
      <h2> {data.getEventById.title}</h2>
      <div> {data.getEventById.description}</div>
    </div>
  );
};

export default Page;
