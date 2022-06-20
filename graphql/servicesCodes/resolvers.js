import conectarBD from './dbconnection';
import ServiceCodes from './servicesCodes'

export const resolversServiciosCodes = {

    Query: {
        CodeService: async (parent, args) => {
            conectarBD() 
            const findService = await ServiceCodes.find({
                TIPO_DE_SERVICIO: args.TIPO_DE_SERVICIO
            })
            console.log(findService)
            return findService
        }
    },
    Mutation:{
        crearCode: async (parent, args) => {
            conectarBD() 
            const newServiceCode = new ServiceCodes({
                DESCRIPCION_SERVICIO: args.DESCRIPCION_SERVICIO,
                CODIGO: args.CODIGO,
                COBERTURA: args.COBERTURA,
                TIPO_DE_SERVICIO: args.TIPO_DE_SERVICIO
            })
            await newServiceCode.save().then(() => {
                console.log('Servicio creado')
            }).catch((e) => {
                console.log('Error al crear servicio', e)
            })
            return newServiceCode
        }
    }
}