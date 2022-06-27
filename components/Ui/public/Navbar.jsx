import { Fragment, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image';
import { auth } from '../../../firebase/initConfig';
import { signOut } from 'firebase/auth';
import { useAuth } from '../../../context/useAuth';
import { useRouter } from 'next/router'
import LoginModal from '../../LoginModal';

import {
  UserIcon,
  MenuIcon,
  HomeIcon,
  BriefcaseIcon,
  UserGroupIcon,
  OfficeBuildingIcon,
  XIcon,
} from '@heroicons/react/outline'

const solutions = [
  {
    name: 'Incio',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/',
    icon: HomeIcon  ,
  },
  {
    name: 'Pacientes',
    description: 'Speak directly to your customers in a more meaningful way.',
    subNav:[
        {
            link:"tuhistoria",
            label:"Tu historia"
        }
    ],
    icon: UserIcon,
  },
  { 
    name: 'Filantropos', 
    description: "Your customers' data will be safe and secure.", 
    subNav:[
        {
            link:"historias",
            label:"Pacientes Clasificados"
        },
        {
            link:"trazabilidad",
            label:"Trazabilidad Pacientes"
        },
        {
            link:"donaciones",
            label:"Donaciones"
        }
    ],
    icon: UserGroupIcon
  },
  {
    name: 'Aliados',
    description: "Connect with third-party tools that you're already using.",
    subNav:[
        {
            link:"instituciones",
            label:"Instituciones"
        },
        {
            link:"empresasconproposito",
            label:"Empresas con propósito"
        },
        {
            link:"personasconproposito",
            label:"Personas con propósito"
        }
    ],
    icon: OfficeBuildingIcon,
  },
  {
    name: 'Trabaja con nosotros',
    href: '/trabajaNosotros',
    icon: BriefcaseIcon,
  },
]

export const Navbar = () => {
    const router = useRouter()
    const { authUser ,setAuthUser } = useAuth()
    const handlerLogOut= async ()=>{
        await signOut(auth)
        .then(()=>{
            setAuthUser(null) 
            router.push("/")
        }
        ).catch(error=>{
            console(error)
        })
    
    }
    
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
            if (window.scrollY >= 2) {
            setNavbar(true);
            } else {
            setNavbar(false);
            }
        };
    
        useEffect(() => {
            window.addEventListener('scroll', changeBackground, true);
            return () => window.removeEventListener('scroll', changeBackground);
        }, []);

  return (
    <header className={navbar? "backgroundNav w-full header ":"header header--front"}>
        <Popover className="container-fluid relative bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 lg:justify-start lg:space-x-10">
                    <div className="flex justify-start items-center sm:w-0 sm:flex-1">
                        <Image src="/logo_horizontal-white.png" width={'280px'} height={'110px'} alt="logo"/>
                    </div>
                    <Popover.Button className="-mr-2 -my-2 lg:hidden">
                        <div className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </div>
                    </Popover.Button>
                    <Popover.Group as="nav" className="hidden lg:flex space-x-10">
                        <nav>
                            <ul className="main-menu">
                                <li className="text-black main-menu__item main-menu__item">
                                    <Link href="/" > 
                                    <a className="text-black main-menu__link font-black">Inicio</a>
                                    </Link>
                                </li>
                                {authUser?(
                                <>
                                    <li className="main-menu__item main-menu__item--has-child">
                                        <Link href="/" > 
                                            <a className="main-menu__link">Pacientes</a>
                                        </Link>
                                        <ul className="main-menu__sub-list">
                                            {authUser.formularioTuHistoria?(
                                                <li>
                                                    <Link href="/miSolictud" >
                                                        <a>Mi solicitud</a>
                                                    </Link>   
                                                </li>
                                            ):
                                            (
                                                <li>
                                                    <Link href="/tuhistoria" >
                                                        <a>Tu historia</a>
                                                    </Link>   
                                                </li>
                                            )}
                                        </ul>
                                    </li>
                                </>): null} 
                                {/* <li className="main-menu__item main-menu__item--has-child">
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
                                </li> */}
                                <li className="main-menu__item main-menu__item--has-child">
                                    <Link href="/" > 
                                        <a className="main-menu__link">Filántropos</a>
                                    </Link> 
                                    <ul className="main-menu__sub-list">
                                        <li>
                                            <Link href="/historias" >
                                                <a>Pacientes Clasificados</a>
                                            </Link>
                                        </li>
                                        <li>
                                                    
                                        <Link href="/trazabilidad" >
                                                <a>Trazabilidad Pacientes</a>
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
                                                <a>Empresas Con Propósitos</a>
                                            </Link>
                                                    
                                        </li>
                                        <li>
                                            <Link href="/personasconproposito" >
                                                <a>Personas Con Propósitos</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                    {authUser?
                                    (
                                        <>
                                            <li className="text-black main-menu__item main-menu__item ">
                                                <a onClick={handlerLogOut} className="main-menu__link whitespace-nowrap ">
                                                    <span className='items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer '> Cerrar sesión </span> 
                                                </a>
                                            </li>
                                        </>
                                    )
                                    :
                                    (
                                        <> 
                                            <li className="text-black main-menu__item main-menu__item">
                                                <Link href="/trabajaNosotros">
                                                    <a className="text-black main-menu__link font-black" >Trabaja con Nosotros</a>
                                                </Link>
                                            </li>
                                            <li className="text-black main-menu__item main-menu__item">
                                                <Link href={"/registro"}>
                                                    <a className=" whitespace-nowrap main-menu__link  text-base font-mediumt hover:text-gray-900">
                                                        <span className=''>Regístrate</span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="text-black main-menu__item main-menu__item">
                                                <Link href={"/login"}>
                                                    <a className="main-menu__link whitespace-nowrap ">
                                                        <span  className=' underline items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer '> Iniciar sesión </span> 
                                                    </a>
                                                </Link>
                                            </li>
                                        </>
                                    )}
                            </ul>
                            
                                    
                        </nav>
                    </Popover.Group> 
                </div>
            </div>

            <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className=" overscroll-y-auto absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Image src="/logo_dark.png" width={'150px'} height={'50px'} alt="logo"/>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {solutions.map((item) => (
                                        <SubMenu key={item.name} item={item}/>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                {authUser?
                                    (
                                        <>
                                            <a onClick={handlerLogOut} className="main-menu__link whitespace-nowrap cursor-pointer ">
                                                <span className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 underline '> Cerrar sesión </span> 
                                            </a>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <Link href={"/registro"}>
                                                <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                                Regístrate
                                                </a>
                                            </Link>
                                            <p className="mt-6 text-center text-base font-medium text-gray-500" >Ya estas registrado?{' '}</p> 
                                            <div className='mt-3 flex justify-center'>
                                                <Link href={"/login"}>
                                                    <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                                        Iniciar Sesion
                                                    </a>
                                                </Link>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    </header>
  )
}


const SubMenu =({item})=>{
    const [open, setOpen] = useState(false)

    return(
        <li key={item.name} className='-m-3 p-3 list-none items-center rounded-md hover:bg-gray-50 '>
            {item.href?
                (
                    <>
                        <Link href={item.href} passHref>
                            <div className='flex cursor-pointer' onClick={()=>setOpen(!open)}>
                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>    
                            </div>
                        </Link>
                    </>
                )
                :
                (
                    <>
                        <div className='flex cursor-pointer' onClick={()=>setOpen(!open)}>
                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>    
                        </div>
                        <ul className={open?'ml-5':"ml-5 hidden"}>
                            {item.subNav.map(sub=>(
                                <li key={sub.link}>
                                    <Link href={sub.link}>
                                        <a className='text-blue-500'>{sub.label}</a>
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </>     
                )
            }
        </li>
    )
}
