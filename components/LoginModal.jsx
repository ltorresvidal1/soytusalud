import { useState , useEffect , useRef } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/initConfig';
import { client } from '../graphql/initClientSide';
import { authUser } from '../graphql/user/queries';
import { useAuth } from '../context/useAuth';
import  useFormData  from '../hooks/useFormData'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';


let usuarioId = {}

const LoginModal=()=>{
  const { setAuthUser } = useAuth()
  const { form, formData, updateFormData } =useFormData();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const descriptionElementRef = useRef(null);
  

  const handleSubmit = async (e)=>{
    e.preventDefault();
     await signInWithEmailAndPassword(auth, formData.email , formData.password)
      .then(user=>{
        usuarioId = user.user.uid
      })
      const {data} = await client.query({
        query: authUser,
        variables:{
          uid:usuarioId
          }
        })
      setAuthUser(data.Usuario)
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
       <a className="main-menu__link whitespace-nowrap " onClick={handleClickOpen('paper')}>
          <span  className=' underline items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer '> Iniciar sesión </span> 
        </a>
      <Dialog
        className= "bg-black bg-opacity-50"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      > 
            <DialogTitle align='center' sx={{}}>
                <Typography id="modal-modal-title" variant="h5" component="div">
                    Inicio de sesión
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