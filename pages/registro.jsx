
import ClientOnly from "../components/ClientOnly";
import RegistroUsuarios from "../components/RegistroUsuarios";

const Registro = () => {
  const [casa,setCASAa]=usestate()
  return (
    <>
		<ClientOnly>
			<RegistroUsuarios></RegistroUsuarios>
		</ClientOnly>
    </>
  )
}


export default Registro