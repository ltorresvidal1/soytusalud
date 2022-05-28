import { Box, Container } from '@mui/material'
import Head from 'next/head'
import NewPrivateLayout from '../../../../components/layouts/NewPrivateLayout/NewPrivateLayout'
import { PacientesToolbar } from '../../../../components/pacientes/PacientesToolbar'
import { client } from '../../../../graphql/initClientSide' 
import { pacientesTablaTuHistoria } from '../../../../graphql/user/queries'
import { PacientesTablasTuHistoria } from '../../../../components/pacientes/PacientesTablasTuHistoria'

const PacientesTuHistoria = ({data}) => {
  
  const {UsuariosTablaTuHistoria} = data

  return (
    <NewPrivateLayout>
    <Head>
      <title>
        Pacientes
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
        <PacientesToolbar tab={1} />
        <Box sx={{ mt: 3 }}>
          <PacientesTablasTuHistoria UsuariosTablaTuHistoria={UsuariosTablaTuHistoria} />
        </Box>
      </Container>
    </Box>
    </NewPrivateLayout>  
  )
}


export const getServerSideProps = async (ctx) => {
  const {data} = await client.query({
    query: pacientesTablaTuHistoria
  })
  return {
      props: {
          data
      }
  }
}

export default PacientesTuHistoria