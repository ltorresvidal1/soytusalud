import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { LayaoutMain } from '../components/layaouts'
import styles from '../styles/Home.module.css'

import InconoServicio1 from '../assets/images/icon_1-1.png';
import ImagenBarraInferior from '../assets/images/bottom-bg.png';
import AboutLayout from '../assets/images/about_layout.png';
import Gallery2 from '../assets/images/gallery_2.jpg';
import Promo1 from '../assets/images/promo_1.jpg';

const img_layout={
  position:"absolute",
  height:"850px",
  with:"850px",
  pointerEvents:"none"}


export default function Home() {
  return (

    <>
      <div>
          <section className="promo-primary">
            <picture  className="img--bg">
              <Image src={Promo1} alt="img" width={"3000vw"}  layout="responsive"/>
              </picture>
              <div className="container">
                <div className="row">
                  <div className="col-auto">
                    <div className="align-container">
                      <div className="align-container__item">
                        <h1 className="promo-primary__title"><span data-lang="eslogan1">Mejoramos la Salud de personas en situación de vulnerabilidad </span> <span data-lang="eslogan2">con recursos de Responsabilidad Social</span></h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
            
          <section className="section about-us" id="about">
            <div className="container mt-6">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="heading heading--primary"><span className="heading__pre-title" data-lang="nostros">Sobre Nosotros</span>
                    <h2 className="heading__title"><span>Soy Tú Salud</span></h2>
                  </div>
                  <p>Conoces a algún familiar, amigo, persona o tú que necesite algún servicio médico y se encuentre en situación de vulnerabilidad? En www.soytusalud.org informa tu historia o su historia, aplica y Listo!!.</p><p> En la Fundación <a href="">www.soytusalud.org</a> una vez has demostrado que estás en una situación de vulnerabilidad, podrás acceder :</p>
                <div className="row">
                <div className="col-md-6 col-lg-12">
                  <ul className="unordered-list">
                    <li>Consulta Médica General por Telemedicina.</li>
                    <li>Consulta Médica Especializada por Telemedicina.</li>
                    <li>Medicamentos para enfermedades no crónicas.</li>
                    <li>Exámenes de Laboratorio Domiciliarios.</li>
                    <li>Otros servicios para su salud, que estén disponibles.</li>
                  </ul>
                </div>
                </div>
                    <a className="button button--primary" href="#">Más sobre nosotros</a>
                </div>
                <div className="col-lg-6 col-xl-5 offset-xl-1">
                  <div className="">
                    <div className="absolute">
                      <Image  src={AboutLayout} alt="img" />
                    </div>
                    <div className=" info-box">
                      <Image src={Gallery2} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
                    
          <section className="section icons-section no-padding-top">
            <div className="container">
              <div className="row margin-bottom">
                <div className="col-12">
                  <div className="heading heading--center"><span className="heading__pre-title">Servicios</span>
                    <h2 className="heading__title"><span>Lo que hacemos</span> <span>para todas las personas</span> </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-lg-12">
                  <div className="icon-item">
                    <div className="icon-item__img"><Image className="img--layout" src={InconoServicio1} alt="img"/>
                      <svg className="icon icon-item__icon icon--red"></svg>
                    </div>
                    <div className="icon-item__text">
                      <p>Ayuda Medica</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
            
          <section className="bottom-background">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="bottom-background__img"><Image src={ImagenBarraInferior} alt="img"/></div>
                </div>
              </div>
            </div>
          </section>
      </div>
    </>
  )
}
