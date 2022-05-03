import {useEffect , useState} from 'react'
import { useAuth } from '../context/useAuth'
import { useRouter } from 'next/router'

const PrivatePages = ({children , login }) => {
    const [render,setRender] = useState(true)
    const router = useRouter()
    const { authUser,auth } = useAuth()

    useEffect(() =>{
        if(authUser && login){
            setRender(true)
        }else if (authUser && !login){
            setRender(false)
            router.push("/")
        }else if (!authUser && !login){
            setRender(true)
        }else if(!authUser && login){
            setRender(false)
            router.push("/")
        }
    },[auth, authUser, router])

    
  return (
      <>
        {render?children:null}
      </>
  )
}

export default PrivatePages