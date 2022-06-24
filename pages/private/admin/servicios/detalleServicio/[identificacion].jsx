import NewPrivateLayout from "../../../../../components/layouts/NewPrivateLayout/NewPrivateLayout"
import { client } from "../../../../../graphql/initClientSide"
import { servicioDetalle } from "../../../../../graphql/servicios/queries"
import Head from 'next/head'
import { Box, Container, Grid } from "@mui/material"
import { ServicioDetails } from "../../../../../components/servicios/ServiceDetails"

const DetalleServicio = ({Servicio}) => {
    console.log(Servicio)
  return (
      <NewPrivateLayout>
        <Head>
          <title>
           Servicio {Servicio.nombreCompleto}
          </title>
        </Head>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8
          }}
        >
          <Container maxWidth="xl">
            <Grid
              container
            >
              <Grid
                item
                width={"100%"}
              >
                <ServicioDetails servicio={Servicio} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </NewPrivateLayout>
  )
}


export const getServerSideProps = async ({ params }) => {

    const { identificacion } = params 
    const {data} = await client.query({
      query: servicioDetalle,
      variables:{identificacion}
    })
    const { Servicio } = data
    return {
        props: {
            Servicio
        }
    }
  }

export default DetalleServicio