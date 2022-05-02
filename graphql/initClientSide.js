import { ApolloClient , InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
    uri: "https://soytusalud.vercel.app/api/graphql",
    cache: new InMemoryCache(),
});
