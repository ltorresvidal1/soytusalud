import Image from 'next/image';
import {useState} from 'react'
import LogoDark from '../../assets/images/logo_dark.png';
import LogoWhite from '../../assets/images/logo_white.png';
import Link from 'next/link'



export const MenuHead = () => {
    const [open, setOpen] = useState(false)
  return (
   
		<>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@319;400;600;700&display=swap" rel="stylesheet"></link>

        {/* barra oculta */}
        {/* {open?(
            <div>
                    <h1>oe</h1>
                    <h1>oe</h1>
            </div>
        ):null} */}
            <header className="header header--front">
            <div className="container-fluid">
                <div className="row no-gutters justify-content-between">
                    <div className="col-auto d-flex align-items-center" >
                        <div className="dropdown-trigger d-none d-sm-block" >
                            <div className=""></div>
                        </div>
                        <div className="w-7/12 pt-3">
                            <a className="header-logo__link" href="index.php"></a>
                            <Image className="header-logo__img logo--light" src={LogoWhite} alt="logo"/>
                        </div>
                    </div>
                    <div className="col-auto">
                        <nav>
                            <ul className="main-menu">
                                <li className="main-menu__item main-menu__item--active">
                                    <Link href="/" > 
                                    <a className="main-menu__link font-black">Inicio</a>
                                    </Link>
                                </li>
                                <li className="main-menu__item main-menu__item--has-child">
                                    <Link href="/" > 
                                        <a className="main-menu__link">Pacientes</a>
                                    </Link> 
                                    <ul className="main-menu__sub-list">
                                        <li>
                                            <Link href="/" >
                                                <a>Inicio de sessión</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/registro" >
                                                <a>Registrarme</a>
                                            </Link>
                                            
                                        </li>
                                        <li>
                                            <Link href="/tuhistoria" >
                                                <a>Tu historia</a>
                                            </Link>
                                            
                                        </li>
                                        <li>
                                            <Link href="/" >
                                                <a>Cerrar sesisión</a>
                                            </Link>
                                        </li>
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
                                <li className="main-menu__item">
                                    <Link href="/historias" > 
                                        <a className="main-menu__link">Filantropos</a>
                                    </Link>
                                </li>
                                <li className="main-menu__item">
                                    <Link href="/aliados" > 
                                        <a className="main-menu__link">Aliados</a>
                                    </Link>
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

