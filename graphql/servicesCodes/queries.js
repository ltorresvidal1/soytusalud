import { gql } from 'apollo-server-micro'


export const CodeServices = gql`
    query CodeService( $DESCRIPCION_SERVICIO: String!, $TIPO_DE_SERVICIO: String!) {
        CodeService( DESCRIPCION_SERVICIO: $DESCRIPCION_SERVICIO, TIPO_DE_SERVICIO: $TIPO_DE_SERVICIO) {
            DESCRIPCION_SERVICIO
            CODIGO
            TIPO_DE_SERVICIO
        }
    }
`


