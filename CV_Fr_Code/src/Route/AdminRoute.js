// import { Navigate } from "react-router-dom"
// import { Auth } from "src/auth/AuthUser"

import React, { Suspense, useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserContext } from 'src/context/UserContextProvider';

// export const AdminPrivateRoute = ({children}) => {
    
//    return (Auth.getUserRole() === 'SchoolAdmin') ? children : <Navigate to="/login" />
// }


const AdminRoute = () => {
   const { user } = useContext(UserContext);
   // const navigate = useNavigate();
   const [role, setRole] = useState('');
 
   useEffect(() => {
     setRole(user.role);
     
   }, [user])
 
  //  console.log(role);
   const loading = (
     <div className="pt-3 text-center">
       <div className="sk-spinner sk-spinner-pulse"></div>
     </div>
   )
 
 
   // Containers
 
   //--------------------------Admin Pages----------------------------------------------//
 
    const AdminPanel = React.lazy(() => import('../views/AdminPanel/AdminPanel'))
    const AdminDashboard = React.lazy(() => import('../components/adminPanelComponents/Dashboard'))
    const AdminUserlist = React.lazy(() => import('../components/adminPanelComponents/Users/UserList'))
    const AdminUserForm = React.lazy(() => import('../components/adminPanelComponents/Users/UserForm'))
    

   return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
  
  
            <Route path="/adminpanel" name="AdminPanel" element={<AdminPanel />} />
            <Route path="/adminDashboard" name="Admin Dashboard" element={<AdminDashboard />} />
            <Route path="/adminUsersList" name="Admin UsersList" element={<AdminUserlist />} />
            <Route path="/adminUserForm" name="Admin UserForm" element={<AdminUserForm />} />


            </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AdminRoute;