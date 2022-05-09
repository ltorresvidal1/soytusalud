import Image from 'next/image';
import { auth } from '../../firebase/initConfig';
import { signOut } from 'firebase/auth';
import {useState, useEffect} from 'react'
import { useAuth } from '../../context/useAuth';
import Link from 'next/link'
import { useRouter } from 'next/router'
import LoginModal from '../LoginModal';




export const MenuHead = () => {
    const router = useRouter()
    const { authUser ,setAuthUser } = useAuth()
    const [open, setOpen] = useState(false)

    const handlerLogOut=()=>{
        signOut(auth)
        .then(()=>{
            router.push("/")
            setAuthUser(null) 
        }  
        ).catch(error=>{
            console(error)
        })

    }

    const [navbar, setNavbar] = useState(false);
    const [color, setColor] = useState(false);
  
    const changeBackground = () => {
      if (window.scrollY >= 2) {
        setNavbar(true);
        setColor('black');
      } else {
        setNavbar(false);
        setColor('white');
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', changeBackground, true);
      return () => window.removeEventListener('scroll', changeBackground);
    }, []);

  return (
   
		<>  
            <header className={navbar? "backgroundNav w-full header  ":"header header--front"}>
            <div className="container-fluid">
                <div className="row no-gutters justify-content-between">
                    <div className="col-auto d-flex align-items-center" >
                        <div className="dropdown-trigger d-none d-sm-block" >
                            <div className=""></div>
                        </div>
                        <div className="w-7/12 pt-3">
                            <a className="header-logo__link" href="index.php"></a>
                            <Image className="header-logo__img logo--light" src="/logo_white.png" width={'150px'} height={'50px'} alt="logo"/>
                        </div>
                    </div>
                    <div className="col-auto">
                        <nav>
                            <ul className="main-menu">
                                <li className="text-black main-menu__item main-menu__item--active">
                                    <Link href="/" > 
                                    <a className="text-black main-menu__link font-black">Inicio</a>
                                    </Link>
                                </li>
                                <li className="main-menu__item main-menu__item--has-child">
                                    <Link href="/" > 
                                        <a className="main-menu__link">Pacientes</a>
                                    </Link>

                                    <ul className="main-menu__sub-list">
                                    {authUser?(<>
                                        <li>
                                            <Link href="/tuhistoria" >
                                                <a>Tu historia</a>
                                            </Link>
                                            
                                        </li>
                                        <li>
                                            <a className='text-white' onClick={handlerLogOut}>Cerrar sesisión</a>
                                        </li>
                                    </>):(
                                    <>
                                        <li>
                                            <LoginModal/>
                                        </li>
                                        <li>
                                            <Link href="/registro" >
                                                <a>Registrarme</a>
                                            </Link>
                                            
                                        </li>
                                    </>)} 

                                    </ul>
                                </li>
                                <li className="main-menu__item main-menu__item--has-child">
                                    <Link href="/" >
                                        <a className="main-menu__link">Comunidades E Instituciones</a>
                                    </Link>
                                    <ul className="main-menu__sub-list">
                                        <li>
                                            <Link href="/" >
                                                <a>Registro</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/" > 
                                                <a>Inscribir Comunidad</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/" > 
                                                <a>Inscribir Institución</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/" > 
                                                <a>Preleccionar Beneficiarios</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/" >
                                                <a>Seguimiento de Servicios</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="main-menu__item main-menu__item--has-child">
                                    <Link href="/" > 
                                        <a className="main-menu__link">Filántropos</a>
                                    </Link> 
                                    <ul className="main-menu__sub-list">
                                          <li>
                                            <Link href="/filatroposregistro" >
                                                <a>Registrarme</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/historias" >
                                                <a>Pacientes Clasificados</a>
                                            </Link>
                                        </li>
                                        <li>
                                            
                                        <Link href="/trasabilidad" >
                                                <a>Trasabilidad Pacientes</a>
                                            </Link>
                                                                                    
                                        </li>
                                        <li>
                                        <Link href="/donaciones" >
                                                <a>Donaciones</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                              
                                <li className="main-menu__item main-menu__item--has-child">
                                    <Link href="/" > 
                                        <a className="main-menu__link">Aliados</a>
                                    </Link> 
                                    <ul className="main-menu__sub-list">
                                        <li>
                                            <Link href="/instituciones" >
                                                <a>Instituciones</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/empresasconproposito" >
                                                <a>Empresas Con Propositos</a>
                                            </Link>
                                            
                                        </li>
                                        <li>
                                            <Link href="/personasconproposito" >
                                                <a>Personas Con Propositos</a>
                                            </Link>
                                            
                                        </li>
                                    </ul>
                                </li>
                              
                            </ul>
                        </nav>
                    </div>
                    <div className="col-auto d-flex align-items-center">
                        <ul className="lang-select lang-select--inner">
                            <li className="lang-select__item lang-select__item--active"><span className="text-white font-semibold" data-lang="idioma">Es</span>
                                <ul className="lang-select__sub-list">
                                    <li><a href="#" id="translate" data-text="English,Espa&ntilde;ol" data-file="es,en" data-index="1">English</a></li>
                                </ul>
                            </li>
                        </ul>
                        {/* <div className="dropdown-trigger d-block d-sm-none" onClick={()=>setOpen(!open)}>
                            <div className="dropdown-trigger__item"></div>
                        </div> */}
                    </div>
                </div>
            </div>

            
        </header>
        
        </>
)
}

