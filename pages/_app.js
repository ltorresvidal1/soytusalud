import { useState } from 'react';
import '../styles/globals.css'
import { client } from '../graphql/initClientSide';
import { ApolloProvider} from "@apollo/client";
import {AuthContext} from '../context/useAuth'
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../components/Ui/themes/lightTheme';



function MyApp({ Component, pageProps }) {
  const [authUser , setAuthUser] = useState({})
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={lightTheme}>
        <AuthContext.Provider value={{authUser,setAuthUser}}>
            <Component {...pageProps} />
        </AuthContext.Provider>
      </ThemeProvider>
    </ApolloProvider>

  )
}

export default MyApp
