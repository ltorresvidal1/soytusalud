import { gql } from "@apollo/client";

export const registrarUsuario = gql`
mutation Mutation($uid: ID!, $identificacion: String!, $nombre: String!, $apellidos: String!, $tipoDocumento: String!, $celular: String!, $correo: String!) {
  crearUsuario(uid: $uid, identificacion: $identificacion, nombre: $nombre, apellidos: $apellidos, tipoDocumento: $tipoDocumento, celular: $celular, correo: $correo) {
    uid
    identificacion
    nombre
    apellidos
    tipoDocumento
    celular
    correo
  }
}
`;

export const tuHistoriaUpdate = gql`
mutation Mutation($uid: ID!, $foto: String!, $genero: String!, $fechaNacimiento: String!, $direccion: String!, $discapacitado: String!, $victimaViolencia: String!, $identidadGenero: String!, $orientacionSexual: String!, $grupoPoblacional: String!, $municipio: String!, $departamento: String!, $EPS: String!, $tuHistoria: String!, $serviciosSolicitado: [String]!, $historiaClinica: String!, $sisben: String!, $autorizacionFoto: String!, $recopilacionDatos: String!, $tipoDiscapacidad: String) {
  tuHistoria(uid: $uid, foto: $foto, genero: $genero, fechaNacimiento: $fechaNacimiento, direccion: $direccion, discapacitado: $discapacitado, victimaViolencia: $victimaViolencia, identidadGenero: $identidadGenero, orientacionSexual: $orientacionSexual, grupoPoblacional: $grupoPoblacional, municipio: $municipio, departamento: $departamento, EPS: $EPS, tuHistoria: $tuHistoria, serviciosSolicitado: $serviciosSolicitado, historiaClinica: $historiaClinica, sisben: $sisben, autorizacionFoto: $autorizacionFoto, recopilacionDatos: $recopilacionDatos, tipoDiscapacidad: $tipoDiscapacidad) {
    uid
    identificacion
  }
}

`