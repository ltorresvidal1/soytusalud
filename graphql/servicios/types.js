import {  gql } from 'apollo-server-micro'


export const typesServicios = gql`

    type Services{
        tipoServicio: String!
        especialidad: String!
        modalidad: String!
        horaInicio: String!
        horaFin: String!
        dias: [String]!
        valorServicio: String!
    }
    input crearServices {
        tipoServicio: String!
        especialidad: String!
        modalidad: String!
        horaInicio: String!
        horaFin: String!
        dias: [String]!
        valorServicio: String!
    }
    
    type Servicio{
        identificacion: ID!
        foto:String!
        nombreCompleto: String!
        tipoDocumento: String!
        celular: String!
        departamento: String!
        municipio: String!
        direccion: String!
        correo: String!
        paginaWeb: String
        servicios: [Services]!
        cuentaDeAhorros: String!
        distintivoHabilitacion: String!
        convalidacionIcfes: String
        fotoLogoPublicidad: String!
        hojaVida: String!
        resumenCurriculum: String!
        aceptaConvenio: String!
        aceptaTratamientoDatos: String!
        aceptaDocumentoSARLAFT: String!
        aceptaCodigoEticaSoyTuSalud: String!
    }

   
    type Query{
        ServiciosTabla: [Servicio]
        Servicio(identificacion: String!): Servicio
    }

    type Mutation {
        crearServicio(
        foto: String!,
        nombreCompleto: String!
        tipoDocumento: String!
        identificacion: String!
        celular:String!
        departamento: String!
        municipio: String!
        direccion: String!
        correo: String!
        paginaWeb: String
        servicios: [crearServices]!
        cuentaDeAhorros: String!
        distintivoHabilitacion: String!
        convalidacionIcfes: String
        fotoLogoPublicidad: String!
        hojaVida: String!
        resumenCurriculum: String!
        aceptaConvenio: String!
        aceptaTratamientoDatos: String!
        aceptaDocumentoSARLAFT: String!
        aceptaCodigoEticaSoyTuSalud: String!
    ): Servicio

    }
    
`