import React from 'react'
import NewPrivateLayout from '../../../../components/layouts/NewPrivateLayout/NewPrivateLayout'

const FilantroposPage = ({data}) => {
  return (
    <NewPrivateLayout>
        <div>index</div>
    </NewPrivateLayout>
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