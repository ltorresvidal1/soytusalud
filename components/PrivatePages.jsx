import {useEffect} from 'react'
import { useAuth } from '../context/useAuth'
import { useRouter } from 'next/router'

const PrivatePages = ({children}) => {
    const router = useRouter()
    const { authUser } = useAuth()
    useEffect(() =>{
        if(authUser){
            router.push("/")
        }
    },[])

    
  return (
      <>
      {authUser?null:(<>{children}</>)}
      </>
  )
}

export default PrivatePages