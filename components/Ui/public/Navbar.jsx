import { Fragment, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image';
import { auth } from '../../../firebase/initConfig';
import { signOut } from 'firebase/auth';
import { useAuth } from '../../../context/useAuth';
import { useRouter } from 'next/router'
import LoginModal from '../../LoginModal';
import HandshakeIcon from '@mui/icons-material/Handshake';

import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  UserIcon,
  CursorClickIcon,
  MenuIcon,
  HomeIcon,
  PhoneIcon,
  PlayIcon,
  BriefcaseIcon,
  UserGroupIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  OfficeBuildingIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon} from '@heroicons/react/solid'

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
            link:"trasabilidad",
            label:"Trasabilidad Pacientes"
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
            label:"Empresas con proposito"
        },
        {
            link:"personasconproposito",
            label:"Personas con proposito"
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
            <Image src="/Logo_P4.png" width={'70px'} height={'70px'} alt="logo"/>
            </div>
            <div className="-mr-2 -my-2 lg:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden lg:flex space-x-10">

                <nav>
                    <ul className="main-menu">
                        <li className="text-black main-menu__item main-menu__item">
                            <Link href="/" > 
                            <a className="text-black main-menu__link font-black">Inicio</a>
                            </Link>
                        </li>
                        {authUser?(<>
                        <li className="main-menu__item main-menu__item--has-child">
                            <Link href="/" > 
                                <a className="main-menu__link">Pacientes</a>
                            </Link>
                            <ul className="main-menu__sub-list">
                                <li>
                                    <Link href="/tuhistoria" >
                                        <a>Tu historia</a>
                                    </Link>
                                            
                                </li>
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
                        <li className="text-black main-menu__item main-menu__item">
                            <Link href="/trabajaNosotros">
                                <a className="text-black main-menu__link font-black" >Trabaja con Nosotros</a>
                            </Link>
                        </li>
                        <li className="text-black main-menu__item main-menu__item">
                                <a href="#" className="whitespace-nowrap main-menu__link  text-base font-medium text-gray-500 hover:text-gray-900">
                                Sign in
                                </a>
                        </li>
                        <li className="text-black main-menu__item main-menu__item">
                                <a
                                href="#"
                                className="main-menu__link whitespace-nowrap"
                                >
                                    <span className='items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'> Sign up </span> 
                                </a>

                        </li>
                        
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
                    <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                    Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                        Sign in
                    </a>
                    </p>
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
        )}

        </li>
    )
}


// import Image from 'next/image';
// import {useState, useEffect} from 'react'
// import { auth } from '../../../firebase/initConfig';
// import { signOut } from 'firebase/auth';
// import { useAuth } from '../../../context/useAuth';
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import LoginModal from '../../LoginModal';

// export const Navbar = () => {
    
//     const router = useRouter()
//     const { authUser ,setAuthUser } = useAuth()
//     const [open, setOpen] = useState(false)

//     const handlerLogOut=()=>{
//         signOut(auth)
//         .then(()=>{
//             router.push("/")
//             setAuthUser(null) 
//         }  
//         ).catch(error=>{
//             console(error)
//         })

//     }

//     const [navbar, setNavbar] = useState(false);
//     const [color, setColor] = useState(false);
  
//     const changeBackground = () => {
//       if (window.scrollY >= 2) {
//         setNavbar(true);
//         setColor('black');
//       } else {
//         setNavbar(false);
//         setColor('white');
//       }
//     };
  
//     useEffect(() => {
//       window.addEventListener('scroll', changeBackground, true);
//       return () => window.removeEventListener('scroll', changeBackground);
//     }, []);

//   return (
   
// 		<>  
//             <header className={navbar? "backgroundNav w-full header ":"header header--front"}>
//             <>
//             <div class="container-fluid relative bg-white">
//                 <div class="max-w-7xl mx-auto px-4 sm:px-6">
//                 <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
//                     <div class="flex justify-start lg:w-0 lg:flex-1">
//                     <a href="#">
//                         <span class="sr-only">Workflow</span>
//                         <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
//                     </a>
//                     </div>
//                     <div class="-mr-2 -my-2 md:hidden">
//                     <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
//                         <span class="sr-only">Open menu</span>
                
//                         <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
//                         <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     </button>
//                     </div>
//                     <nav class="hidden md:flex space-x-10">
//                         <div class="relative">

//                         <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
//                         <span>Solutions</span>
                        
//                         <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                             <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
//                         </svg>
//                         </button>

                       
//                     </div>
//                     <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Pricing </a>
//                     <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Docs </a>
//                     <div class="relative">
//                         <button type="button" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
//                         <span>More</span>
//                         <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                             <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
//                         </svg>
//                         </button>
//                         <div class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
//                         <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        
                            
//                         </div>
//                         </div>
//                     </div>
//                     </nav>
//                     <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
//                     <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </a>
//                     <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
//                     </div>
//                 </div>
//                 </div>
//                 <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
//                 <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
//                     <div class="pt-5 pb-6 px-5">
//                     <div class="flex items-center justify-between">
//                         <div>
//                         <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
//                         </div>
//                         <div class="-mr-2">
//                         <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                             <span class="sr-only">Close menu</span>
//                             <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                         </div>
//                     </div>
//                     <div class="mt-6">
//                         <nav class="grid gap-y-8">
//                         <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
//                             <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                             </svg>
//                             <span class="ml-3 text-base font-medium text-gray-900"> Analytics </span>
//                         </a>
//                         <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
//                             <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
//                             </svg>
//                             <span class="ml-3 text-base font-medium text-gray-900"> Engagement </span>
//                         </a>
//                         <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
//                             <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                             </svg>
//                             <span class="ml-3 text-base font-medium text-gray-900"> Security </span>
//                         </a>
//                         <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
//                             <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
//                             </svg>
//                             <span class="ml-3 text-base font-medium text-gray-900"> Integrations </span>
//                         </a>
//                         <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
//                             <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                             </svg>
//                             <span class="ml-3 text-base font-medium text-gray-900"> Automations </span>
//                         </a>
//                         </nav>
//                     </div>
//                     </div>
//                     <div class="py-6 px-5 space-y-6">
//                     <div class="grid grid-cols-2 gap-y-4 gap-x-8">
//                         <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Pricing </a>
//                         <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Docs </a>
//                         <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Help Center </a>
//                         <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Guides </a>
//                         <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Events </a>
//                         <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Security </a>
//                     </div>
//                     <div>
//                         <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
//                         <p class="mt-6 text-center text-base font-medium text-gray-500">
//                         Existing customer?
//                         <a href="#" class="text-indigo-600 hover:text-indigo-500"> Sign in </a>
//                         </p>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </>


//             {/* MENU ORIGINAL */}
//             {/* <div className="container-fluid">
//                 <div className="row no-gutters justify-content-between">
//                     <div className="col-auto d-flex align-items-center" >
//                         <div className="dropdown-trigger d-none d-sm-block" >
//                             <div className=""></div>
//                         </div>
//                         <div className="w-7/12 pt-3">
//                             <a className="" href="index.php"></a>
//                             <Image src="/logo_white.png" width={'150px'} height={'50px'} alt="logo"/>
//                         </div>
//                         <div className="col-auto d-flex align-items-center">
//                         </div>
//                         <div></div>
//                     </div>
//                     <div className="col-auto">
//                         <nav>
//                             <ul className="main-menu">
//                                 <li className="text-black main-menu__item main-menu__item">
//                                     <Link href="/" > 
//                                     <a className="text-black main-menu__link font-black">Inicio</a>
//                                     </Link>
//                                 </li>
//                                 {authUser?(<>
//                                 <li className="main-menu__item main-menu__item--has-child">
//                                     <Link href="/" > 
//                                         <a className="main-menu__link">Pacientes</a>
//                                     </Link>
//                                     <ul className="main-menu__sub-list">
//                                         <li>
//                                             <Link href="/tuhistoria" >
//                                                 <a>Tu historia</a>
//                                             </Link>
                                            
//                                         </li>
//                                     </ul>
//                                 </li>
//                                 </>): null} 
//                                 <li className="main-menu__item main-menu__item--has-child">
//                                     <Link href="/" >
//                                         <a className="main-menu__link">Comunidades E Instituciones</a>
//                                     </Link>
//                                     <ul className="main-menu__sub-list">
//                                         <li>
//                                             <Link href="/" >
//                                                 <a>Registro</a>
//                                             </Link>
//                                         </li>
//                                         <li>
//                                             <Link href="/" > 
//                                                 <a>Inscribir Comunidad</a>
//                                             </Link>
//                                         </li>
//                                         <li>
//                                             <Link href="/" > 
//                                                 <a>Inscribir Institución</a>
//                                             </Link>
//                                         </li>
//                                         <li>
//                                             <Link href="/" > 
//                                                 <a>Preleccionar Beneficiarios</a>
//                                             </Link>
//                                         </li>
//                                         <li>
//                                             <Link href="/" >
//                                                 <a>Seguimiento de Servicios</a>
//                                             </Link>
//                                         </li>
//                                     </ul>
//                                 </li>
//                                 <li className="main-menu__item main-menu__item--has-child">
//                                     <Link href="/" > 
//                                         <a className="main-menu__link">Filántropos</a>
//                                     </Link> 
//                                     <ul className="main-menu__sub-list">
//                                         <li>
//                                             <Link href="/historias" >
//                                                 <a>Pacientes Clasificados</a>
//                                             </Link>
//                                         </li>
//                                         <li>
                                            
//                                         <Link href="/trasabilidad" >
//                                                 <a>Trasabilidad Pacientes</a>
//                                             </Link>
//                                         </li>
//                                         <li>
//                                         <Link href="/donaciones" >
//                                                 <a>Donaciones</a>
//                                             </Link>
//                                         </li>
//                                     </ul>
//                                 </li>
//                                 <li className="main-menu__item main-menu__item--has-child">
//                                     <Link href="/" >
//                                         <a className="main-menu__link">Aliados</a>
//                                     </Link> 
//                                     <ul className="main-menu__sub-list">
//                                         <li>
//                                             <Link href="/instituciones" >
//                                                 <a>Instituciones</a>
//                                             </Link>
//                                         </li>
//                                         <li>
//                                             <Link href="/empresasconproposito" >
//                                                 <a>Empresas Con Propósitos</a>
//                                             </Link>
                                            
//                                         </li>
//                                         <li>
//                                             <Link href="/personasconproposito" >
//                                                 <a>Personas Con Propósitos</a>
//                                             </Link>
//                                         </li>
//                                     </ul>
//                                 </li>
//                                 <li className="text-black main-menu__item main-menu__item">
//                                     <Link href="/trabajaNosotros">
//                                         <a className="text-black main-menu__link font-black" >Trabaja con Nosotros</a>
//                                     </Link>
//                                 </li>
//                             </ul>
                            
//                         </nav>
//                     </div>
//                     <div>
//                     <li className="flex space-x-2 mt-8">
//                             {authUser?<span className="text-white underline" onClick={handlerLogOut}>Salir</span>
//                             :(
//                                 <>
//                                     <LoginModal/>
//                                     <Link href="/registro">
//                                         <button className='bg-white text-red-900 border rounded-md h-8 px-2'>Registrarme</button>
//                                     </Link>
//                                 </>
//                             )}
//                         </li>
//                     </div>
//                 </div>
//             </div> */}

            
//         </header>
        
//         </>
        
// )
// }