import { useState , useEffect , useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';
import { InputBase } from '@mui/material';
import { useMutation } from '@apollo/client';





const LoginModal=({avance})=>{

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const descriptionElementRef = useRef(null);


//   const [observaciones, setObservaciones] = useState({
//     idAvance: avance._id,
//     observaciones: avance.observaciones})

//   useEffect(() => {
//     if(observaciones.observaciones){
//       crearObservacion({variables: observaciones})
    
//     }
   
//   }, [observaciones]);
 
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

//   const[crearObservacion]=useMutation( MutationCrearObservacion);
  

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
            <form className="p-4">
                <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Correo electrónico"></input>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="contraseña" placeholder="Contraseña"></input>
                </div>
                <button type="submit" className="my-8 mx-auto btn btn-primary">Enviar</button>
            </form>
            </DialogContent>
      </Dialog>
  
    </div>
  

  );
}

export default LoginModal;