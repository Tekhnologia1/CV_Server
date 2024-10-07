import { Navigate } from "react-router-dom"
import { Auth } from "src/auth/AuthUser"

export const AdminPrivateRoute = ({children}) => {
    
   return (Auth.getUserRole() === 'SchoolAdmin') ? children : <Navigate to="/login" />
}