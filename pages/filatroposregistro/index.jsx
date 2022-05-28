import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { useMutation } from "@apollo/client";
import { registrarFilantropo } from "/graphql/filantropos/mutations";
import { auth  } from '/firebase/initConfig'
import { useRouter } from 'next/router'
import {LayoutMain} from '/components/layouts/LayoutMain'

import Image from 'next/image'
import useFormData from '/hooks/useFormData';
import PrivatePages from "/components/PrivatePages";

const Filatroposregistro = () => {

    const router = useRouter()
    const [crearFilantropo] = useMutation(registrarFilantropo)
    // const [login , setLogin] = useState(false)

    const { form, formData, updateFormData } =useFormData();

  const submitForm = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth,formData.correo, formData.password)
    .then((user) => {
            delete formData.password
            formData["uid"] = user.user.uid
            console.log(formData)
            crearFilantropo({variables: formData})
            router.push("/")
    })
    .catch((error)=>{
      console.log(error)

    })
    }

  return (
    <LayoutMain>
   
    <main className="main">
            <section className="promo-primary promo-primary--shop">
                <picture>
                    <source srcSet="img/counter.jpg" media="(min-width: 992px)"/>
        <picture  className="img--bg">
            <Image src="/promo_c1.png" alt="img"  layout="fill" objectFit='cover' objectPosition="50% 25%"/>
        </picture>
                </picture>
                <div className="promo-primary__description"> <span></span></div>
                <div className="container">
                    <div className="row">
                        <div className="col-auto">
                            <div className="align-container">
                                            <div className="align-container__item"><span className="promo-primary__pre-title">Soy Tú Salud</span>
                                    <h1 className="promo-primary__title"><span>Registrate</span><span></span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- section start--> */}
            <section className="section background--brown">
                <div className="container">
                    <div className="row offset-margin">
                        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-0 col-xl-2 margin-bottom">                  
                        </div>
                        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-0 col-xl-6 margin-bottom">
                            
                        <form ref={form} onChange={updateFormData} onSubmit={submitForm} className="form account-form sign-up-form"  id="Form_RegistroFilantropo" > 
                                <div className="form__fieldset">
                                    <h6 className="form__title">Registrate</h6>
                                    <div className="row">
                                        <div className="col-12">
                                                <div className="row">
                                            <select className="form__field" name="tipoDocumento" id="tipoDocumento">
                                                        <option value="0">Tipo Documento</option>
                                                        <option value="1">NIT</option>
                                                        <option value="2">CC</option>
                                                        <option value="3">CE</option>
                                                        <option value="4">PA</option>
                                            </select>
                                            
                                            </div>
                                                <div className="row">
                                            <input className="form__field" type="text" name="identificacion"  id="identificacion"  placeholder="Documento o Nit"/>
                                            </div>
                                            <div className="row">								
                                            <input className="form__field" type="text" name="nombre"  id="nombre" placeholder="Nombre o Razon Social"/>
                                            </div>
                                                                                    <div className="row">
                                            <input className="form__field" type="text" name="celular"   id="celular"  placeholder="Celular"/>
                                            </div>
                                            <div className="row">
                                            <input className="form__field" type="text" name="direccion"   id="direccion"  placeholder="Direccion"/>
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
   
       
    </LayoutMain>
  )
}


export default Filatroposregistro