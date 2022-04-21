
import { MenuHead,MenuFooter } from "../Ui"

export const LayaoutMain = ({children}) => {
  return (
    <div className="template flex">
        <MenuHead></MenuHead>
        {children}
        <MenuFooter></MenuFooter>
    </div>
  )
}
