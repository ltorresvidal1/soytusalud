import {gql} from '@apollo/client';

export const usuariosTablas = gql`
query Query {
  UsuariosTabla {
    identificacion
    nombre
    apellidos
    correo
    tipoDocumento
    formularioTuHistoria
  }
}
 
`;

export const pacientesTablaTuHistoria = gql`
query Query {
  UsuariosTablaTuHistoria {
    uid
    nombre
    apellidos
    comunidad
    fechaSolicitud
    grupoPoblacional
  }
}
`;

export const authUser = gql`
  query AuthUser($uid: String!) {
    Usuario(uid: $uid) {
      identificacion
      nombre
      apellidos
      tipoDocumento
      celular
      correo
      uid
    }
  }
`


export const userData = gql`
  query Usuario($uid: String!) {
    Usuario(uid: $uid) {
      uid
      identificacion
      nombre
      apellidos
      tipoDocumento
      foto
      celular
      correo
      formularioTuHistoria
      aplicaEnFundacion
      matchService
      genero
      fechaNacimiento
      direccion
      discapacitado
      tipoDiscapacidad
      victimaViolencia
      identidadGenero
      grupoPoblacional
      orientacionSexual
      municipio
      departamento
      EPS
      tuHistoria
      serviciosSolicitado
      historiaClinica
      sisben
      autorizacionFoto
      recopilacionDatos
      comunidad
      fechaSolicitud
  }
}
`