import {useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/initConfig';
import { useAuth } from '../../context/useAuth'
import { client } from '../../graphql/initClientSide'
import { authUser } from '../../graphql/user/queries';
import { Navbar,ImageBackground,MenuFooter } from '../Ui/public';
import { Box } from '@mui/material';



export const LayoutMain = ({children}) => {
  const { setAuthUser } = useAuth() 

  useEffect(()=>{
    Promise.all([
    onAuthStateChanged(auth,(user)=>{
      if(user){
        client.query({
          query: authUser,
          variables:{
            uid:user.uid
            }
          })
          .then(response =>{
            setAuthUser(response.data.Usuario)
    
        })
        
      }else{
        setAuthUser(null)
      }
    })
  ])
  },[])



  return (
    <Box sx={{backgroundColor:'#F9F7F6'}} >
        <Navbar></Navbar>
        <ImageBackground></ImageBackground>
          {children}
        <MenuFooter></MenuFooter>
    </Box>
  )
}
