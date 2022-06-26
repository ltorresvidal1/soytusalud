
import Head from 'next/head'
import { useState } from 'react';
import Image from 'next/image'
import { client } from '../graphql/initClientSide';
import { storage } from '../firebase/initConfig';
import { ref, uploadBytes,getDownloadURL } from 'firebase/storage';
import { useMutation  } from '@apollo/client';
import { CodeServices } from '../graphql/servicesCodes/queries'
import { departamentos } from '../utils/deparamentos';
import { municipios } from '../utils/municipios';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { crearServicios } from '../graphql/servicios/mutations';
import useFormData from '../hooks/useFormData';
import { LayoutMain } from '../components/layouts/LayoutMain';
import {useRouter} from 'next/router';
import PrivatePages from '../components/PrivatePages';

const valuesEspacialiad=[
	"especialidad",
	"modalidad",
	"horaInicio",
	"horaFin",
	"valorServicio",
	"tipoServicio",
	"nombreResponsable",
	"celularServicio",
	"whatsAppServicio",
	"direccionServicio"
]

let filtrosCode = {
	TIPO_DE_SERVICIO: "",
	DESCRIPCION_SERVICIO:""
}

const TrabajaNosotros = () => {
	const router = useRouter();
	const [ crearServicio ] = useMutation(crearServicios)
	const [ filterMunicipios, setFilterMunicipios ] = useState([])
	const [ photo, setPhoto ] = useState("/Foto.png")
	const { form, formData, updateFormData } = useFormData();
	const [ servicios, setServicios ] = useState([0])
	const [ securities, setSecurities ] = useState(true)
	const [ serviciosLista, setServiciosLista ] = useState([])
	let municipiosFiltrado = []
	const regex = /(\d+)/g;

	const handleSubmit =async(e)=>{
		formData.servicios=[]
		e.preventDefault();
		if(securities){
			const foto = ref(storage,`servicios/${formData.identificacion}/foto.jpg`)
			const distintivoHabilitacion = ref(storage,`servicios/${formData.identificacion}/distintivoHabilitacion.pdf`)
			const convalidacionIcfes = ref(storage ,`servicios/${formData.identificacion}/convalidacionIcfes.pdf`)
			const fotoLogoPublicidad = ref(storage ,`servicios/${formData.identificacion}/fotoLogoPublicidad.jpg`)
			const hojaVida = ref(storage,`servicios/${formData.identificacion}/hojaVida.pdf`)

			await uploadBytes(foto,formData.foto)
			await uploadBytes(distintivoHabilitacion,formData.distintivoHabilitacion)
			await uploadBytes(convalidacionIcfes,formData.convalidacionIcfes)
			await uploadBytes(fotoLogoPublicidad,formData.fotoLogoPublicidad)
			await uploadBytes(hojaVida,formData.hojaVida)

			await getDownloadURL(foto)
			.then(url=>{
				formData.foto=url
			})
			await getDownloadURL(distintivoHabilitacion)
			.then(url=>{
				formData.distintivoHabilitacion=url
			})
			await getDownloadURL(convalidacionIcfes)
			.then(url=>{
				formData.convalidacionIcfes=url
			})
			await getDownloadURL(fotoLogoPublicidad)
			.then(url=>{
				formData.fotoLogoPublicidad=url
			})
			await getDownloadURL(hojaVida)
			.then(url=>{
				formData.hojaVida=url
			})
			console.log(formData)

			const listaKeys = Object.keys(formData)

			valuesEspacialiad.forEach((special)=>{
				const listaFiltrada = listaKeys.filter(value=> value.includes(`${special}`))
				listaFiltrada.forEach((value)=>{
					const position = value.match(regex)[0]
					serviciosLista[position][`${special}`]=formData[`${special}${position}`]
					formData.servicios=serviciosLista
				})
			})
			console.log(formData)
			crearServicio({variables: formData}).then(res=>{
				router.push("/")
			}).catch(err=>{
				console.log(err)
			})
			
		}else{
			console.log("error")
		}
	
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

	const handleCheckBox=(e ,index)=>{
		const filter = serviciosLista.filter(value=> value.dias)
		if(e.currentTarget.checked){
			if(!Object.keys(filter).includes(index.toString())){
		
				setServiciosLista(value=>[...value,{dias:[e.target.value]}])
			}else{
				let {dias} = serviciosLista[index]
				dias.push(e.target.value)
			}
		}else{
			let {dias} = serviciosLista[index]
			dias.splice(dias.indexOf(e.target.value),1)
		}
		setSecurities(true)
	}

	Array.prototype.equals = function (getArray) {
		if (this.length != getArray.length) return false;
	  
		for (var i = 0; i < getArray.length; i++) {
		  if (this[i] instanceof Array && getArray[i] instanceof Array) {
			if (!this[i].equals(getArray[i])) return false;
		  } else if (this[i] != getArray[i]) {
			return false;
		  }
		}
		return true;
	  };

	const handleDpto=(e)=>{
		console.log(e.target.value)
		municipiosFiltrado = municipios.filter(municipio=> municipio.codigodepartamento === e.target.value)
		setFilterMunicipios(municipiosFiltrado)
	}

  return (
    <LayoutMain>
		<PrivatePages login={false}>
			<main className="main">
						<section className="section contacts no-padding-top">
							<div className="contacts-wrapper">
								<div className="container">
									<div>
										<div className="col-xl-12">
											<form className="form message-form" ref={form} onChange={updateFormData} onSubmit={handleSubmit}  id="Form_TrabajaConNostros" >
													<div className="row mt-10">
														<h6 className="form__title">Si consideras que eres una persona en situación de vulnerabilidad, que padece una enfermedad y necesita servicios médicos, diligencia este formulario y te pondremos en contacto con un especialista que te ayude a mejorar tu estado de salud.</h6>
														<label className="control-label mb-1">Por favor, verifica los campos obligatorios marcados con un (*) </label>   
													</div>	
													
														<div className="row">
															<div className="col-lg-5"></div>
															<div className="col-lg-2">
																<div className="contenedor mt-8">
																	<h6 className="form__title">Foto</h6>
															
																		<div className="">
																			<Image style={{cursor:"pointer"}} alt='defaultPhoto' className="profile-pic" id='perfil' name='perfil' src={photo} height="150" width="180"/>
																			<label className="" htmlFor="logo">
																				<button className="bg-blue-400">Subir Foto</button>
																			</label>
																			<input type="file" onChange={handlePhoto} id="foto" name="foto" accept="image/*" className="custom-file-input  " required/>
																		</div>
																</div>
															</div>
														</div>
														
														<div className="row">
															<div className="col-12 mt-12"><h6 className="form__title">Datos Personales</h6></div>
															<div className="col-lg-3 mt-3">
																	<label>Nombres Completo o Razon social *</label>
																	<input className="form-control" type="text" name="nombreCompleto" id="nombreCompleto" required/>
															</div>
													
															<div className="col-lg-3 mt-3">
																<label>Tipo documento *</label>
																	<select className="form-control" name="tipoDocumento" id="tipoDocumento required">
																		<option value="">Tipo Documento</option>
																		<option >CC</option>
																		<option >NIT</option>
																		<option >CE</option>
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
															<div className="col-lg-3 mt-3">
																<label >Numero de documento *</label>
																<input className="form-control" type="text" name="identificacion" id="identificacion" required/>
															</div>
															<div className="col-lg-3 mt-3">
																<label>Número celular *</label>
																<input className="form-control" type="number" name="celular" id="celular" required/>
															</div>
															<div className="col-lg-4 mt-3">
																<label>Departamento *</label>
																<select onChange={handleDpto} name="departamento" className="form-control" aria-required="true" aria-invalid="false" required>
																	<option value="">Departamento *</option>
																	{departamentos.map((depatamento)=>(
																		<option value={depatamento.codigo} key={depatamento.codigo}>{depatamento.nombre}</option>
																	))}
																</select>
															</div>
															<div className="col-lg-4 mt-3">
																<label>Municipio *</label>
																<select name="municipio" className="form-control" aria-required="true" aria-invalid="false" required>
																	<option value="">Municipio *</option>
																	{filterMunicipios.map((municipio,index)=>(
																		<option key={index}>{municipio.nombre}</option>
																	))}
																</select>
															</div>
															<div className="col-lg-4 mt-3">
																<label>Dirección comercial completa *</label>
																<input className="form-control" type="text" name="direccion" id="direccion" required/>
															</div>
															<div className="col-lg-4 mt-3">
																<label>Página Web</label>
																<input className="form-control" type="url" name="paginaWeb" id="paginaWeb" />
															</div>									
														</div>
													<div className="row">
														<div className="col-12 mt-12"><h6 className="form__title">Información de aplicación</h6></div>
													</div>
												
													
													{servicios.map((servicio,index)=>{

													return (
														<ListServices  key={index} index={index} handleCheckBox={handleCheckBox}/>
														)})}

														{Object.keys(serviciosLista).equals(servicios)?(
														<div className='row'>
															<div  className="col-lg-4 mt-3 ">
																<button type='button' onClick={()=>{
																	setServicios([...servicios,servicios.length])
																	setSecurities(false)
																	}} >
																	<AddBoxIcon color='success'></AddBoxIcon>
																	<span className="">Agregar un nuevo servicio</span>
																</button>
															</div> 
														</div> 
														):(
														<div className='row'>
															<div  className="col-lg-4 mt-3 ">
																<button type='button' disabled >
																	<AddBoxIcon color=''></AddBoxIcon>
																	<span className="">Agregar un nuevo servicio</span>
																</button>
															</div> 
														</div> 
														)}
												<div>
													<div className='row'>
														<div className="col-lg-4">
															<label className="mt-3">Cuenta de ahorros Bancolombia *</label>	
															<input type="number" className="form-control" name="cuentaDeAhorros" id="cuentaDeAhorros" required></input>
														</div>
													</div>
													<div className="mt-12 mb-3"><h6>Adjuntar Documentos</h6></div>
													<div className=" mt-6">
														<div className="">
														<label className="">Distintivo Habilitación *</label>
															<input type="file" name="distintivoHabilitacion" id="distintivoHabilitacion" className="inputfile inputfile-1" accept=".pdf" required/>
															<label className="space-x-2" htmlFor="distintivoHabilitacion">
																<svg xmlns="http://www.w3.org/2000/svg" className="iborrainputfile" width="20" height="17" viewBox="0 0 20 17">
																	<path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
																</svg>
																<span className="iborrainputfile">Seleccionar archivo</span>
															</label>
														</div>
														<div className="">
															<label className="">Convalidadción Icfes *</label>
															<input type="file" name="convalidacionIcfes" id="convalidacionIcfes" className="inputfile inputfile-1" accept=".pdf" />
															<label className="space-x-2" htmlFor="convalidacionIcfes">
																<svg xmlns="http://www.w3.org/2000/svg" className="iborrainputfile" width="20" height="17" viewBox="0 0 20 17">
																	<path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
																</svg>
																<span className="iborrainputfile">Seleccionar archivo</span>
															</label>
														</div>
														<div className="">
															<label className="">imágenes Publicidad *</label>
															<input type="file" name="fotoLogoPublicidad" id="fotoLogoPublicidad" className="inputfile inputfile-1" accept="image/*" />
															<label className="space-x-2" htmlFor="fotoLogoPublicidad">
																<svg xmlns="http://www.w3.org/2000/svg" className="iborrainputfile" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
																<span className="iborrainputfile">Seleccionar archivo</span>
															</label>
														</div>
														<div className="">
															<label className="">Hoja de vida *</label>
															<input type="file" name="hojaVida" id="hojaVida" className="inputfile inputfile-1" accept=".pdf" required />
															<label className="space-x-2" htmlFor="hojaVida">
																<svg xmlns="http://www.w3.org/2000/svg" className="iborrainputfile" width="20" height="17" viewBox="0 0 20 17">
																	<path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
																</svg>
																<span className="iborrainputfile">Seleccionar archivo *</span>
															</label>
															
														</div>
													</div>
													</div>
													<div className="row mt-4">
														<div className="col-lg-12">
															<h6>Resumen de curriculum</h6>
															<textarea required className="form-control" name="resumenCurriculum" id="resumenCurriculum" placeholder=""></textarea>
														</div>
													</div>

													<div className="row mt-10">
														<div className=" flex flex-col ml-3 mt-12">
															<label className="form__checkbox-label"><span name="aceptaConvenio" id="aceptaConvenio" className="form__label-text">Acepta <a href="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/Terminos%2FContrato%20de%20acceso%20a%20la%20Plataforma%20Fundaci%C3%B3n%20Soy%20T%C3%BA%20Salud%20Profesionales.pdf?alt=media&token=6de426d2-45a9-4edd-9b1c-bab313aaca60" target='_blank' required rel="noreferrer">Convenio Profesionales</a></span>
																<input className="form__input-checkbox" type="checkbox" name="aceptaConvenio" id="aceptaConvenio" value="1"/>
																<span className="form__checkbox-mask"></span>
															</label>
															{/* <label className="form__checkbox-label"><span name="convenioProveedores" id="convenioProveedores" className="form__label-text">Acepta <a href="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/Terminos%2FContrato%20de%20acceso%20a%20la%20Plataforma%20Fundaci%C3%B3n%20Soy%20T%C3%BA%20Salud-Proveedores.pdf?alt=media&token=df28ca97-f067-44a2-8645-09eff342cdac" target='_blank' required rel="noreferrer">Convenio Proveedores</a></span>
																<input className="form__input-checkbox" type="checkbox" name="aceptaTratamientoDatos" id="aceptaTratamientoDatos" value="on"/>
																<span className="form__checkbox-mask"></span>
															</label> */}
															<label className="form__checkbox-label"><span name="politicaDatos" id="aceptaTratamientoDatos" className="form__label-text">Acepta Política de <a href="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/Terminos%2FPol%C3%ADtica%20de%20tratamiento%20de%20datos%20Fundaci%C3%B3n%20Soy%20T%C3%BA%20Salud.pdf?alt=media&token=5b6dc7da-566a-4bff-8b19-87ceaafed660" target='_blank' required rel="noreferrer">Tratamiento de Datos Personales</a></span>
																<input className="form__input-checkbox" type="checkbox" name="aceptaTratamientoDatos" id="aceptaTratamientoDatos" value="on"/>
																<span className="form__checkbox-mask"></span>
															</label>
															<label className="form__checkbox-label"><span name="docSarlaft" id="docSarlaft" className="form__label-text">Acepta documento <a href="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/Terminos%2FPol%C3%ADticas%20para%20el%20Sistema%20de%20Administraci%C3%B3n%20de%20Riesgos%20de%20Lavado%20de%20Activos%20y%20Financiaci%C3%B3n%20del%20terrorismo%20Fundaci%C3%B3n%20Mi%20Salud%20PLUS.pdf?alt=media&token=07652efc-1eda-484e-b5f4-fec8bc9e3bcc" target='_blank' required rel="noreferrer">SARLAFT </a>de Fundación Soy Tú Salud</span>
																<input className="form__input-checkbox" type="checkbox" name="aceptaDocumentoSARLAFT" id="aceptaDocumentoSARLAFT" value="on"/>
																<span className="form__checkbox-mask"></span>
															</label>
															<label className="form__checkbox-label"><span name="codigoEtica" id="codigoEtica" className="form__label-text">Acepta <a href="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/Terminos%2FC%C3%B3digo%20de%20%C3%89tica%20Fundaci%C3%B3n%20Soy%20T%C3%BA%20Salud.pdf?alt=media&token=4684b7f7-afc9-47eb-97fd-a71ac11b0ee9" target='_blank' required rel="noreferrer">código de ética</a> de Fundación Soy Tú Salud</span>
																<input className="form__input-checkbox" type="checkbox" name="aceptaCodigoEticaSoyTuSalud" id="aceptaCodigoEticaSoyTuSalud" value="on"/><span className="form__checkbox-mask"></span>
															</label>
														</div>
													</div>
													<div className="row mt-24 mb-8">
														<button type="submit" className="button-submit m-auto py-2 px-8 text-white">ENVIAR FORMULARIO</button>
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
		</PrivatePages>												
    </LayoutMain>
  )
}


const ListServices = ({index , handleCheckBox}) => {

	const [ codigoServicios, setCodigoServicios ] = useState([])

	const handleCodeSelector = (e) => {
		
		filtrosCode.TIPO_DE_SERVICIO = e.target.value
	}

	const handleSearch = async ()=> {
		
		const {data} = await client.query({
			query: CodeServices,
			variables:{
				TIPO_DE_SERVICIO: filtrosCode.TIPO_DE_SERVICIO,
				DESCRIPCION_SERVICIO: filtrosCode.DESCRIPCION_SERVICIO 
				}
		  })
		 setCodigoServicios(data)

			 
	}

	return(
	<div >
			<div className='row' >
				<div className="col-12 mt-12"><h6 className="form__title">{`Servicio ${index +1}`}</h6></div>
			</div>
			<div className="row">
				<div className="col-lg-5">
					<label className="mt-3">Tipo de servicio *</label>
						<select className="form-control" onChange={handleCodeSelector} name={`tipoServicio${index}`} id="especialidad" required>
							<option value="" >Tipo de servicio</option>
							<option >Consulta Medica General</option>
							<option >Consulta Medica Especializada</option>
							<option >Otros Profesionales de la salud</option>
							<option >Ayudas diagnosticas</option>
							<option >Medicamentos</option>
							<option	>Examenes de Laboratorio</option>
							<option >Rayos X</option>
							<option >Terapias</option>
							<option >Cirugia Ambulatoria y Otros Servicios</option>
						</select>
				</div>
				<div className="col-lg-5">
					<label className="mt-3">Nombre Servicio *</label>
					<input onChange={ (e)=> filtrosCode.DESCRIPCION_SERVICIO = e.target.value } className="form-control" type="text" />
				</div>
			<div className="col-lg-2">
				<label className="mt-3">*</label>
					{/* <div className='cursor-pointer bg-blue-500 text-white rounded-lg flex justify-center py-1 ' onClick={handleSearch}>Buscar</div> */}
					<input onClick={handleSearch} className="inputfile inputfile-1" />
				<label className="space-x-2" onClick={()=>handleSearch(index)} >
					<span className="iborrainputfile">Buscar</span>
				</label>
			</div>
			</div>
			<div className='row'>
				<div className='col-12'>
					{codigoServicios?.CodeService?(<>
							<laber>Resultados</laber>
						<select	select className="form-control" name={`especialidad${index}`} id="especialidad" required>
							<option value="" >Tipo Especialidad</option>
							{codigoServicios?.CodeService &&  codigoServicios?.CodeService.map((codigo ,index)=>(
								<option key={index} value={codigo.DESCRIPCION_SERVICIO}>{codigo.DESCRIPCION_SERVICIO} REF:{codigo.CODIGO}</option>
								))}
						</select>
				<div className='row'>
				<div className="col-lg-4">
						<label className="mt-3">Modalidad de atención *</label>	
						<select className="form-control" name={`modalidad${index}`} id="modalidad" required>
							<option value="">Seleccionar</option>
							<option>Domiciliaria</option>
							<option>Presencial</option>
							<option>Telemedicina</option>
						</select>
					</div>
				</div>
					</>)
					:null}
				</div>
			</div>
			<div className='row' >
				<div className="col-12 mt-4 text-sm font-bold"><span>Disponibilidad Horaria</span></div>
			</div>
			<div className="row">
				<div className="col-lg-2">
					<label className="mt-3"> Hora inicio *</label>
					<input type="time" className="form-control" name={`horaInicio${index}`} id="disponibilidadHoraria"/>
				</div>
				<div className="col-lg-2">
					<label className="mt-3"> Hora Fin *</label>
					<input type="time" className="form-control" name={`horaFin${index}`} id="disponibilidadHoraria"/>
				</div>
			</div>
			<div className="row">
			<div className="col-lg-12">
					<label className="mt-3">Dias disponibles*</label>
					<div className=" space-x-6">
						<div className="flex flex-col justify-between md:flex-row">
						<label className="form__checkbox-label" >
								<span className="form__label-text" >Lunes</span>
								<input className="form__input-checkbox" type="checkbox" value={`lunes`} onChange={(e)=>handleCheckBox(e,index)} />
								<span className="form__checkbox-mask"></span>
							</label>
							<label className="form__checkbox-label" >
								<span className="form__label-text" >Martes</span>
								<input className="form__input-checkbox" type="checkbox" value={`martes`} onChange={(e)=>handleCheckBox(e,index)} />
								<span className="form__checkbox-mask"></span>
							</label>
							<label className="form__checkbox-label" >
								<span className="form__label-text" >Miércoles</span>
								<input className="form__input-checkbox" type="checkbox" onChange={(e)=>handleCheckBox(e,index)} value={`miercoles`} />
								<span className="form__checkbox-mask"></span>
							</label>
							<label className="form__checkbox-label" >
								<span className="form__label-text"  >Jueves</span>
								<input className="form__input-checkbox" type="checkbox" onChange={(e)=>handleCheckBox(e,index)} value={`jueves`} />
								<span className="form__checkbox-mask"></span>
							</label>
							<label className="form__checkbox-label" >
								<span className="form__label-text">Viernes</span>
								<input className="form__input-checkbox" type="checkbox"  value={`viernes`} onChange={(e)=>handleCheckBox(e,index)} />
								<span className="form__checkbox-mask"></span>
							</label>
							<label className="form__checkbox-label" >
								<span className="form__label-text" >Sábado</span>
								<input className="form__input-checkbox" type="checkbox" onChange={(e)=>handleCheckBox(e,index)} value={`sabado`} />
								<span className="form__checkbox-mask"></span>
							</label>
							<label className="form__checkbox-label" >
								<span className="form__label-text" >Domingo</span>
								<input className="form__input-checkbox" type="checkbox" onChange={(e)=>handleCheckBox(e,index)} value={`domingo`} />
								<span className="form__checkbox-mask"></span>
							</label>
						</div>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className="col-lg-3">
					<label className="mt-3">Valor del servicio *</label>	
					<input type="number" className="form-control" name={`valorServicio${index}`} id="valorServicio" required></input>
				</div>
				<div className="col-lg-3">
					<label className="mt-3">Prestador del servicio *</label>	
					<input type="text" className="form-control" name={`nombreResponsable${index}`}  required></input>
				</div>
				<div className="col-lg-3 mt-3">
					<label>Contacto responsable *</label>
					<input className="form-control" type="text" name={`celularServicio${index}`} required />
				</div>
				<div className="col-lg-3 mt-3">
					<label>Linea WhatsApp *</label>
					<input className="form-control" type="number" name={`whatsAppServicio${index}`} required />
				</div>		
			</div>
			<div className='row'>
				<div className="col-lg-6">
					<label className="mt-3">Dirrecion donde se presta el servicio *</label>	
					<input type="text" className="form-control" name={`direccionServicio${index}`} required></input>
				</div>
			</div>
		</div>
	)
}

export default TrabajaNosotros