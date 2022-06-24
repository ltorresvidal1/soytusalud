import { gql } from "apollo-server-micro";


export const serviciosTablaData = gql`
    query ServiciosTabla {
        ServiciosTabla {
            foto
            identificacion
            nombreCompleto
            departamento
            habilitado
            municipio
            direccion
            servicios {
                tipoServicio
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
            departamento
            direccion
            municipio
            paginaWeb
            servicios {
                tipoServicio
                especialidad
                horaInicio
                modalidad
                horaFin
                celularServicio
                whatsAppServicio
                nombreResponsable
                direccionServicio
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
            habilitado
        }
    }
`