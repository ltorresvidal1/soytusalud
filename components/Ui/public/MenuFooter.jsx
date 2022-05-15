import { Box, Grid } from '@mui/material';
import Image from 'next/image';
export const MenuFooter = () => {
  return (

<>
<Box>
  <section className="mt-32 flex justify-center">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="bottom-background__img"> <Image alt="footerLogo" src="/bottom-bg.png"  width={500} height={80}  layout="responsive"/></div>
        </div>
      </div>
    </div>
  </section>
</Box>

 <footer className='bg-gray-900 flex justify-center items-center space-x-60 h-80'>
          <Grid container className='justify-between space-x-80'>
            <Box sx={{display:{xs:'none' , md: 'flex', xl:'flex'}}} className='space-x-12'>
              <div>
                  <div><Image className="" src="/Logo_P4.png"  width="150" height="150" alt="logo"/></div>
              </div>
              <div className='flex flex-col text-gray-500 tracking-tight font-semibold'>
                <div className='flex flex-col'>
                  <span className='text-white font-bold text-lg'>Contáctanos</span>
                  <span className="mt-6">Medellín</span>
                  <span>Teléfono: <a href="tel:+3207148401">+57 320 702 3823</a></span>
                  <span>Email: <a href="mailto:soutu@soutu.org">info@soytusalud.org</a></span>
                </div>
              </div>
            </Box>
              <div className="flex flex-col w-64">
                <span className='text-white font-bold text-lg'>Te acompaño</span>
                <span className='text-gray-500 tracking-tight font-semibold mt-6'>Ayúdanos a cambiar la vida de los menos favorecidos en Colombia</span>
              <div>
                  <button className="mt-10 bg-amber-300 hover:drop-shadow-md rounded-full p-4 cursor-pointer px-16 uppercase text-xs font-bold" href="#">Te acompaño</button>
              </div>
              </div>
          </Grid>
  </footer>
  <div className="col-md-6 bg-gray-900 text-center h-12">
      <span className='text-gray-500'>Copyrights Soy Tú © 2022. Todos los derechos reservado.</span>
  </div>
    

</>
  )
}


{/* <li className="footer-socials__item"><a className="footer-socials__link" href="https://www.facebook.com/Fundación-Soy-Tú-Salud-107327561900263" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
<li className="footer-socials__item"><a className="footer-socials__link" href="https://www.linkedin.com/in/fundación-soy-tú-salud-845592233/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
<li className="footer-socials__item"><a className="footer-socials__link" href="https://twitter.com/FundacinSoyTSa1" target="_blank" rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
<li className="footer-socials__item"><a className="footer-socials__link" href="https://www.instagram.com/fundacionsoytusalud/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a></li> */}