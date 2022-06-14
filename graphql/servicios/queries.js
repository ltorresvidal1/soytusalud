import { gql } from "apollo-server-micro";


export const serviciosTablaData = gql`
    query ServiciosTabla {
        ServiciosTabla {
            identificacion
            foto
            nombreCompleto
            tipoDocumento
            celular
            departamento
            municipio
            direccion
            correo
            servicios {
                tipoServicio
                especialidad
                modalidad
                horaInicio
                horaFin
                dias
                valorServicio
            }
        }
    }
`

export const servicioDetalle = gql`
    query Servicio($identificacion: String!) {
        Servicio(identificacion: $identificacion) {
            identificacion
            foto
            nombreCompleto
            tipoDocumento
            celular
            departamento
            municipio
            direccion
            correo
            paginaWeb
            servicios {
                tipoServicio
                especialidad
                modalidad
                horaInicio
                horaFin
                dias
                valorServicio
            }
            cuentaDeAhorros
            distintivoHabilitacion
            convalidacionIcfes
            fotoLogoPublicidad
            hojaVida
            resumenCurriculum
            aceptaConvenio
            aceptaTratamientoDatos
            aceptaDocumentoSARLAFT
            aceptaCodigoEticaSoyTuSalud
        }
    }
`