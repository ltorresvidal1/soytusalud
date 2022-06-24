import {gql} from '@apollo/client';

export const filantropos = gql`
query Filantropos {
  Filantropos {
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
    Filantropo(uid: $uid) {
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