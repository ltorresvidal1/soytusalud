import { LayaoutMain } from '../components/layaouts'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    
  <LayaoutMain>
    <Component {...pageProps} />
  </LayaoutMain>
  
  )
}

export default MyApp
