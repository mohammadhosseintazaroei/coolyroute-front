import { ApolloWrapper } from "@/components/providers/appolo-client-provider";
import { GeneralDataWrapper } from "@/components/providers/general-data-provider";
import ToasterProvider from "@/components/providers/toaster-provider";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloWrapper>
      <ToasterProvider />
      <GeneralDataWrapper>
        <NextUIProvider>{children}</NextUIProvider>
      </GeneralDataWrapper>
    </ApolloWrapper>
  );
}
