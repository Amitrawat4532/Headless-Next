import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}`,
  cache: new InMemoryCache(),
});
export default client;