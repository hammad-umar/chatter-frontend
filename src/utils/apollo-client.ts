/* eslint-disable @typescript-eslint/no-explicit-any */

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import router from "../routes";
import { BACKEND_API_URL, EXCLUDED_ROUTES } from "../constants";

const logoutLink = onError((error) => {
  if (
    error.graphQLErrors?.length &&
    (error?.graphQLErrors[0]?.extensions?.originalError as any)?.statusCode ===
      401
  ) {
    if (!EXCLUDED_ROUTES.includes(window.location.pathname)) {
      client.resetStore();
      router.navigate("/login");
    }
  }
});

const httpLink = new HttpLink({
  uri: `${BACKEND_API_URL}/graphql`,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: logoutLink.concat(httpLink),
});

export default client;
