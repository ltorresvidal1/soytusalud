import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { useMutation } from "@apollo/client";
import { registrarUsuario } from "../graphql/user/mutations";
import { auth } from '../firebase/initConfig'
import { useRouter } from 'next/router'
import {LayoutMain} from '../components/layouts/LayoutMain'
import { useState } from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Image from 'next/image'
import useFormData from '../hooks/useFormData';
import PrivatePages from "../components/PrivatePages";
import Paper from '@mui/material/Paper';
import { Container, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Registro = () => {

    const tipoDocumento = [
        {
          value: 'Cedula',
          label: 'CC',
        },
        {
          value: 'Cedula de extranjería',
          label: 'CE',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];

    const router = useRouter()
    const [crearUsuario] = useMutation(registrarUsuario)
    // const [login , setLogin] = useState(false)

    const { form, formData, updateFormData } =useFormData();
    const [name, setName] = useState('Composed TextField');

    const [tipoDoc, setTipoDoc] = useState('EUR');

    const handleChange = (event) => {
      setTipoDoc(event.target.value);
    };

  const submitForm = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth,formData.correo, formData.password)
    .then((user) => {
            delete formData.password
            formData["uid"] = user.user.uid
            console.log(formData)
            crearUsuario({variables: formData})
            router.push("/")
    })
    .catch((error)=>{
      console.log(error)

    })
    }

  return (
    <LayoutMain>
            <Container maxWidth='xl'>
                <div>
                    <div>
                      
                        <div>
                        <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            width: 500,
                            height: 600,
                            margin: 'auto'
                            },
                        }}
                    
                        > 
                            <Paper elevation={4}>
                            <Typography fontFamily={'Quicksand'} sx={{color:'#4A4C70'}} className='text-lg font-extrabold mt-6 ml-6'>Registro</Typography>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1 },
                                        margin: 'a'
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                    <FormControl>
                                        <InputLabel htmlFor="component-outlined">Name</InputLabel>
                                        <OutlinedInput
                                        id="component-outlined"
                                        value={name}
                                        onChange={handleChange}
                                        label="Name"
                                        />
                                    </FormControl>
                                    <div>
                                    <TextField
                                        id="outlined-select-tipoDoc"
                                        select
                                        label="Select"
                                        value={tipoDoc}
                                        onChange={handleChange}
                                        helperText="Selecciona tipo de documento"
                                        >
                                        {tipoDocumento.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                        </TextField>
                                    </div>
                                </Box>
                            </Paper>
                        </Box>
                        <Box
component="form"
sx={{
    '& .MuiTextField-root': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>
</Box>
{/*                             
                            <form ref={form} onChange={updateFormData} onSubmit={submitForm} className="form account-form sign-up-form"  id="Form_RegistroPaciente" > 
                                <div className="form__fieldset">
                                    <h6 className="form__title">Registrate</h6>
                                    <div className="row">
                                        <div className="col-12">
                                                <div className="row">
                                            <select className="form__field" name="tipoDocumento" id="tipoDocumento">
                                                        <option value="0">Tipo Documento</option>
                                                        <option value="1">CC</option>
                                                        <option value="2">CE</option>
                                                        <option value="3">TI</option>
                                                        <option value="4">PA</option>
                                                        <option value="5">RC</option>
                                                        <option value="6">CD</option>
                                                        <option value="7">PT</option>
                                                        <option value="8">MS</option>
                                                        <option value="9">AS</option>
                                                        <option value="10">CN</option>
                                                        <option value="11">SC</option>
                                                    </select>
                                            </div>
                                                <div className="row">
                                            <input className="form__field" type="text" name="identificacion"  id="identificacion"  placeholder="Documento"/>
                                            </div>
                                            <div className="row">								
                                            <input className="form__field" type="text" name="nombre"  id="nombre" placeholder="Nombres Completo"/>
                                            </div>
                                            <div className="row">								
                                            <input className="form__field" type="text" name="apellidos"  id="apellidos" placeholder="Apellidos Completo"/>
                                            </div>
                                            <div className="row">
                                            <input className="form__field" type="text" name="celular"   id="celular"  placeholder="Celular"/>
                                            </div>
                                            <div className="row">
                                            <input className="form__field" type="correo" name="correo"  id="correo" placeholder="Correo"/>
                                            </div>
                                            <div className="row">
                                            <input className="form__field" type="password" name="password" id="password" placeholder="Contraseña" autoComplete="on"/>
                                            </div>
                                            <div className="row">
                                            <input className="form__field" type="password" name="" id="" placeholder="Confirmar Contraseña"  autoComplete="on"/>
                                            </div>
                                        
                                        </div>
                                    
                                        <div className="col-12 text-center">
                                            <button className="form__submit" type="submit">Registrar</button>                 
                                        </div>
                                        <div className="col-12 text-center"><strong><a className="form__link btn_IniciarUsaurio2" href="#">Inicia sesión</a> si tienes una cuenta</strong></div>
                                            
                                    </div>
                                </div>
                            </form>
                                <button type="submit"  id="showtoast" style={{display: "none"}}></button>
                                <button type="submit"  id="showtoast2" style={{display: "none"}}></button> */}
                        </div>
                        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-0 col-xl-2 margin-bottom">
                        </div>
                    </div>
                </div>
            </Container>
    </LayoutMain>
)
}

export default Registro




