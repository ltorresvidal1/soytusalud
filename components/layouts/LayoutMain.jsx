import {useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/initConfig';
import { useAuth } from '../../context/useAuth'
import { authUser } from '../../graphql/user/queries';
import { MenuHead,MenuFooter } from "../Ui"
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/client';

export const LayoutMain = ({children}) => {
  const router = useRouter()
  const { setAuthUser } = useAuth()
  const [ getUser ] = useLazyQuery(authUser);

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
          getUser({variables:{uid:user.uid}})
            .then(response =>{
            setAuthUser(response.data.Usuario)
        })
      }else{
        setAuthUser(null)
        router.push("/")
      }
    })
  },[])



  return (
    <div>
        <MenuHead ></MenuHead>
          {children}
        <MenuFooter></MenuFooter>
    </div>
  )
}
