import { useState , useEffect , useRef } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/initConfig';
import { useLazyQuery } from '@apollo/client';
import { authUser } from '../graphql/user/queries';
import { useAuth } from '../context/useAuth';
import  useFormData  from '../hooks/useFormData'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';



const LoginModal=()=>{
  const { setAuthUser } = useAuth()
  const [ getUser,{loading, error, data} ] = useLazyQuery(authUser);
  const { form, formData, updateFormData } =useFormData();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const descriptionElementRef = useRef(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email , formData.password)
      .then(user=>{
        getUser({variables:{uid:user.uid}})
          .then(response =>{
          setAuthUser(response.data.Usuario)})
      })
  }
 
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  

  return (
    <div>
       <span className='text-white cursor-pointer' onClick={handleClickOpen('paper')} >Iniciar sesión</span>
      <Dialog
        className= "bg-black bg-opacity-50"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      > 
            <DialogTitle align='center' sx={{}}>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                    Iniciar sesión
                </Typography>
            </DialogTitle>
            <DialogContent>
            <form className="p-4" ref={form} onChange={updateFormData} onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="email" className="form-control" id="email" name='email' placeholder="Correo electrónico"></input>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password" name='password' placeholder="Contraseña"></input>
                </div>
                <button type="submit" className="my-8 mx-auto btn btn-primary">Enviar</button>
            </form>
            </DialogContent>
      </Dialog>
  
    </div>
  

  );
}

export default LoginModal;