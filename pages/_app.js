import { LayoutMain } from '../components/layouts'
import '../styles/globals.css'
import { client } from '../graphql/initClientSide';
import { ApolloProvider} from "@apollo/client";




function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </ApolloProvider>

  )
}

export default MyApp
