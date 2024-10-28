import React, { Component, Suspense, useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import '../scss/style.scss'
import { UserContext } from 'src/context/UserContextProvider';


const Routess = () => {
  const { user } = useContext(UserContext);
  // const navigate = useNavigate();
  const [role, setRole] = useState('');

  useEffect(() => {
      setRole(user.role);
  }, [user])

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
  // const HomeContact = React.lazy(() => import('../views/pages/home/HomeContact'))

  // const HomeHeader = React.lazy(() => import('../views/pages/home/HomeHeaderwithlogin'))


  const Services = React.lazy(() => import('../views/pages/home/Services'))

  //----------------Student ---------------------------------//
  const Student_Home = React.lazy(() => import('../views/Student/Student_Home'))
  // const HomeContact = React.lazy(() => import('../views/pages/home/HomeContact'))


  const Student_Dashboard = React.lazy(() => import('../views/Student/Student_Dashboard'))
  const Testing_Tools = React.lazy(() => import('../views/Student/Testing_Tools'))
  const Counselling = React.lazy(() => import('../views/Student/Counselling'))

  const My_Profile = React.lazy(() => import('../views/pages/home/My_Profile'))

  // //----------------Parent ---------------------------------//
  // const Parent_Home = React.lazy(() => import('../views/Parent/Parent_Home'))
  // // const HomeContact = React.lazy(() => import('../views/pages/home/HomeContact'))

  // const Student_Services = React.lazy(() => import('../views/Student/Student_Services'))

  const Parent_Dashboard = React.lazy(() => import('../views/Parent/Parent_Dashboard'))




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


          {/* ----------------Student--------------------------------- */}

          <Route path="/student_home" name="Student_Home" element={<Student_Home />} />


          <Route path={role === null ? "/" : "/dashboard"} name="Student_Dashboard" element={<Student_Dashboard />} />
          <Route path="/testing_tools" name="Testing_Tools" element={<Testing_Tools />} />
          <Route path={role === null ? "/" : "/counselling"} name="Counselling" element={<Counselling />} />



          <Route path={role === null ? "/" : "/my_profile"} name="My_Profile" element={<My_Profile />} />

          {/* ----------------Parent--------------------------------- */}

          {/* <Route path="/parent_home" name="Parent_Home" element={<Parent_Home />} /> */}

          {/* <Route path="/parent_services" name="Parent_Services" element={<Parent_Services />} /> */}

          <Route path="/parent_dashboard" name="Parent_Dashboard" element={<Parent_Dashboard />} /> 

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
