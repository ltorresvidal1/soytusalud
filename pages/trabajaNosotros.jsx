
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
																		<input type="file" onChange={handlePhoto}   id="foto"  name="foto" accept="image/jpeg,.doc, .docx,.pdf"  className="custom-file-input" />
																		
																	</div>
															</div>

														</div>
													</div>
													
													<div className="row">
												
														<div className="col-lg-3">
																<label>Nombres *</label>
                                                                <input className="form-control" type="text" name="nombres"  id="nombres"/>
														</div>
												
														<div className="col-lg-3">
															<label >Apellidos *</label>
															<input className="form-control" type="text" name="apellidos"  id="apellidos"/>
														</div>
														<div className="col-lg-2">
															<label>Departamento</label>
															<select onChange={handleDpto} defaultValue={"Departamento"} name="departamento-568" className="form-control" aria-required="true" aria-invalid="false" >
																<option disabled>Departamento</option>
																{departamentos.map((depatamento)=>(
																	<option value={depatamento.codigo} key={depatamento.codigo}>{depatamento.nombre}</option>
																))}
															</select>
														</div>
														<div className="col-lg-4">
															<label>Municipio</label>
															<select name="departamento-568" className="form-control" defaultValue={"Municipio"} aria-required="true" aria-invalid="false" >
																<option disabled value="0">Municipio</option>
																{filterMunicipios.map((municipio,index)=>(
																	<option key={index}>{municipio.nombre}</option>
																))}

															</select>
														</div>

														<div className="col-lg-4">
															<label>Dirección comercial completa *</label>
															<input className="form-control" type="text" name="direccion"  id="direccion"/>
														</div>
														<div className="col-lg-4">
															<label>E-mail *</label>
															<input className="form-control" type="text" name="e-mail"  id="e-mail"/>
														</div>
														<div className="col-lg-4">
														<label>Número celular *</label>
														<input className="form-control" type="text" name="celular"  id="celular"/>				
													</div>
													
												</div> 
													 
									
													
											<div className="row">

													
													<div className="col-lg-4">
													
															<label>Victima de Violencia *</label>
															
															<select className="form-control" name="victimaViolencia" id="victimaViolencia">
															<option value="0">Seleccionar</option>
															<option value="1">Si</option>
															<option value="2">No</option>


														</select> 
															
													
													</div>
											</div>
										

											<div className="row">
											
											
											<div className="col-lg-4">
												<label>Tipo documento *</label>
                                                    <select className="form-control" name="tipoDocumento" id="tipoDocumento">
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
											<div className="col-lg-4">
												<label>Número de documento *</label>
												<input className="form-control" type="text" name="documento"  id="documento"/>				
											</div>
											<div className="col-lg-4">
												<label>Página web </label>
												<input className="form-control" type="text" name="web"  id="web"/>				
											</div>
													<div className="col-lg-4">
													<label>Especiliadad </label>
													<select className="form-control" defaultValue={"Tipo Especialiadad"} name="Especialiadad" id="Especialiadad">
														<option disabled >Tipo Especialiadad</option>
                                                        {especialiades.map((especialidad)=>(
                                                            <option key={especialidad} value={especialidad}>{especialidad}</option>
															))}
                                                    </select>
														
													</div>


											</div>

											<div className="row">
												
												<div className="col-12">
													<label>EPS*</label>	
													<select className="form-control" name="EPS" id="EPS">
														<option value="0">Seleccionar</option>
														<option value="1">AXA COLPATRIA SEGUROS S.A. (EN ADELANTE LA SOCIEDAD)</option>
														<option value="2">A.R.S. CONVIDA</option>
														<option value="3">ACE SEGUROS S.A.</option>
														<option value="4">AIG SEGUROS COLOMBIA S.A.</option>
														<option value="5">ALIANSALUD E.P.S.</option>
														<option value="6">ALIANSALUD E.P.S. -CM</option>
														<option value="7">ALLIANZ SEGUROS S.A.</option>
														<option value="8">ANASWAYUU EPSI</option>
														<option value="9">ANASWAYUU EPSI -CM</option>
														<option value="10">ASISTENCIA MEDICA INMEDIATA-SERVICIO DE AMBULANCIA PREPAGADA S.A.</option>
														<option value="11">ASISTENCIA MEDICA SAS SERVICIO DE AMBULANCIA PREPAGADO</option>
														<option value="12">ASOCIACIÓN INDÍGENA DEL CAUCA - AIC</option>
														<option value="13">ASOCIACIÓN INDÍGENA DEL CAUCA - AIC -CM</option>
														<option value="14">ASOCIACIÓN INDÍGENA DEL CESAR Y LA GUAJIRA - DUSAKAWI</option>
														<option value="15">ASOCIACIÓN INDÍGENA DEL CESAR Y LA GUAJIRA - DUSAKAWI -CM</option>
														<option value="16">ASOCIACIÓN MUTUAL BARRIOS UNIDOS DE QUIBDÓ E.S.S. - AMBUQ</option>
														<option value="17">ASOCIACIÓN MUTUAL BARRIOS UNIDOS DE QUIBDÓ E.S.S. - AMBUQ -CM</option>
														<option value="18">ASOCIACIÓN MUTUAL EMPRESA SOLIDARIA DE SALUD DE NARIÑO - EMSSANAR E.S.S.</option>
														<option value="19">ASOCIACIÓN MUTUAL EMPRESA SOLIDARIA DE SALUD DE NARIÑO - EMSSANAR E.S.S. -CM</option>
														<option value="20">ASOCIACIÓN MUTUAL LA ESPERANZA - ASMET SALUD</option>
														<option value="21">ASOCIACIÓN MUTUAL LA ESPERANZA - ASMET SALUD -CM</option>
														<option value="22">ASOCIACIÓN MUTUAL SER EMPRESA SOLIDARIA DE SALUD E.S.S.</option>
														<option value="23">ASOCIACIÓN MUTUAL SER EMPRESA SOLIDARIA DE SALUD E.S.S. -CM</option>
														<option value="24">BBVA SEGUROS COLOMBIA S.A. PUDIENDO UTILIZAR INDISTINTAMENTE, PARA TODOS LOS EFECTOS LEGALES, EL NOMBRE BBVA SEGUROS</option>
														<option value="25">BERKLEY INTERNATIONAL SEGUROS COLOMBIA S.A.  SIGLA BERKLEY COLOMBIA (EN ADELANTE LA SOCIEDAD)</option>
														<option value="26">CAFESALUD E.P.S.</option>
														<option value="27">CAFESALUD E.P.S.  S.A.</option>
														<option value="28">CAFESALUD E.P.S.  S.A. -CM</option>
														<option value="29">CAFESALUD E.P.S. S.A. -CM</option>
														<option value="30">CAFESALUD EPS</option>
														<option value="31">CAJA DE COMPENSACIÓN FAMILIAR C.C.F. DEL ORIENTE COLOMBIANO - COMFAORIENTE</option>
														<option value="32">CAJA DE COMPENSACIÓN FAMILIAR C.C.F. DEL ORIENTE COLOMBIANO - COMFAORIENTE -CM</option>
														<option value="33">CAJA DE COMPENSACION FAMILIAR CAJACOPI ATLANTICO</option>
														<option value="34">CAJA DE COMPENSACION FAMILIAR CAJACOPI ATLANTICO -CM</option>
														<option value="35">CAJA DE COMPENSACIÓN FAMILIAR DE BOYACÁ - COMFABOY</option>
														<option value="36">CAJA DE COMPENSACIÓN FAMILIAR DE BOYACÁ - COMFABOY -CM</option>
														<option value="37">CAJA DE COMPENSACIÓN FAMILIAR DE CARTAGENA - COMFAMILIAR CARTAGENA</option>
														<option value="38">CAJA DE COMPENSACIÓN FAMILIAR DE CARTAGENA - COMFAMILIAR CARTAGENA -CM</option>
														<option value="39">CAJA DE COMPENSACION FAMILIAR DE CORDOBA - COMFACOR</option>
														<option value="40">CAJA DE COMPENSACION FAMILIAR DE CORDOBA - COMFACOR -CM</option>
														<option value="41">CAJA DE COMPENSACIÓN FAMILIAR DE CUNDINAMARCA - COMFACUNDI</option>
														<option value="43">CAJA DE COMPENSACIÓN FAMILIAR DE CUNDINAMARCA - COMFACUNDI -CM</option>
														<option value="44">CAJA DE COMPENSACIÓN FAMILIAR DE LA GUAJIRA - COMFAGUAJIRA</option>
														<option value="45">CAJA DE COMPENSACIÓN FAMILIAR DE LA GUAJIRA - COMFAGUAJIRA -CM</option>
														<option value="46">CAJA DE COMPENSACIÓN FAMILIAR DE NARIÑO - COMFAMILIAR NARIÑO</option>
														<option value="47">CAJA DE COMPENSACIÓN FAMILIAR DE NARIÑO - COMFAMILIAR NARIÑO -CM</option>
														<option value="48">CAJA DE COMPENSACIÓN FAMILIAR DE SUCRE - COMFASUCRE</option>
														<option value="49">CAJA DE COMPENSACIÓN FAMILIAR DE SUCRE - COMFASUCRE -CM</option>
														<option value="50">CAJA DE COMPENSACIÓN FAMILIAR DEL CHOCÓ - COMFACHOCO</option>
														<option value="51">CAJA DE COMPENSACIÓN FAMILIAR DEL CHOCÓ - COMFACHOCO -CM</option>
														<option value="52">CAJA DE COMPENSACIÓN FAMILIAR DEL HUILA - COMFAMILIAR HUILA</option>
														<option value="53">CAJA DE COMPENSACIÓN FAMILIAR DEL HUILA - COMFAMILIAR HUILA -CM</option>
														<option value="54">CAJA DE COMPENSACIÓN FAMILIAR DEL NORTE DE SANTANDER - COMFANORTE</option>
														<option value="55">CAJA DE PREVISION SOCIAL Y SEGURIDAD DEL CASANARE - CAPRESOCA E.P.S.</option>
														<option value="56">CAJA DE PREVISION SOCIAL Y SEGURIDAD DEL CASANARE - CAPRESOCA E.P.S. -CM</option>
														<option value="57">CAPITAL SALUD E.P.S.</option>
														<option value="58">CAPITAL SALUD E.P.S. -CM</option>
														<option value="59">CARDIF COLOMBIA SEGUROS GENERALES S.A.</option>
														<option value="60">CHUBB DE COLOMBIA COMPAÑÍA DE SEGUROS S.A.</option>
														<option value="61">COFACE COLOMBIA SEGUROS DE CRÉDITO S.A.  (EN ADELANTE: COMPAÑÍA ASEGURADORA</option>
														<option value="62">COLMEDICA MEDICINA PREPAGADA</option>
														<option value="63">COLPATRIA MEDICINA PREPAGADA S.A.</option>
														<option value="64">COMFENALCO VALLE</option>
														<option value="65">COMFENALCO VALLE -CM</option>
														<option value="66">COMFENALCO VALLE EPS</option>
														<option value="67">COMPAÑÍA ASEGURADORA DE FIANZAS S.A., CONFIANZA SIGLA: CONFIANZA S.A.</option>
														<option value="68">COMPAÑIA DE MEDICINA PREPAGADA COLSANITAS S.A.</option>
														<option value="69">COMPAÑÍA DE SEGUROS BOLIVAR S.A.</option>
														<option value="70">COMPAÑÍA MUNDIAL DE SEGUROS S.A.  SIGLA: MUNDIAL SEGUROS</option>
														<option value="71">COMPENSAR E.P.S.</option>
														<option value="72">COMPENSAR E.P.S. -CM</option>
														<option value="73">COMPENSAR EPS</option>
														<option value="74">COOMEVA E.P.S. S.A.</option>
														<option value="75">COOMEVA E.P.S. S.A. -CM</option>
														<option value="76">COOMEVA EMERGENCIA MÉDICA</option>
														<option value="77">COOMEVA MEDICINA PREPAGADA S.A.</option>
														<option value="78">COOPERATIVA DE SALUD COMUNITARIA - COMPARTA</option>
														<option value="79">COOPERATIVA DE SALUD COMUNITARIA - COMPARTA -CM</option>
														<option value="80">COOPERATIVA DE SALUD Y DESARROLLO INTEGRAL ZONA SUR ORIENTAL DE CARTAGENA - COOSALUD</option>
														<option value="81">COOPERATIVA DE SALUD Y DESARROLLO INTEGRAL ZONA SUR ORIENTAL DE CARTAGENA - COOSALUD -CM</option>
														<option value="82">COOPERATIVA DE SALUD Y DESARROLLO INTEGRAL ZONA SUR ORIENTAL DE CARTAGENA LTDA. - COOSALUD E.S.S.</option>
														<option value="83">COOPERATIVA DE SALUD Y DESARROLLO INTEGRAL ZONA SUR ORIENTAL DE CARTAGENA LTDA. - COOSALUD E.S.S. -CM</option>
														<option value="84">CRUZ BLANCA E.P.S.</option>
														<option value="85">CRUZ BLANCA E.P.S. -CM</option>
														<option value="86">CRUZ BLANCA EPS</option>
														<option value="87">E.P.S. SANITAS</option>
														<option value="88">ECOPETROL</option>
														<option value="89">EMERGENCIA MEDICA INTEGRAL COLOMBIA S.A.</option>
														<option value="90">EMERMEDICA S.A. SERVICIOS DE AMBULANCIA PREPAGADOS</option>
														<option value="91">EMPRESA DE MEDICINA INTEGRAL EMI SA SERVICIO DE AMBULANCIA PREPAGADA</option>
														<option value="92">EMPRESA MUTUAL PARA EL DESARROLLO INTEGRAL DE LA SALUD - EMDISALUD E.S.S. -CM</option>
														<option value="93">EMPRESA MUTUAL PARA EL DESARROLLO INTEGRAL DE LA SALUD - EMDISALUD ESS</option>
														<option value="94">EMPRESAS PUBLICAS DE MEDELLIN - DEPARTAMENTO MEDICO</option>
														<option value="95">ENTIDAD COOPERATIVA SOLIDARIA DE SALUD DEL NORTE DE SOACHA - ECOOPSOS</option>
														<option value="96">ENTIDAD COOPERATIVA SOLIDARIA DE SALUD DEL NORTE DE SOACHA - ECOOPSOS -CM</option>
														<option value="97">EPS CONVIDA -CM</option>
														<option value="98">EPS SANITAS - CM</option>
														<option value="99">EPS Y MEDICINA PREPAGADA SURAMERICANA S.A</option>
														<option value="100">EPS Y MEDICINA PREPAGADA SURAMERICANA S.A -CM</option>
														<option value="101">EPS Y MEDICINA PREPAGADA SURAMERICANA S.A.</option>
														<option value="102">EPS Y MEDICINA PREPAGADA SURAMERICANA S.A.</option>
														<option value="103">FAMISANAR CAFAM_COLSUBSIDIO EPS</option>
														<option value="104">FAMISANAR E.P.S. LTDA - CAFAM - COLSUBSIDIO</option>
														<option value="105">FAMISANAR E.P.S. LTDA - CAFAM - COLSUBSIDIO -CM</option>
														<option value="106">FONDO PASIVO SOCIAL DE LOS FERROCARRILES NACIONALES</option>
														<option value="107">FUERZAS MILITARES</option>
														<option value="108">GENERALI COLOMBIA-SEGUROS GENERALES S.A. SIGLA: GENERALI COLOMBIA</option>
														<option value="109">JMALUCELLITRAVELERS SEGUROS S.A. (EN ADELANTE LA COMPAÑÍA ASEGURADORA O LA SOCIEDAD) SIGLA: JMALUCELLITRAVELERS SEGUROS S.A.</option>
														<option value="110">LA PREVISORA S.A. COMPAÑÍA DE SEGUROS</option>
														<option value="111">LIBERTY SEGUROS S.A., PUDIENDO UTILIZAR COMERCIALMENTE LIBERTY SEGUROS O LIBERTY</option>
														<option value="112">MAGISTERIO</option>
														<option value="113">MALLAMAS EPSI</option>
														<option value="114">MALLAMAS EPSI -CM</option>
														<option value="115">MANEXKA EPSI</option>
														<option value="116">MANEXKA EPSI -CM</option>
														<option value="117">MAPFRE SEGUROS GENERALES DE COLOMBIA S.A. SIGLA: MAPFRE SEGUROS</option>
														<option value="118">MEDIMÁS EPS S.A.S. -CM</option>
														<option value="119">MEDIMÁS EPS S.A.S. -CM</option>
														<option value="120">MEDIMÁS EPS S.A.S. CONTRIBUTIVO</option>
														<option value="121">MEDIMÁS EPS S.A.S. SUBSIDIADO</option>
														<option value="122">MEDISANITAS S A COMPAÑIA DE MEDICINA PREPAGADA</option>
														<option value="123">MEDPLUS MEDICINA PREPAGADA S.A.</option>
														<option value="124">NACIONAL DE SEGUROS S.A. COMPAÑÍA DE SEGUROS GENERALES - SIGLA: NACIONAL DE SEGUROS</option>
														<option value="125">Nueva EPS</option>
														<option value="126">NUEVA EPS S.A.</option>
														<option value="127">NUEVA EPS S.A.</option>
														<option value="128">NUEVA EPS S.A. -CM</option>
														<option value="129">NUEVA EPS S.A. -CM</option>
														<option value="130">PIJAOS SALUD EPSI</option>
														<option value="131">PIJAOS SALUD EPSI -CM</option>
														<option value="132">PLAN U.H.C.M. MEDICINA PREPAGADA COMFENALCO VALLE</option>
														<option value="133">POLICIA NACIONAL</option>
														<option value="134">QBE SEGUROS S.A. PODRÁ USAR LAS SIGLAS QBE COLOMBIA O QBE SEGUROS</option>
														<option value="135">RED MEDICA MÉDICA VITAL S.A.S. SERVICIO DE AMBULANCIA PREPAGADO (SAP)</option>
														<option value="136">ROYAL & SUN ALLIANCE SEGUROS (COLOMBIA) S.A. ABREVIATURA: RSA</option>
														<option value="137">SALUD TOTAL E.P.S. -CM</option>
														<option value="138">SALUD TOTAL S.A.</option>
														<option value="139">SALUDVIDA S.A. E.P.S</option>
														<option value="140">SALUDVIDA S.A. E.P.S -CM</option>
														<option value="141">SALUDVIDA S.A. E.P.S.</option>
														<option value="142">SALUDVIDA S.A. EPS -CM</option>
														<option value="143">SANITAS EPS</option>
														<option value="144">SAVIA SALUD E.P.S.</option>
														<option value="145">SAVIA SALUD E.P.S. -CM</option>
														<option value="146">SEGUREXPO DE COLOMBIA S.A. ASEGURADORA DE CRÉDITO Y DEL COMERCIO EXTERIOR. DENOMINACIÓN SIMPLE DE SEGUREXPO</option>
														<option value="147">SEGUROS ALFA S.A.</option>
														<option value="148">SEGUROS DE VIDA SURAMERICANA S.A.</option>
														<option value="149">SEGUROS DEL ESTADO S.A.</option>
														<option value="150">SERVICIO DE ASISTENCIA MEDICA INMEDIATA S.A. - SERVICIO DE AMBULANCIA PREPAGADO</option>
														<option value="151">SERVICIO DE EMERGENCIAS REGIONAL (SERVICIO DE AMBULANCIA PREPAGADO) S.A.</option>
														<option value="152">SERVICIO DE SALUD INMEDIATO MEDICINA PREPAGADA S.A.</option>
														<option value="153">SERVICIO OCCIDENTAL DE SALUD - S.O.S. S.A.</option>
														<option value="154">SERVICIO OCCIDENTAL DE SALUD - S.O.S. S.A. -CM</option>
														<option value="155">SERVICIO OCCIDENTAL DE SALUD EPS</option>
														<option value="156">SERVICIOS MEDICOS INTEGRALES DE COLOMBIA SERVICIO DE AMBULANCIAS PREPAGADO S.A.S SEMI SAP S.A.S.</option>
														<option value="157">SOLUNION COLOMBIA SEGUROS DE CRÉDITO S.A. SIGLA: SOLUNION S.A.</option>
														<option value="158">UNIVERSIDAD DE ANTIOQUIA</option>
														<option value="159">UNIVERSIDAD DE CARTAGENA</option>
														<option value="160">UNIVERSIDAD DE CORDOBA</option>
														<option value="161">UNIVERSIDAD DE NARIÑO</option>
														<option value="162">UNIVERSIDAD DEL ATLANTICO</option>
														<option value="163">UNIVERSIDAD DEL CAUCA</option>
														<option value="164">UNIVERSIDAD DEL VALLE</option>
														<option value="165">UNIVERSIDAD INDUSTRIAL DE SANTANDER</option>
														<option value="166">UNIVERSIDAD NACIONAL DE COLOMBIA</option>
														<option value="167">UNIVERSIDAD PEDAGOGICA Y TECNOLOGICA DE COLOMBIA - UPTC</option>
														<option value="168">VIVIR S.A</option>
														<option value="169">ZURICH COLOMBIA SEGUROS S.A. (LA SOCIEDAD)</option>

															</select>
														
												</div>
												</div>
												

												<h6 className="form__title">Cuentanos tu Historia</h6>
												<div className="row">
												
												<div className="col-12">
													<textarea className="form-control" name="tuHistoria" id="tuHistoria" placeholder=""></textarea>
												
													<span className="form__text">  <label className="control-label mb-1">Cuéntanos si padeces de alguna enfermedad, si no has tenido acceso a servicios de salud oportunos, actualmente cuentas con tratamiento y todos los detalles que nos permitan saber como Soy Tu puede ayudarte. </label>   </span>
													
												</div>
												</div>
												
												<h6 className="form__title">Servicio Solicitado</h6>
												<div className="row">
												
												<div className="col-lg-4">
														<label className="form__checkbox-label"><span className="form__label-text">Consulta Medica General</span>
														<input className="form__input-checkbox" type="checkbox" name="serviciosSolicitado" value="1" id="cb1"/><span className="form__checkbox-mask"></span>
													
													</label>
												</div>
												<div className="col-lg-4">
														<label className="form__checkbox-label"><span className="form__label-text">Consulta Medica Especializada</span>
														<input className="form__input-checkbox" type="checkbox" name="serviciosSolicitado" value="2" id="cb2"/><span className="form__checkbox-mask"></span>
													
												</label>
												</div>
												<div className="col-lg-4">
														<label className="form__checkbox-label"><span className="form__label-text">Otros Profesionales de la Salud</span>
														<input className="form__input-checkbox" type="checkbox" name="serviciosSolicitado" value="3" id="cb3"/><span className="form__checkbox-mask"></span>
													
												</label>
												</div>											
												<div className="col-lg-4">
														<label className="form__checkbox-label"><span className="form__label-text">Medicamento</span>
														<input className="form__input-checkbox" type="checkbox" name="serviciosSolicitado" value="4" id="cb4"/><span className="form__checkbox-mask"></span>
													
												</label>
												</div>											
												<div className="col-lg-4">
														<label className="form__checkbox-label"><span className="form__label-text">Exámenes de Laboratorios</span>
														<input className="form__input-checkbox" type="checkbox" name="serviciosSolicitado" value="5" id="cb5"/><span className="form__checkbox-mask"></span>
													
												</label>
												</div>
												<div className="col-lg-4">
														<label className="form__checkbox-label"><span className="form__label-text">Rayos X</span>
														<input className="form__input-checkbox" type="checkbox" name="serviciosSolicitado" value="6" id="cb6"/><span className="form__checkbox-mask"></span>
													
												</label>
												</div>											
												<div className="col-lg-4">
														<label className="form__checkbox-label"><span className="form__label-text">Ayudas Diagnósticas</span>
														<input className="form__input-checkbox" type="checkbox" name="serviciosSolicitado" value="7" id="cb7"/><span className="form__checkbox-mask"></span>
													
												</label>
												</div>		
												
												<div className="col-lg-4">
														<label className="form__checkbox-label"><span className="form__label-text">Terapias</span>
														<input className="form__input-checkbox" type="checkbox" name="serviciosSolicitado" value="8" id="cb8"/><span className="form__checkbox-mask"></span>
													
												</label>
												</div>	
													<div className="col-lg-4">
														<label className="form__checkbox-label"><span className="form__label-text">Cirugia Ambulatoria Y Otros Servicios</span>
														<input className="form__input-checkbox" type="checkbox" name="serviciosSolicitado" value="9" id="cb9"/><span className="form__checkbox-mask"></span>
													
												</label>
												</div>	
											
											

												</div>

												<div className="row">
											
												<div className="col-12"><h6 className="form__title">Adjuntar Documentos</h6> </div>
												<div className="col-lg-6">
												<label className="form__checkbox-label"/><span className="form__label-text">Anexar Historia Clinica</span><input type="file" className="form-control" id="historiaClinica" name="historiaClinica" accept=".pdf"/>
												
												</div>
												<div className="col-lg-6">
												<label className="form__checkbox-label"/><span className="form__label-text">Anexar Consulta Sisben</span>
												
												<input type="file" className="form-control" id="sisben" name="sisben" accept=".pdf"/>
												<br/>
													<a className="centrado" href="https://www.sisben.gov.co/Paginas/consulta-tu-grupo.aspx" target="_blank" rel="noreferrer">Consulta Tu Sisben</a>
												</div>
												</div>
												
												<div className="row">
												<div className="col-12">
															
												<label className="form__checkbox-label"><span  name="autorizacionFoto" id="autorizacionFoto" className="form__label-text"> Autorizo de manera voluntaria, mostrar mi nombre y mi foto</span>
												<input className="form__input-checkbox" type="checkbox" name="autorizacionFoto" id="autorizacionFoto" value="1"/><span className="form__checkbox-mask"></span>
													</label>
												</div>
												
												<div className="col-12">
															
												<label className="form__checkbox-label" ><span  id="recopilacionDatos" className="form__label-text" >Autorizo de manera voluntaria, previa, expresa e informada a Soy Tú para la recolección y posterior análisis de los datos aquí suministrados, con la finalidad de ser contactado y atender mis necesidades. Así mismo, declaro que he sido informado sobre el derecho que tengo a conocer, actualizar y rectificar mis datos personales, solicitar prueba de la autorización, ser informado sobre el tratamiento que se ha dado a mis datos personales, presentar quejas ante la Superintendencia de Industria y Comercio (SIC), revocar la autorización otorgada y/o solicitar la supresión de mis datos en los casos en que sea procedente</span>
												
														<input className="form__input-checkbox" type="checkbox" name="recopilacionDatos" id="recopilacionDatos"/><span className="form__checkbox-mask"></span>
														
													</label>
												</div>
												
												<div className="col-12">
													
													<button className="form__submit" type="submit">Enviar Informacion</button>
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