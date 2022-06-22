/* This example requires Tailwind CSS v2.0+ */
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
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
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
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                />
                </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
            </div>
            <div className="col-auto">
             <Popover.Group as="nav" className="hidden md:flex space-x-10">
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
                            {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"> */}
                                <a href="#" className="whitespace-nowrap main-menu__link  text-base font-medium text-gray-500 hover:text-gray-900">
                                Sign in
                                </a>
                                <a
                                href="#"
                                className="main-menu__link ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                Sign up
                                </a>
                            {/* </div> */}

                        </li>
                        
                    </ul>
                    
                            
                </nav>
            </Popover.Group> 
            </div>
            {/* <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Popover className="relative">
                {({ open }) => (
                    <>
                    <Popover.Button
                        className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        )}
                    >
                        <span>Solutions</span>
                        <ChevronDownIcon
                        className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                        />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                                </a>
                            ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                <a
                                    href={item.href}
                                    className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                    <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3">{item.name}</span>
                                </a>
                                </div>
                            ))}
                            </div>
                        </div>
                        </Popover.Panel>
                    </Transition>
                    </>
                )}
                </Popover>

                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Pricing
                </a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Docs
                </a>

                <Popover className="relative">
                {({ open }) => (
                    <>
                    <Popover.Button
                        className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        )}
                    >
                        <span>More</span>
                        <ChevronDownIcon
                        className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                        />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                                </a>
                            ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                            <div>
                                <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                {recentPosts.map((post) => (
                                    <li key={post.id} className="text-base truncate">
                                    <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                        {post.name}
                                    </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            <div className="mt-5 text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                {' '}
                                View all posts <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                            </div>
                        </div>
                        </Popover.Panel>
                    </Transition>
                    </>
                )}
                </Popover>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
                </a>
                <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                Sign up
                </a>
            </div> */}
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
            <Popover.Panel focus className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                    <div>
                    <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                    />
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
                        <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                        </a>
                    ))}
                    </nav>
                </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Pricing
                    </a>

                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Docs
                    </a>
                    {resources.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                        {item.name}
                    </a>
                    ))}
                </div>
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