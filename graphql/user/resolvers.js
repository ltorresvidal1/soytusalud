import { db } from "../../firebase/initConfig";
import { collection , getDocs , getDoc , setDoc , doc , updateDoc, where, query } from "firebase/firestore"; 


export const resolversUsuario = {

    Query: {
        UsuariosTabla: async (parent, args) => { 
            const querySnapshot  = await getDocs(collection(db, "users"));
            let usuarios =[]
            querySnapshot.forEach((doc) => {
                usuarios.push(doc.data());
            });
            return usuarios;
        },
        UsuariosTablaTuHistoria: async (parent, args) => { 
            const q  = await query(collection(db, "users"),where("formularioTuHistoria", "==", true));
            const querySnapshot = await getDocs(q);
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
                formularioTuHistoria:false,
                comunidad:''    
            }
            await setDoc(doc(usersRef,args.uid),usuarioCreado);
            return usuarioCreado;
        },
        tuHistoria: async(parent, args) => {
            const usersRef = collection(db,"users")
            let dataUserUpdate = {
                genero: args.genero,
                fechaNacimiento: args.fechaNacimiento,
                direccion: args.direccion,
                foto: args.foto,
                sisben: args.sisben,
                historiaClinica: args.historiaClinica,
                discapacitado: args.discapacitado,
                victimaViolencia:args.victimaViolencia,
                identidadGenero:args.identidadGenero,
                orientacionSexual:args.orientacionSexual,
                grupoPoblacional: args.grupoPoblacional,
                EPS:args.EPS,
                tuHistoria:args.tuHistoria,
                serviciosSolicitado: args.serviciosSolicitado,
                autorizacionFoto:args.autorizacionFoto,
                recopilacionDatos:args.recopilacionDatos,
                comunidad: ''
            }
            await updateDoc(doc(usersRef,args.uid),dataUserUpdate);
            const docRef = doc(db, "users", args.uid);
            const docSnap = await getDoc(docRef);
            return docSnap.data();
        }
    }
}