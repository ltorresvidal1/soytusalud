import { Box, Container } from '@mui/material'
import Head from 'next/head'
import NewPrivateLayout from '../../../../components/layouts/NewPrivateLayout/NewPrivateLayout'
import { PacientesToolbar } from '../../../../components/pacientes/PacientesToolbar'
import TablaPacientes from '../../../../components/Ui/private/TablaPacientes'
import { client } from '../../../../graphql/initClientSide' 
import { usuariosTablas } from '../../../../graphql/user/queries' 

const PacientesPage = ({data}) => {
  return (
    <NewPrivateLayout>
            <Head>
      <title>
        Customers | Material Kit
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
        <PacientesToolbar />
        <Box sx={{ mt: 3 }}>
          {/* <CustomerListResults customers={customers} /> */}
        </Box>
      </Container>
    </Box>
    </NewPrivateLayout>  
  )
}


export const getServerSideProps = async (ctx) => {
  const {data} = await client.query({
    query: usuariosTablas
  })
  return {
      props: {
          data
      }
  }
}

export default PacientesPage