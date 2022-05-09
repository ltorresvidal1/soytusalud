import {  gql } from 'apollo-server-micro'


export const typesFilantropo = gql`
    type Filantropo{
        uid: ID!
        tipoDocumento: String!
        identificacion:String!
        nombre: String!
        celular:String!
        direccion:String!
        correo: String!
    }
    type Query{
        Filantropos: [Filantropo]
        Filantropo(uid: String!): Filantropo
    }

    type Mutation {
    crearFilantropo(
        uid: ID!
        tipoDocumento: String!
        identificacion:String!
        nombre: String!
        celular:String!
        direccion:String!
        correo: String!
    
    )
    }

`