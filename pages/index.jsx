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
                      <p className="max-w-2xl mt-8 mb-4">Conoces a algún familiar, amigo, persona o tú que necesite algún servicio médico y se encuentre en situación de vulnerabilidad? En www.soytusalud.org informa tu historia o su historia, aplica y Listo!!.<p> <br/>En la Fundación <a href="">www.soytusalud.org</a> una vez has demostrado que estás en una situación de vulnerabilidad, podrás acceder :</p></p>
                        <ul className="list-disc list-inside">
                          <li>Consulta Médica General por Telemedicina.</li>
                          <li>Consulta Médica Especializada por Telemedicina.</li>
                          <li>Medicamentos para enfermedades no crónicas.</li>
                          <li>Exámenes de Laboratorio Domiciliarios.</li>
                          <li>Otros servicios para su salud, que estén disponibles.</li>
                        </ul>
                        <button className="mt-10 border-2 border-amber-300 hover:bg-amber-300 hover:drop-shadow-md rounded-full p-4 cursor-pointer px-12 uppercase text-xs font-bold" href="#">Más sobre nosotros</button>
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
          <Box className=" text-center">
            <Container>
                <div> 
                <div className='mt-20'>
                  <span className='text-gray-400 font-bold text-xl'>Servicios</span>
                </div>
                <Typography fontFamily={'Quicksand'} sx={{color:'#4A4C70'}} className='text-4xl font-extrabold' data-lang="eslogan1">Lo que hacemos <span className='font-light'>para todas</span><br/><span className='font-light'>las personas</span></Typography> 
                <span className="text-3xl font-light"></span>
                <div className='mt-12'>
                  <Image src="/Logo_servicios1.png" alt="img" width={90} height={80}/>
                </div>
                </div>
                <div className="mt-4">
                  <span className='text-gray-700 font-bold text-xl'>Ayuda Médica</span>
                </div>
            </Container>
          </Box>
      </div>
    </LayoutMain>
  )
}

