import {  gql } from 'apollo-server-micro'

export const typesServiciosCodes = gql`

    type ServicesCodes{
        DESCRIPCION_SERVICIO: String!
        CODIGO: String!
        COBERTURA: String!
        TIPO_DE_SERVICIO: String!
    } 
    type Query{
        CodeService(TIPO_DE_SERVICIO: String!): [ServicesCodes]
    }
    type Mutation{
        crearCode(DESCRIPCION_SERVICIO: String!
        CODIGO: String!
        COBERTURA: String!
        TIPO_DE_SERVICIO: String!
        ): ServicesCodes
    }
    
`