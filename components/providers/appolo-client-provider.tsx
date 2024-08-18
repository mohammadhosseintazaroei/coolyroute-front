"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { setContext } from "@apollo/client/link/context";

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token");
    const newHeader = token
      ? {
          ...headers,
          Authorization: `Bearer ${token}`,
        }
      : { ...headers };
    return {
      headers: newHeader,
    };
  });
  function makeClient() {
    const httpLink = new HttpLink({
      uri: "http://localhost:8080/graphql",
      fetchOptions: {
        mode: "cors",
      },
      credentials: "include",
    });

    return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link:
        typeof window === "undefined"
          ? ApolloLink.from([
              new SSRMultipartLink({
                stripDefer: true,
              }),
              authLink.concat(httpLink),
            ])
          : authLink.concat(httpLink),
    });
  }
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
