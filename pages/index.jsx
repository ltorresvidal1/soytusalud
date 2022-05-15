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
                <div className="mt-20 flex justify-center space-x-32">
                  <div>
                  <span className='text-gray-400 font-semibold text-xl'>Sobre Nosotros</span>
                      <Typography fontFamily={'Quicksand'} sx={{color:'#4A4C70'}} className='text-5xl font-extrabold'>Soy Tú Salud</Typography>
                    <div>
                      <div className="max-w-2xl mt-8 mb-4">Conoces a algún familiar, amigo, persona o tú que necesite algún servicio médico y se encuentre en situación de vulnerabilidad? En www.soytusalud.org informa tu historia o su historia, aplica y Listo!!.<div> <br/>En la Fundación <a href="">www.soytusalud.org</a> una vez has demostrado que estás en una situación de vulnerabilidad, podrás acceder :</div></div>
                        <ul className="">
                          <li>Consulta Médica General por Telemedicina.</li>
                          <li>Consulta Médica Especializada por Telemedicina.</li>
                          <li>Medicamentos para enfermedades no crónicas.</li>
                          <li>Exámenes de Laboratorio Domiciliarios.</li>
                          <li>Otros servicios para su salud, que estén disponibles.</li>
                        </ul>
                        <button className="mt-10 border-2 border-amber-300 rounded-full p-4 cursor-pointer px-12 uppercase text-xs font-bold" href="#">Más sobre nosotros</button>
                    </div>
                  </div>
                  <div className="flex-col">
                    <div className="absolute">
                      <Image src="/about_layout.png" alt="img" width={650} height={650}/>
                    </div>
                    <div className="relative">
                      <Image src="/gallery_2.png" alt="img" width={380} height={380}/>
                    </div>
                  </div>
                </div> 
            </Container>
          </Box>
          <Box className="mt-40 text-center">
            <div className="col-12">
              <div className="icon icon-item__icon icon--red"> 
                <div className="img--layout" >
                  <span className="heading__pre-title">Servicios</span>
                </div>
                <Image src="/Logo_servicios1.png" alt="img" width={200} height={180}/>
                </div>
                <div className="heading heading--center">
                  <h2 className="heading__title"><span>Lo que hacemos</span> <span>para todas las personas</span> </h2>
                </div>
                <div className="icon-item__text">
                  <p>Ayuda Médica</p>
                </div>
              </div>
          </Box>
      </div>
    </LayoutMain>
  )
}

