import {useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/initConfig';
import { useAuth } from '../../context/useAuth'
import { authUser } from '../../graphql/user/queries';
import { MenuHead,MenuFooter } from "../Ui"
import { useLazyQuery } from '@apollo/client';

export const LayoutMain = ({children}) => {
  const { setAuthUser } = useAuth()
  const [ getUser,{loading, error, data} ] = useLazyQuery(authUser);

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        getUser({variables:{uid:user.uid}}).then(response =>{
          setAuthUser(response.data.Usuario)
        })
      }else{
        setAuthUser(null)
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
