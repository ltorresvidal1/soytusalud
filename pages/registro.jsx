import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { useMutation } from "@apollo/client";
import { registrarUsuario } from "../graphql/user/mutations";
import { auth } from '../firebase/initConfig'
import { useRouter } from 'next/router'
import {LayoutMain} from '../components/layouts/LayoutMain'

import useFormData from '../hooks/useFormData';
import PrivatePages from "../components/PrivatePages";

const Registro = () => {

    const router = useRouter()
    const [crearUsuario] = useMutation(registrarUsuario)
    // const [login , setLogin] = useState(false)

    const { form, formData, updateFormData } =useFormData();

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
    <PrivatePages login={false}>
    <main className="main">
            {/* <!-- section start--> */}
            <section className="section background--brown">
                <div className="container">
                    <div className="row offset-margin">
                        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-0 col-xl-2 margin-bottom">                  
                        </div>
                        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-0 col-xl-6 margin-bottom">
                            
                            <form ref={form} onChange={updateFormData} onSubmit={submitForm} className="form account-form sign-up-form"  id="Form_RegistroPaciente" > 
                                <div className="form__fieldset">
                                    <h6 className="form__title">Registrate</h6>
                                    <div className="row">
                                        <div className="col-12">
                                                <div className="row">
                                                    <select className="form__field" defaultValue={"Tipo Documento"} name="tipoDocumento" id="tipoDocumento">
                                                        <option disabled >Tipo Documento</option>
                                                        <option >CC</option>
                                                        <option >CE</option>
                                                        <option >TI</option>
                                                        <option >PA</option>
                                                        <option >RC</option>
                                                        <option >CD</option>
                                                        <option >PT</option>
                                                        <option >MS</option>
                                                        <option >AS</option>
                                                        <option >CN</option>
                                                        <option >SC</option>
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
                                <button type="submit"  id="showtoast2" style={{display: "none"}}></button>
                        </div>
                        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-0 col-xl-2 margin-bottom">
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </PrivatePages>
       
    </LayoutMain>
  )
}


export default Registro