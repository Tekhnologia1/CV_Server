import React, { useState } from 'react'
import { CButton, CCol, CForm, CFormInput, CInputGroup, CRow } from '@coreui/react'
import { Link, useParams } from 'react-router-dom';


import { APIRegister } from 'src/api/APIRegister';

const New_Password = () => {

  const { contactNoReg } = useParams();
  
  
  const [passwordReg, setPasswordReg] = useState('');
  const [confpasswordReg, setConfPasswordReg] = useState('');



  const [passwordError, setPasswordError] = useState('');
  const [confpasswordError, setConfPasswordError] = useState('');


  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const validatePassword = () => {
    return passwordReg.length >= 8;
  };


  const new_pass = () => {


    if (!validatePassword()) {
      setPasswordError('Please use atleast 8-digit passwordddd.');
      return;
    }

    APIRegister().RESET_PASS({
      // Name: usernameReg,
      mobileNo: contactNoReg,
      newPassword: passwordReg,
    }).then((response) => {
      console.log(response);
      setSuccessMessage('New Password saved successfully!');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }).catch((error) => {
      console.error("Something went wrong:", error);
      setErrorMessage('Something went wrong. Please try again later.');
    });

  };




  const handlePasswordChange = (e) => {

    const password = e.target.value;
    setPasswordReg(password);
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else {
      setPasswordError('');
    }
  };


  const handleConfPasswordChange = (e) => {

    const confpassword = e.target.value;
    setConfPasswordReg(confpassword);
    if (confpassword === passwordReg) {
      setConfPasswordError('');
    } else {
      setConfPasswordError("Password doesn't match");
    }
  };


  return (
    <div>
      <CRow>
        <CCol className='login_left col-md-4'>
          <CButton className='login_left_login_button'>
            Login
          </CButton>
          <br />
          <Link to={'/signup'}>
            <CButton className='login_left_signup_button'>
              Sign Up
            </CButton>
          </Link>
        </CCol>
        <CCol className='login_right col-md-8'>
          <CForm>
            <h1 className='text-center defaultcolor' >New Password </h1>


            {/* ------------------------ Password---------------------------- */}
            Password
            <CInputGroup className="mb-2">
              <CFormInput
                value={passwordReg}
                onChange={handlePasswordChange}
                style={{ borderRadius: '25px' }}
                type="text"

              />
            </CInputGroup>
            {passwordError && <div className="text-danger mb-2">{passwordError}</div>}

            {/* ------------------------Confirm Password---------------------------- */}
            Confirm Paassword
            <CInputGroup className="mb-2">
              <CFormInput
                value={confpasswordReg}
                onChange={handleConfPasswordChange}
                style={{ borderRadius: '25px' }}
                type="text"

              />
            </CInputGroup>
            {confpasswordError && <div className="text-danger mb-2">{confpasswordError}</div>}

            <CRow className='mt-5'>
              <CCol xs={12} className='text-center'>
                <CButton onClick={() => { new_pass(); }} className="login_submit_button px-4" type='button' shape="rounded-pill">
                  Save New Password
                </CButton>
                {errorMessage && <div className="text-danger">{errorMessage}</div>}
                {successMessage && <div className="text-success">{successMessage}</div>}
              </CCol>
            </CRow>
          </CForm>
        </CCol>
      </CRow>


    </div>
  )
}

export default New_Password