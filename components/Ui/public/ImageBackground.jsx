import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Box, Container } from '@mui/material'
import { useEffect } from 'react'

export const ImageBackground = () => {

    const [ImagePath,setImagePath] = useState('/promo_c1.png')
    const router = useRouter()
    useEffect(()=>{
        console.log(router.pathname)
        switch(router.pathname){
            case '/':
                setImagePath('/promo_c1.png')
                break
            case '/trasabilidad':
                setImagePath('/promo_5.png')
                break
            default:
                setImagePath('/promo_c1.png')
                break
        }
    },[router])

    return (

        <>   
         
           
            <Box className="pb-20" sx={{overflow:'hidden', backgroundSize:"contain", textAlign: "center" }} position="relative">
                <Image src={ImagePath} alt="img" layout="fill" objectFit='cover' quality={100} objectPosition="50% 25%" priority={true}/>     
                <Container className="pt-32">
                    <div className="align-container__item">
                        <Box position={'relative'} className="text-white text-3xl md:text-4xl lg:text-6xl xl:text-6xl tracking-tight text-left">
                            <span className='font-bold' data-lang="eslogan1">Mejoramos la Salud de personas en situación de vulnerabilidad </span> 
                            <span className="font-light">con recursos de Responsabilidad Social</span>
                        </Box>
                    </div>
                </Container>
            </Box>
        </>
    )
}