import { MenuHead,MenuFooter } from "../Ui"


export const LayoutMain = ({children}) => {
  return (
    <div>
        <MenuHead></MenuHead>
        {children}


        <MenuFooter></MenuFooter>
    </div>
  )
}
