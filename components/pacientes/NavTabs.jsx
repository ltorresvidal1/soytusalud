import { useState } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      {...props}
    />
  );
}

export default function NavTabs({tab}) {
  const [value, setValue] = useState(tab);

  return (
    <Box sx={{ width: '100%' }}>
        <div className='flex w-full justify-around'>
          <Link href="/private/admin/pacientes"  passHref>
                <a className='no-underline '>Todos los Pacientes</a>
          </Link>
        <Link href="/private/admin/pacientes/pacientesTuHistoria"  passHref >
                <a className='no-underline'>Pacientes con Formulario Completado</a>
        </Link>
        </div>
    </Box>
  );
}