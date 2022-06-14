import { ApolloClient , InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
    uri: process.env.ENV_API_GRAPHQL || process.env.NEXT_PUBLIC_API_GRAPHQL,
    cache: new InMemoryCache(),
});
