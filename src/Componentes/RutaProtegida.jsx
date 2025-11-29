import { Navigate } from "react-router-dom"
import { UseAuthContext } from "../context/AuthContext"

const RutaProtegida = ({children}) => {
 const {usuario} = UseAuthContext()
 if (!usuario) {
    return <Navigate to="/Login" replace />
 }
 return children
}

export default RutaProtegida