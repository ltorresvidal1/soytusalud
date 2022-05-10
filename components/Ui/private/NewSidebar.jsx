import { Divider, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const NewSidebar = () => {
  return (
    <div>
      <Toolbar >
        <Image src={"/logo_dark.png"} alt="soyTuLogo" width={156.25} height={50} />
      </Toolbar>
      <Divider />
      <List  >
        {['Pacientes', 'Servicios', 'Filantropos', 'Comunidades'].map((text, index) => (
          <Link key={text} href={`/private/admin/${text.toLowerCase()}`} passHref>
          <ListItem button >
              <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider/>
      <List>
        {['Cerrar Sesion'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default NewSidebar