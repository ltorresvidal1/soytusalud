import {useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/initConfig';
import { useAuth } from '../../context/useAuth'
import { MenuHead,MenuFooter } from "../Ui"


export const LayoutMain = ({children}) => {
  const {setAuthUser} = useAuth()

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setAuthUser(user)
        const { data } = client.query({
          query: usuarios
        })
      }else{
        console.log("no esta logueado")
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
