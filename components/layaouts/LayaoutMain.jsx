import { MenuHead,MenuFooter } from "../Ui"


export const LayaoutMain = ({children}) => {
  return (
    <div>
        <MenuHead></MenuHead>
        {children}


        <MenuFooter></MenuFooter>
    </div>
  )
}
