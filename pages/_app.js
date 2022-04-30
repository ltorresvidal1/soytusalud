import { useState } from 'react';
import { LayoutMain } from '../components/layouts'
import '../styles/globals.css'
import { client } from '../graphql/initClientSide';
import { ApolloProvider} from "@apollo/client";
import {AuthContext} from '../context/useAuth'



function MyApp({ Component, pageProps }) {
  const [authUser , setAuthUser] = useState({})
  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{authUser,setAuthUser}}>
        <LayoutMain>
          <Component {...pageProps} />
        </LayoutMain>
      </AuthContext.Provider>
    </ApolloProvider>

  )
}

export default MyApp
