import { connect } from 'mongoose';


const connectionString = process.env.ENV_DB_CONNECT; //me traigo la variable del env

const conectarBD = async () => {
return await connect(connectionString)

.then(() => {
    console.log('Conexion exitosa');    
})
.catch((e) => {
    console.error('Error conectando a la bd', e);
    });
};

export default conectarBD;