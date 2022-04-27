import { db } from "../../firebase/initConfig";
import { addDoc, collection , getDocs , getDoc , setDoc , doc } from "firebase/firestore"; 

export const resolversUsuario = {

    Query: {
        Usuarios: async (parent, args) => { // es el usuario que se creó en query en types
            const usuarios = await getDocs(collection(db, "users"));
            return usuarios;
        },
    },


    Mutation : {
        crearUsuario: async (parent, args) => {
            const usersRef = collection(db,"users")
            const docRef =  doc(db, "users", args._id)
            await setDoc(doc(usersRef,args._id), {
                _id: args._id,
                nombre: args.nombre,
                apellidos: args.apellidos,
                identificacion: args.identificacion,
                tipoDocumento: args.tipoDocumento,
                celular:args.celular,
                correo: args.correo,
                uid: args.uid
            });
            const docSnap = await getDoc(docRef)
            return docSnap.data();
        },
    }
}