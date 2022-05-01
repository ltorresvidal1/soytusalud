import {useEffect} from 'react'
import { useAuth } from '../context/useAuth'
import { useRouter } from 'next/router'

const PrivatePages = ({children}) => {
    const router = useRouter()
    const { authUser,auth } = useAuth()
    useEffect(() =>{
        if(!authUser){
            router.push("/")
        }
    },[auth, authUser, router])

    
  return (
      <>
      {authUser?(<>{children}</>):null}
      </>
  )
}

export default PrivatePages