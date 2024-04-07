import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BACKEND_API_URL } from "../constants";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${BACKEND_API_URL}/graphql`,
});

export default client;
