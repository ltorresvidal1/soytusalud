import { gql } from "@apollo/client";

export const registrarFilantropo = gql`
mutation Mutation($uid: ID!, $identificacion: String!, $nombre: String!, $apellidos: String!, $tipoDocumento: String!, $celular: String!, $correo: String!) {
  crearFilantropo(uid: $uid,tipoDocumento: $tipoDocumento, identificacion: $identificacion, nombre: $nombre,  celular: $celular, direccion: $direccion, correo: $correo) {
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