import { Box, Container, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { LayoutMain } from '../components/layouts/LayoutMain'

export default function Home() {
  
 
  return (
    <LayoutMain>
      <div>
          <Box sx={{backgroundColor:"#F9F7F6"}}id="about">
            <Container maxWidth="xl">
              <div className="flex ">
                <div className="col-lg-6 flex-grow">
                    <span className='text-gray-400 font-semibold text-xl'>Sobre Nosotros</span>
                    <Typography fontFamily={'Quicksand'} sx={{color:'#4A4C70'}} className='text-5xl font-extrabold'>Soy Tú Salud</Typography>
                  <div>
                  <p>Conoces a algún familiar, amigo, persona o tú que necesite algún servicio médico y se encuentre en situación de vulnerabilidad? En www.soytusalud.org informa tu historia o su historia, aplica y Listo!!.</p><p> En la Fundación <a href="">www.soytusalud.org</a> una vez has demostrado que estás en una situación de vulnerabilidad, podrás acceder :</p>
                    <ul className="">
                      <li>Consulta Médica General por Telemedicina.</li>
                      <li>Consulta Médica Especializada por Telemedicina.</li>
                      <li>Medicamentos para enfermedades no crónicas.</li>
                      <li>Exámenes de Laboratorio Domiciliarios.</li>
                      <li>Otros servicios para su salud, que estén disponibles.</li>
                      <a className="" href="#">Más sobre nosotros</a>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <div className="absolute">
                      <Image  src="/about_layout.png" alt="img" width={700} height={700}/>
                    </div>
                    <div className="">
                      <Image src="/gallery_2.png" alt="img" width={350} height={350}/>
                    </div>
                  </div>
                </div>  
                </div>
            </Container>
          </Box>
                    
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
                    <Image src="/Logo_servicios1.png" alt="img"  width={300} height={300}/>
                    </div>
                    
                    <div  className="img--layout" >
                      <Image src="/icon_1-1.png" alt="img" width={200} height={200}/>
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
    </LayoutMain>
  )
}

