import React from 'react'
import NewPrivateLayout from '../../../../components/layouts/NewPrivateLayout/NewPrivateLayout'
import { client } from '../../../../graphql/initClientSide'
import { filantropos } from '../../../../graphql/filantropos/queries'

const FilantroposPage = ({data}) => {
  return (
    <NewPrivateLayout>
        <div>index</div>
    </NewPrivateLayout>
  )
}


export const getServerSideProps = async (ctx) => {
  const {data} = await client.query({
    query: filantropos
  })
  return {
      props: {
          data
      }
  }
}

export default FilantroposPage