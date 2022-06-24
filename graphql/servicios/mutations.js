import { gql } from "@apollo/client";

export const crearServicios = gql`
  mutation CrearServicio($foto: String!, $nombreCompleto: String!, $tipoDocumento: String!, $identificacion: String!, $celular: String!, $departamento: String!, $municipio: String!, $direccion: String!, $servicios: [crearServices]!, $cuentaDeAhorros: String!, $distintivoHabilitacion: String!, $fotoLogoPublicidad: String!, $hojaVida: String!, $resumenCurriculum: String!, $aceptaConvenio: String!, $aceptaTratamientoDatos: String!, $aceptaDocumentoSARLAFT: String!, $aceptaCodigoEticaSoyTuSalud: String!, $paginaWeb: String, $convalidacionIcfes: String) {
    crearServicio(foto: $foto, nombreCompleto: $nombreCompleto, tipoDocumento: $tipoDocumento, identificacion: $identificacion, celular: $celular, departamento: $departamento, municipio: $municipio, direccion: $direccion, servicios: $servicios, cuentaDeAhorros: $cuentaDeAhorros, distintivoHabilitacion: $distintivoHabilitacion, fotoLogoPublicidad: $fotoLogoPublicidad, hojaVida: $hojaVida, resumenCurriculum: $resumenCurriculum, aceptaConvenio: $aceptaConvenio, aceptaTratamientoDatos: $aceptaTratamientoDatos, aceptaDocumentoSARLAFT: $aceptaDocumentoSARLAFT, aceptaCodigoEticaSoyTuSalud: $aceptaCodigoEticaSoyTuSalud, paginaWeb: $paginaWeb, convalidacionIcfes: $convalidacionIcfes) {
      identificacion
    }
  }
`

