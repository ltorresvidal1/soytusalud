import {  gql } from 'apollo-server-micro'


export const typesUsuario = gql`
    type Usuario{
        uid: ID!
        identificacion:String!
        nombre: String!
        apellidos: String!
        tipoDocumento: String!
        celular:String!
        correo: String!
        foto:String
        genero: String
        fechaNacimiento: String
        direccion: String
        discapacitado: String
        tipoDiscapacidad: String
        victimaViolencia: String
        identidadGenero: String
        orientacionSexual: String
        grupoPoblacional: String
        EPS:String
        tuHistoria:String
        serviciosSolicitado: String
        historiaClinica: String
        sisben: String
        autorizacionFoto:String
        recopilacionDatos:String
        comunidad:String
    }
    type Query{
        UsuariosTabla: [Usuario]
        Usuario(uid: String!): Usuario
    }

    type Mutation {
    crearUsuario(
        uid: ID!
        identificacion: String!
        nombre: String!
        apellidos: String!
        tipoDocumento: String!
        celular:String!
        correo: String!
    ): Usuario
    tuHistoria(
        uid:ID!
        foto:String!
        genero: String!
        fechaNacimiento: String!
        direccion: String!
        discapacitado: String!
        tipoDiscapacidad: String
        victimaViolencia: String!
        identidadGenero: String!
        orientacionSexual:String!
        grupoPoblacional: String!
        EPS:String!
        tuHistoria:String!
        serviciosSolicitado: String!
        historiaClinica: String!
        sisben: String!
        autorizacionFoto:String!
        recopilacionDatos:String!
        ):Usuario
    }
    

`