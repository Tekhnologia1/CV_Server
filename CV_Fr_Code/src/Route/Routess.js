import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import '../scss/style.scss'


const Routess = () => {

  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )


  // Containers

  //--------------------------Admin Pages----------------------------------------------//

  const AdminLayout = React.lazy(() => import('../layout/AdminLayout'))


  

  

  //--------------------------Home Pages----------------------------------------------//
  const Home = React.lazy(() => import('../views/pages/home/Home'))
  const HomeContact = React.lazy(() => import('../views/pages/home/HomeContact'))

  const HomeHeader = React.lazy(() => import('../views/pages/home/HomeHeaderwithlogin'))


  const Services = React.lazy(() => import('../views/pages/home/Services'))






  //--------------------------Firm_User Pages----------------------------------------------//

  const FirmUsrDash = React.lazy(() => import('../layout/FirmUserLayout'))



 

  //--------------------------Login and Register Pages----------------------------------------------//
  // const Login = React.lazy(() => import('../views/pages/SignIn/'))
  const LoginForgotPassword = React.lazy(() => import('../views/pages/SignIn/LoginForgotPassword'))
  const New_Password = React.lazy(() => import('../views/pages/SignIn/New_Password'))
  const Signup = React.lazy(() => import('../views/pages/signup/Signup'))
  const Logout = React.lazy(() => import('../views/pages/logout/Logout'))
  const Page404 = React.lazy(() => import('../views/pages/page404/Page404'))
  const Page500 = React.lazy(() => import('../views/pages/page500/Page500'))






  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>


          {/* ----------------Home--------------------------------- */}
          <Route path="/" name="Home Layout" element={<Home />} />

          <Route path="/services" name="Services" element={<Services />} />

          <Route path="/ContactUs" name="Contact" element={<HomeContact />} />
          


          {/* --------Login Pages--------- */}

          {/* <Route exact path="/login" name="Login Page" element={<Login />} /> */}
          <Route exact path="/forgotpassword" name="Forgot Password" element={<LoginForgotPassword />} />
          <Route exact path="/new_password/:contactNoReg" name="New_Password" element={<New_Password />} />
          <Route path="/logout" name="Logout" component={Logout} />


          {/* --------Register Pages--------- */}


          <Route exact path="/signup" name="Register Page" element={<Signup />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />


          {/* ----------------Admin Dashboard--------------------------------- */}

          <Route path="/super_admin_dash" name="AdminDashboard" element={<AdminLayout />} />
          





          {/* -------------Firm_User Pages----------------------------------------------------------------------------------------------------------- */}
          <Route path="/firm_user_dash" name="Firm_User_Dash" element={< FirmUsrDash />} />
          

          



        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routess
