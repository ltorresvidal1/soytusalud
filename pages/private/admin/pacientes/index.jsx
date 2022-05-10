import PrivateLayout from '../../../../components/layouts/PrivateLayout'
import TablaPacientes from '../../../../components/Ui/private/TablaPacientes'
import { client } from '../../../../graphql/initClientSide' 
import { usuariosTablas } from '../../../../graphql/user/queries' 

const PacientesPage = ({data}) => {
  return (
    <PrivateLayout>
        <TablaPacientes data={data}/>
    </PrivateLayout>  
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