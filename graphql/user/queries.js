import {gql} from '@apollo/client';

export const usuarios = gql`
query Query {
  Usuarios {
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