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