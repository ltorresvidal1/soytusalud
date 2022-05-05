import { useState } from 'react';
import '../styles/globals.css'
import { client } from '../graphql/initClientSide';
import { ApolloProvider} from "@apollo/client";
import {AuthContext} from '../context/useAuth'



function MyApp({ Component, pageProps }) {
  const [authUser , setAuthUser] = useState({})
  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{authUser,setAuthUser}}>
          <Component {...pageProps} />
      </AuthContext.Provider>
    </ApolloProvider>

  )
}

export default MyApp
