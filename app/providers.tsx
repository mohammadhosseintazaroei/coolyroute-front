import { ApolloWrapper } from "@/components/providers/appolo-client-provider";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloWrapper>
      <NextUIProvider>{children}</NextUIProvider>
    </ApolloWrapper>
  );
}
