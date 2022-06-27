import { db } from "../../firebase/initConfig";
import { collection , getDocs , getDoc , setDoc , doc , updateDoc } from "firebase/firestore"; 


export const resolversServicios = {

    Query: {
        ServiciosTabla: async (parent, args) => { 
            const querySnapshot  = await getDocs(collection(db, "servicios"));
            let servicios =[]
            querySnapshot.forEach((doc) => {
                servicios.push(doc.data());
            });
            return servicios;
        },
        // serviciosTablaTuHistoria: async (parent, args) => { 
        //     const q  = await query(collection(db, "users"),where("formularioTuHistoria", "==", true));
        //     const querySnapshot = await getDocs(q);
        //     let servicios =[]
        //     querySnapshot.forEach((doc) => {
        //         servicios.push(doc.data());
        //     });
        //     return servicios;
        // },
        Servicio: async (parent, args) => {
            const docRef = doc(db, "servicios", args.identificacion);
            const docSnap = await getDoc(docRef);
            return docSnap.data();
        },
    },
    Mutation : {
        crearServicio: async (parent, args) => {
            const usersRef = collection(db,"servicios")
            const servicioCreado = {
                foto: args.foto,
                nombreCompleto: args.nombreCompleto,
                tipoDocumento: args.tipoDocumento,
                identificacion: args.identificacion,
                celular:args.celular,
                departamento: args.departamento,
                municipio: args.municipio,
                direccion: args.direccion,
                paginaWeb: args.paginaWeb,
                servicios: args.servicios,
                cuentaDeAhorros: args.cuentaDeAhorros,
                distintivoHabilitacion: args.distintivoHabilitacion,
                convalidacionIcfes: args.convalidacionIcfes,
                fotoLogoPublicidad: args.fotoLogoPublicidad,
                hojaVida: args.hojaVida,
                resumenCurriculum: args.resumenCurriculum,
                habilitado: false,
                aceptaConvenio: args.aceptaConvenio,
                aceptaTratamientoDatos: args.aceptaTratamientoDatos,
                aceptaDocumentoSARLAFT: args.aceptaDocumentoSARLAFT,
                aceptaCodigoEticaSoyTuSalud: args.aceptaCodigoEticaSoyTuSalud,
            }
            await setDoc(doc(usersRef,args.identificacion),servicioCreado);
            return servicioCreado;
        },
        actualizarEstadoServicio: async (parent, args) => {
            const docRef = doc(db, "servicios", args.identificacion);
            const docSnap = await getDoc(docRef);
            const servicioActualizado = {
                habilitado: args.habilitado,
            }
            await updateDoc(docRef,servicioActualizado);
            return docSnap.data();
        }
    }
}