import NewPrivateLayout from "../../../../components/layouts/NewPrivateLayout/NewPrivateLayout"
import Head from 'next/head'
import { Box, Container } from "@mui/material"
import { ServiciosToolbar } from "../../../../components/servicios/ServiciosToolbar"
import { serviciosTablaData } from "../../../../graphql/servicios/queries"
import { client } from '../../../../graphql/initClientSide'
import { ServiciosTablas } from "../../../../components/servicios/ServiciosTablas"


const ServiciosPage = ({serviciosData}) => {
  console.log(serviciosData)
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
          <ServiciosTablas serviciosData={serviciosData} />
        </Box>
      </Container>
    </Box>
    </NewPrivateLayout>
  )
}


export const getServerSideProps = async (ctx) => {
    const {data} = await client.query({
    query: serviciosTablaData
  })
  const {ServiciosTabla} = data
  return {
    props: {
      serviciosData:ServiciosTabla
    }
  }
}

export default ServiciosPage