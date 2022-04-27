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