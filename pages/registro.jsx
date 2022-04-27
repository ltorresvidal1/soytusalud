
import ClientOnly from "../components/ClientOnly";
import RegistroUsuarios from "../components/RegistroUsuarios";

const Registro = () => {

  return (
    <>
		<ClientOnly>
			<RegistroUsuarios></RegistroUsuarios>
		</ClientOnly>
    </>
  )
}


export default Registro