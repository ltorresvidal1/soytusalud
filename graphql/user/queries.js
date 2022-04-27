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