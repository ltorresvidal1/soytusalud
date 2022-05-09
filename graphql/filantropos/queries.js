import {gql} from '@apollo/client';

export const usuarios = gql`
query Query {
  Usuarios {
    uid
    tipoDocumento
    identificacion
    nombre
    celular
    direccion
    correo
  }
}   
`;
export const authUser = gql`
  query AuthUser($uid: String!) {
    Usuario(uid: $uid) {
      uid
      tipoDocumento
      identificacion
      nombre  
      celular
      direccion
      correo
    }
  }
`