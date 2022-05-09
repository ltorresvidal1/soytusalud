import { db } from "../../firebase/initConfig";
import { addDoc, collection , getDocs , getDoc , setDoc , doc , updateDoc } from "firebase/firestore"; 


export const resolversFilantropos = {

    Query: {
        Filantropos: async (parent, args) => { // es el usuario que se creó en query en types
            const querySnapshot  = await getDocs(collection(db, "filantropos"));
            let filantropos =[]
            querySnapshot.forEach((doc) => {
                filantropos.push(doc.data());
            });
            return usuarios;
        },
        Filantropo: async (parent, args) => {
            const docRef = doc(db, "filantropos", args.uid);
            const docSnap = await getDoc(docRef);
            return docSnap.data();
        },
    },
    Mutation : {
        crearFilantropo: async (parent, args) => {
            const usersRef = collection(db,"filantropos")
            const filantropoCreado = {
                uid: args.uid,
                tipoDocumento: args.tipoDocumento,
                identificacion: args.identificacion, 
                nombre: args.nombre,                              
                celular:args.celular,
                direccion: args.direccion,
                correo: args.correo,
            }
            await setDoc(doc(usersRef,args.uid),filantropoCreado);
            return filantropoCreado;
        }
    }
}