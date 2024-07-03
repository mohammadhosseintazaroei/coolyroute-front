"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
export const appoloclient = new ApolloClient({
  ssrMode: true,
  uri: "http://localhost:35879/graphql",
  cache: new InMemoryCache(),
});

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AppoloProvider = ({ children }: Props) => {
  return <ApolloProvider client={appoloclient}>{children}</ApolloProvider>;
};

export default AppoloProvider;
