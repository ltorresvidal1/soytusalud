import Head from 'next/head'
import Image from 'next/image'
import InconoServicio1 from '../assets/images/Logo_servicios1.png';
import FondoInconoServicio from '../assets/images/icon_1-1.png';
export default function Home() {
  
 
  return (
    <>
      <div>
        
          <section className="promo-primary">
              <div className="container">
              <picture  className="img--bg">
                <Image src="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/promo_c1.png?alt=media&token=31fd0e9e-d9eb-4dda-90ab-5c558ab844eb" alt="img" layout="fill" objectFit='cover' objectPosition="50% 25%"/>
              </picture>
                <div className="row">
                  <div className="col-auto">
                    <div className="align-container">
                      <div className="align-container__item">
                        <h1 className="promo-primary__title pt-2 mb-4">
                          <span className='' data-lang="eslogan1">Mejoramos la Salud de personas en situación de vulnerabilidad </span> 
                          <span data-lang="eslogan2">con recursos de Responsabilidad Social</span>
                        </h1>
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
                  <div className="info-box flex items-center">
                    <div className="absolute">
                      <Image  src="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/about_layout.png?alt=media&token=d61d32ae-1c14-4e1f-8da6-e7c4b616591e"alt="img" width={700} height={700}/>
                    </div>
                    <div className="relative box-content m-auto">
                      <Image src="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/gallery_2.png?alt=media&token=80683ced-2bdd-4b71-b2b3-be2ea98c774f" alt="img" width={350} height={350}/>
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
                <div className="col-12 col-lg-12">
                  <div className="icon-item">
                    <div className="icon-item__img">
                    <div className="icon icon-item__icon icon--red"> 
                    <Image src="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/Logo_servicios1.png?alt=media&token=5eed9f8b-d302-4b15-989b-cd101e7c93a6" width={300} height={300} alt="img"/>
                    </div>
                    
                    <div  className="img--layout" >
                      <Image src="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/icon_1-1.png?alt=media&token=c3388582-3f56-45db-ab13-9c6fb8904c2b" alt="img"  width={200} height={200}/>
                      </div>
                                                  
                    </div>
                    <div className="icon-item__text">
                      <p>Ayuda Medica</p>
                    </div>
                  </div>
                </div>                             
              </div>
            </div>
          </section>
      </div>
    </>
  )
}

