import {  gql } from 'apollo-server-micro'


export const typesUsuario = gql`
    type Servicio{
        uid: ID!
        identificacion:String!
        nombre: String!
        apellidos: String!
        tipoDocumento: String!
        celular: String!
        correo: String!
        direccion: String!
        tipoDeServicio: String!
        especialidad: String!
        modalidadDeAtencion: String!
        disponibilidadHoraria: String!
        valorDelServicio: String!
        cuentaDeAhorros: String!
        distintivoDeHabilitacion: String!
        resumeneCurriculum: String!
        hojaVida: String!
        foto:String!
        aceptaConvenio: String!
        aceptaTratamientoDatos: Boolean!
        aceptaDocumentoSARLAFT: Boolean!
        AceptaCodigoEticaSoyTuSalud: Boolean!
        convalidacionICFES: String
        paginaWeb: String
        celular2:String
    }
    type Query{
        ServicioTabla: [Servicio]
        Servicio(uid: Servicio!): Servicio
    }

    type Mutation {
        crearServicio(
        uid: ID!
        identificacion: String!
        nombre: String!
        apellidos: String!
        tipoDocumento: String!
        celular:String!
        correo: String!
    ): Usuario

    }
    
`