import { useState } from 'react'
import Head from 'next/head'
import { client } from '../../../../graphql/initClientSide'
import { userData  } from '../../../../graphql/user/queries'
import { AccountProfile } from '../../../../components/detallePacientes/account-profile'
import { AccountProfileDetails } from '../../../../components/detallePacientes/account-profile-details'
import NewPrivateLayout from '../../../../components/layouts/NewPrivateLayout/NewPrivateLayout'
import { Box, Container, Grid, Typography } from '@mui/material'


const DetallePaciente = ({Usuario}) => {
  const [user,setUser]=useState(Usuario)
  console.log(user)

  return (
    
      <NewPrivateLayout>
        <Head>
          <title>
            Paciente
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
                <AccountProfileDetails user={user} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </NewPrivateLayout>
  )
}


export const getServerSideProps = async ({ params }) => {

  const { uid } = params 
  const {data} = await client.query({
    query: userData,
    variables:{uid}
  })
  const { Usuario } = data
  return {
      props: {
        Usuario
      }
  }
}


export default DetallePaciente