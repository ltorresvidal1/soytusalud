import {  gql } from 'apollo-server-micro'


export const typesUsuario = gql`
    type Usuario{
        _id: ID!
        nombre: String
        apellidos: String!
        identificacion: String!
        tipoDocumento: String!
        celular:String!
        correo: String!
        uid: String!
        foto:String
        genero: String
        fechaNacimiento: String
        direccion: String
        discapacitado: Boolean
        tipoDiscapacidad: String
        grupoPoblacional: String
        EPS:String
        tuHistoria:String
        serviciosSolicitado: [String]
        historiaClinica: String
        sisben: String
        autorizacionFoto:Boolean
        recopilacionDatos:Boolean
    }
    type Query{
            Usuarios: [Usuario]
    }

    type Mutation {
    crearUsuario(
        _id: ID!
        nombre: String
        apellidos: String!
        identificacion: String!
        tipoDocumento: String!
        celular:String!
        correo: String!
        uid: String!
    ): Usuario

    }
    

`