import React from 'react'
import Image from 'next/image'
import { Box, Container } from '@mui/material'

export const ImageBackground = () => {
  return (
    <Box className='' >
        <div >
            <Box sx={{boxSizing:'border-box',display:'block',overflow:'hidden',maxHeight:'200'}}>
                <Image src="/promo_c1.png" alt="img" layout="fill" objectFit='cover' quality={100} objectPosition="50% 25%" priority={true}/>
            </Box>
                <Box className="pt-32 max-w-7xl mx-auto w-full">
                    <div className="align-container__item">
                        <Box position={'relative'} className="text-white text-3xl md:text-4xl lg:text-5xl tracking-tight ">
                            <span className='font-bold' data-lang="eslogan1">Mejoramos la Salud de personas en situación de vulnerabilidad </span> 
                            <span className="font-light">con recursos de Responsabilidad Social</span>
                        </Box>
                    </div>
                </Box>
        </div>
    </Box>
  )
}