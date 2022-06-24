import { useState } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs({tab}) {
  const [value, setValue] = useState(tab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Link href="/private/admin/pacientes" passHref >
          <LinkTab label="Todos los Pacientes"/>
        </Link>
       <Link href="/private/admin/pacientes/pacientesTuHistoria" passHref >
          <LinkTab label="Pacientes con Formulario Completado" />
       </Link>
      </Tabs>
    </Box>
  );
}