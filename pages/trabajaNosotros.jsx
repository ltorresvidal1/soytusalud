
import Head from 'next/head'
import { useState } from 'react';
import Image from 'next/image'
import { storage } from '../firebase/initConfig';
import { ref, uploadBytes } from 'firebase/storage';
import { useMutation } from '@apollo/client';
import { especialiades } from '../utils/especialidades';
import { departamentos } from '../utils/deparamentos';
import { municipios } from '../utils/municipios';

// import PrivatePages from '../../components/PrivatePages';
import useFormData from '../hooks/useFormData';
import { useAuth } from '../context/useAuth';
import { LayoutMain } from '../components/layouts/LayoutMain';


const TrabajaNosotros = () => {

	const {authUser} = useAuth()
	const [filterMunicipios,setFilterMunicipios]= useState([])
	const [photo,setPhoto] = useState("/Foto.png")
	const { form, formData, updateFormData } =useFormData();
	let municipiosFiltrado 
	
	const handleSubmit =async(e)=>{
		formData["uid"] =authUser.uid
		e.preventDefault();
		const imagRef = ref(storage,`${authUser.identificacion}/perfil.jpg`)
		const historiaClinicaRef = ref(storage ,`${authUser.identificacion}/historiaClinica.pdf`)
		const sisbenRef = ref(storage,`${authUser.identificacion}/sisben.pdf`)
		await uploadBytes(imagRef, formData.foto)
			.then((ref)=>{
			formData.foto=ref.metadata.fullPath
		})
		await uploadBytes(sisbenRef, formData.sisben)
		.then((ref)=>{
			formData.sisben=ref.metadata.fullPath
		})
		await uploadBytes(historiaClinicaRef, formData.historiaClinica)
		.then((ref)=>{
			formData.historiaClinica=ref.metadata.fullPath
		})
		console.log(formData)
	}

	const handlePhoto = async (e)=>{
		const reader = new FileReader();
		if(e.target.files[0]){
			reader.readAsDataURL(e.target.files[0])
			reader.onload = e => {
				setPhoto(e.target.result);
			};
		}	
	}

	
const handleDpto=(e)=>{
	console.log(e.target.value)
	municipiosFiltrado = municipios.filter(municipio=> municipio.codigodepartamento === e.target.value)
	setFilterMunicipios(municipiosFiltrado)
}

  return (
    <LayoutMain>
		<main className="main">
					<section className="section contacts no-padding-top">
						<div className="contacts-wrapper">
							<div className="container">
								<div>
									<div className="col-xl-12">
										<form className="form message-form" ref={form} onChange={updateFormData} onSubmit={handleSubmit}  id="Form_TuHistoria" >
													
												<h6 className="form__title">Si consideras que eres una persona en situación de vulnerabilidad, que padece una enfermedad y necesita servicios médicos, diligencia este formulario y te pondremos en contacto con un especialista que te ayude a mejorar su estado de salud.</h6>
												<label className="control-label mb-1">Por favor, verifique los campos obligatorios marcados con un (*) </label>   
										
													<div className="row">
														<div className="col-lg-5"></div>
														<div className="col-lg-2">
															<div className="contenedor">
																<h6 className="form__title">Foto</h6>
														
																	<div className="FotoHistoria">
																		<Image alt='defaultPhoto' className="profile-pic" id='perfil' name='perfil' src={photo} height="150"    width="180"/>
																		<label className="centrado" htmlFor="logo"><span className="badge badge-primary r-3">Subir Foto</span></label>   
																		<input type="file" onChange={handlePhoto} id="foto" name="foto" accept="image/*" className="custom-file-input" required/>
																		
																	</div>
															</div>
														</div>
													</div>
													
													<div className="row">
														<div className="col-12 mt-4"><h6 className="form__title">Datos Personales</h6></div>
														<div className="col-lg-3">
																<label>Nombres *</label>
                                                                <input className="form-control" type="text" name="nombres" id="nombres" required/>
														</div>
												
														<div className="col-lg-3">
															<label >Apellidos *</label>
															<input className="form-control" type="text" name="apellidos" id="apellidos" required/>
														</div>
														<div className="col-lg-3">
															<label>Tipo documento *</label>
																<select className="form-control" name="tipoDocumento" id="tipoDocumento required">
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
														<div className="col-lg-3">
															<label >Numero de documento *</label>
															<input className="form-control" type="text" name="numeroDocumento" id="numeroDocumento" required/>
														</div>
														<div className="col-lg-4">
															<label>Departamento</label>
															<select onChange={handleDpto} name="departamento-568" className="form-control" aria-required="true" aria-invalid="false" required>
																<option value="">Departamento</option>
																{departamentos.map((depatamento)=>(
																	<option value={depatamento.codigo} key={depatamento.codigo}>{depatamento.nombre}</option>
																))}
															</select>
														</div>
														<div className="col-lg-4">
															<label>Municipio</label>
															<select name="departamento-568" className="form-control" aria-required="true" aria-invalid="false" required>
																<option value="">Municipio</option>
																{filterMunicipios.map((municipio,index)=>(
																	<option key={index}>{municipio.nombre}</option>
																))}
															</select>
														</div>
														<div className="col-lg-4">
															<label>Dirección comercial completa *</label>
															<input className="form-control" type="text" name="direccion" id="direccion" required/>
														</div>
														<div className="col-lg-3">
															<label>E-mail *</label>
															<input className="form-control" type="email" name="e-mail" id="e-mail" required/>
														</div>
														<div className="col-lg-3">
															<label>Página Web *</label>
															<input className="form-control" type="url" name="web" id="web" required/>
														</div>
														<div className="col-lg-3">
														<label>Número celular *</label>
														<input className="form-control" type="text" name="celular" id="celular" required/>
													</div>
													<div className="col-lg-3">
														<label>Número celular #2</label>
														<input className="form-control" type="text" name="celular" id="celular"/>
													</div>
												</div> 
											
											<div className="row">
												<div className="col-12 mt-4"><h6 className="form__title">Adjuntar Documentos</h6></div>
													<div className="col-lg-4">
														<label>Tipo de Servicio *</label>
														<select className="form-control" name="tipoServicio" id="tipoServicio" required>
															<option value="">Seleccionar</option>
															<option>Consulta Médica General</option>
															<option>Consulta Médica Especializada</option>
															<option>Otros profesionales de la salud</option>
															<option>Ayudas diagnósticas</option>
															<option>Exámenes de laboratorio</option>
															<option>Suministro de medicamentos</option>
															<option>Rayos X</option>
															<option>Terapias</option>
															<option>Cirugía Ambulatoria</option>
															<option>Otros servicios adicionales</option>
														</select> 
													</div>
													<div className="col-lg-4">
												<label>Especilidad </label>
													<select className="form-control" name="Especialidad" id="Especialidad" required>
														<option disabled >Tipo Especialidad</option>
														{especialiades.map((especialidad)=>(
															<option key={especialidad} value={especialidad}>{especialidad}</option>
															))}
													</select>
												</div>
												<div className="col-4">
													<label>Modalidad de atención*</label>	
													<select className="form-control" name="modalidad" id="modalidad" required>
														<option value="">Seleccionar</option>
														<option>Domiciliaria</option>
														<option>Presencial</option>
														<option>Telemedicina</option>
													</select>
												</div>
											</div>
											<div className="row mt-4">
												<div className="col-lg-4">
													<label>Disponibilidad horaria</label>
													<select className="form-control" name="modalidad" id="modalidad" required>
														<option value="">Seleccionar</option>
													</select>
												</div>
												<div className="col-4">
													<label>Valor del servicio *</label>	
													<input className="form-control" name="valorServicio" id="valorServicio" required></input>
												</div>
												<div className="col-4">
													<label>Cuenta de ahorros Bancolombia *</label>	
													<input className="form-control" name="valorServicio" id="valorServicio" required></input>
												</div>
											</div>
											
											<div className="row">
												<div className="col-12 mt-4"><h6 className="form__title">Adjuntar Documentos</h6></div>
													<div className="col-lg-4">
														<label>Anexar Distintivo de habilitación *</label>
														<input type="file" className=" form-control" id="distintivoHabilitacion" name="distintivoHabilitacion" accept=".pdf" required/>
													</div>
													<div className="col-lg-4">
														<label>Anexar Convalidación ante el ICFES, si aplica </label>
														<input type="file" className=" form-control" id="icfes" name="icfes" accept=".pdf"/>
													</div>
													<div className="col-lg-4">
														<label>Fotos, logo e imágenes para publicidad</label>
														<input type="file" className=" form-control" id="fotoLogoPublicidad" name="fotoLogoPublicidad" accept="image/*"/>
													</div>
												</div>
												<div className="row mt-4">
												<div className="col-lg-8 ">
														<label>Resumen de curriculum</label>
														<textarea required className="form-control" name="resumenDeCurriculum" id="resumenDeCurriculum" placeholder="" required></textarea>
													</div>
													<div className="col-lg-4 ">
														<label>Anexar Hoja de vida</label>
														<input type="file" className=" form-control" id="hojaDeVida" name="hojaDeVida" accept=".pdf" required/>
													</div>
												</div>

												<div className="row">
													<div className=" flex flex-col ml-3 mt-12">
														<label className="form__checkbox-label"><span name="convenioProfesionales" id="convenioProfesionales" className="form__label-text">Acepta <a href="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/Terminos%2FContrato%20de%20acceso%20a%20la%20Plataforma%20Fundaci%C3%B3n%20Soy%20T%C3%BA%20Salud%20Profesionales.pdf?alt=media&token=6de426d2-45a9-4edd-9b1c-bab313aaca60" target='_blank' required>Convenio Profesionales</a></span>
															<input className="form__input-checkbox" type="checkbox" name="checkConvenioProfesionales" id="checkConvenioProfesionales" value="1"/><span className="form__checkbox-mask"></span>
														</label>
														<label className="form__checkbox-label"><span name="convenioProveedores" id="convenioProveedores" className="form__label-text">Acepta <a href="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/Terminos%2FContrato%20de%20acceso%20a%20la%20Plataforma%20Fundaci%C3%B3n%20Soy%20T%C3%BA%20Salud-Proveedores.pdf?alt=media&token=df28ca97-f067-44a2-8645-09eff342cdac" target='_blank' required>Convenio Proveedores</a></span>
															<input className="form__input-checkbox" type="checkbox" name="checkConvenioProveedores" id="checkConvenioProveedores" value="1"/><span className="form__checkbox-mask"></span>
														</label>
														<label className="form__checkbox-label"><span name="politicaDatos" id="politicaDatos" className="form__label-text">Acepta Política de <a href="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/Terminos%2FPol%C3%ADtica%20de%20tratamiento%20de%20datos%20Fundaci%C3%B3n%20Soy%20T%C3%BA%20Salud.pdf?alt=media&token=5b6dc7da-566a-4bff-8b19-87ceaafed660" target='_blank' required>Tratamiento de Datos Personales</a></span>
															<input className="form__input-checkbox" type="checkbox" name="checkPoliticaDatos" id="checkPoliticaDatos" value="1"/><span className="form__checkbox-mask"></span>
														</label>
														<label className="form__checkbox-label"><span name="docSarlaft" id="docSarlaft" className="form__label-text">Acepta documento <a href="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/Terminos%2FPol%C3%ADticas%20para%20el%20Sistema%20de%20Administraci%C3%B3n%20de%20Riesgos%20de%20Lavado%20de%20Activos%20y%20Financiaci%C3%B3n%20del%20terrorismo%20Fundaci%C3%B3n%20Mi%20Salud%20PLUS.pdf?alt=media&token=07652efc-1eda-484e-b5f4-fec8bc9e3bcc" target='_blank' required>SARLAFT </a>de Fundación Soy Tú Salud</span>
															<input className="form__input-checkbox" type="checkbox" name="checkDocSarlaft" id="checkDocSarlaft" value="1"/><span className="form__checkbox-mask"></span>
														</label>
														<label className="form__checkbox-label"><span name="codigoEtica" id="codigoEtica" className="form__label-text">Acepta <a href="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/Terminos%2FC%C3%B3digo%20de%20%C3%89tica%20Fundaci%C3%B3n%20Soy%20T%C3%BA%20Salud.pdf?alt=media&token=4684b7f7-afc9-47eb-97fd-a71ac11b0ee9" target='_blank' required>código de ética</a> de Fundación Soy Tú Salud</span>
															<input className="form__input-checkbox" type="checkbox" name="codigoEtica" id="codigoEtica" value="1"/><span className="form__checkbox-mask"></span>
														</label>
													</div>
												</div>

											
												
										</form>
										<br/>
									</div>
								</div>
							</div>
						</div>
					</section>
					
					<section>
					
					</section>
					
		</main>

    </LayoutMain>
  )
}

export default TrabajaNosotros