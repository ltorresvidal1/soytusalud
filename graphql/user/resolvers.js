import { db } from "../../firebase/initConfig";
import { addDoc, collection , getDocs , getDoc , setDoc , doc } from "firebase/firestore"; 

export const resolversUsuario = {

    Query: {
        Usuarios: async (parent, args) => { // es el usuario que se creó en query en types
            const querySnapshot  = await getDocs(collection(db, "users"));
            let usuarios =[]
            querySnapshot.forEach((doc) => {
                usuarios.push(doc.data());
            });
            return usuarios;
        },
        Usuario: async (parent, args) => {
            const docRef = doc(db, "users", args.uid);
            const docSnap = await getDoc(docRef);
            return docSnap.data();
        },
    },
    Mutation : {
        crearUsuario: async (parent, args) => {
            const usersRef = collection(db,"users")
            const usuarioCreado = {
                nombre: args.nombre,
                uid: args.uid,
                apellidos: args.apellidos,
                identificacion: args.identificacion,
                tipoDocumento: args.tipoDocumento,
                celular:args.celular,
                correo: args.correo,
            }
            await setDoc(doc(usersRef,args.uid),usuarioCreado);
            return usuarioCreado;
        },
    }
}