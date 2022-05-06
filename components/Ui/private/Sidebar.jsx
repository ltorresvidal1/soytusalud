import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
// import PrivateComponent from './private/PrivateComponents';
// import ModalcrearProyecto from './ModalcrearProyecto';



const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className='flex flex-col md:flex-row flex-no-wrap md:h-full'>

      <div className='sidebar hidden md:flex w-56 ml-6 my-3 '>
      
        <div className='w-full h-full flex flex-col'>
            <div className="flex justify-center mt-4 mb-16">
                <Image src={"/logo_white.png"} alt="soyTuLogo" width={156.25} height={50} />
            </div>
         
            <ul className='h-full flex flex-col'>
                <SidebarRoute to='/private/admin' title='Inicio'  />
                <SidebarRoute to='/private/admin/pacientes' title='Pacientes'  />
                <SidebarRoute to='/private/admin/servicios' title='Servicios'  />
                <SidebarRoute to='/private/admin/filantropos' title='Filantropos' />
                <SidebarRoute to='/private/admin/comunidades' title='Comunidades' />        
              <div className=" flex flex-col text-white h-full justify-end mb-12 ">
                  <li className=" sidebar-route-disable sidebar-route font-bold" to="/">
                      Cerrar Sesion
                  </li>          
              </div>
            </ul>
        </div>
      </div>
      <div className='flex md:hidden w-2 justify-between bg-gray-800 p-2 text-white'>
        <i className={`fas fa-${open ? 'times' : 'bars'}`} onClick={() => setOpen(!open)} />
        <i className='fas fa-home' />
      </div>
      {open && <ResponsiveSidebar />}

    </div>
  );
};

const ResponsiveSidebar = () => {
  return (
    <div>
      <div
        className='sidebar h-full z-40 absolute md:h-full sm:hidden transition duration-150 ease-in-out'
        id='mobile-nav'
      >
        <div className='px-8'>
            <Image src={"/logo_white.png"} alt="soyTuLogo" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

const SidebarRoute = ({ to, title }) => {
    const router = useRouter()
  return (
    <li className=" mb-3 text-xs">
      <Link
        passHref
        href={to}
      >
        <div className={router.pathname === to? 
        'sidebar-route sidebar-route-active text-white flex items-center ': 
        'sidebar-route sidebar-route-disable  text-white hover:text-white flex items-center '
        }>
          <span className=' text-lg ml-2 font-bold'>{title}</span>
        </div>
      </Link>
    </li>
  );
};






export default Sidebar;