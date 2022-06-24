import PrivateLayout from '../../../../components/layouts/PrivateLayout'
import TablaFilantropos from '../../../../components/Ui/private/TablaFilantropos'
import { client } from '../../../../graphql/initClientSide' 
import { Filantropos } from '../../../../graphql/filantropos/queries' 

const FilantroposPage = ({data}) => {
  return (
    <PrivateLayout>
        <TablaFilantropos data={data}/>
    </PrivateLayout>  
  )
}


export const getServerSideProps = async (ctx) => {
  const {data} = await client.query({
    query: Filantropos
  })
  return {
      props: {
          data
      }
  }
}

export default FilantroposPage