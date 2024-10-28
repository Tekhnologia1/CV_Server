import { Navigate } from "react-router-dom"
import { Auth } from "src/auth/AuthUser"

export const HeadAdminPrivateRoute = ({children}) => {
    
   return (Auth.getUserRole() === 'HeadAdmin') ? children : <Navigate to="/login" />
}