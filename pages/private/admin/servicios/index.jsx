import NewPrivateLayout from "../../../../components/layouts/NewPrivateLayout/NewPrivateLayout"
import Head from 'next/head'
import { Box, Container } from "@mui/material"
import { ServiciosToolbar } from "../../../../components/servicios/ServiciosToolbar"
import { ServiciosTablas } from "../../../../components/servicios/ServiciosTablas"


const index = () => {
  return (
    <NewPrivateLayout>
    <Head>
      <title>
        Servicios
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <ServiciosToolbar />
        <Box sx={{ mt: 3 }}>
          {/* <ServiciosTablas UsuariosTabla={UsuariosTabla} /> */}
        </Box>
      </Container>
    </Box>
    </NewPrivateLayout>
  )
}

export default index