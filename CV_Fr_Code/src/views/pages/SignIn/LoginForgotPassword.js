import React, { useState } from 'react'
import { Form, Link, NavLink } from 'react-router-dom'
import {
    CAlert,
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CHeader,
    CHeaderBrand,
    CHeaderNav,
    CInputGroup,
    CInputGroupText,
    CModal,
    CModalBody,
    CNavItem,
    CNavLink,
    CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibChef, cilAt, cilLockLocked, cilUser } from '@coreui/icons'
import { logo } from 'src/assets/brand/logo'
import Colors from '@coreui/react'
import image from 'src/assets/images/image1.jpg'

const LoginForgotPassword = () => {

    const [otpblockvisible, setOTPBlockVisible] = useState(false);



    const [contactNoReg, setContactNoReg] = useState('');
    // const [otp, setOTP] = useState('');

    const [numberError, setNumberError] = useState('');


    //--------------------------------------------------------------

    const [otp, setOTP] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleOTPChange = (e) => {
        const { value } = e.target;
        if (/^\d*$/.test(value) && value.length <= 4) {
            setOTP(value);
            setErrorMessage('');
        }
    };

    const handleSubmit = () => {
        if (otp.length === 4) {
            // Validate OTP here, e.g., by sending to server for verification
            console.log('Entered OTP:', otp);
        } else {
            setErrorMessage('Please enter a valid 4-digit OTP.');
        }
    };

    //--------------------------------------------------------------
    // const [successMessage, setSuccessMessage] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');


    const handleNumberChange = (e) => {
        // Allow only 10 digits
        const regex = /^\d{0,10}$/;
        if (regex.test(e.target.value) || e.target.value === '') {
            setContactNoReg(e.target.value);
            setNumberError('');
        } else {
            setNumberError('Contact no must be 10 digit number');
        }
    };

    const validateNumber = () => {
        const regex = /^\d{10}$/;
        return regex.test(contactNoReg);
    };

    const forgotpassword = () => {

        if (!validateNumber()) {
            setNumberError('Please enter a valid 10-digit phone number.');
            return;
        } else {
            setOTPBlockVisible(!otpblockvisible);
        }
    }

    

    return (
        <div>
            <CRow className="">
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
                        <h1 className='text-center defaultcolor'>Forgot password</h1>


                        {/* ------------------------Contact No---------------------------- */}
                        Contact Number
                        <CInputGroup className="mb-2">
                            <CFormInput
                                value={contactNoReg}
                                onChange={handleNumberChange}
                                style={{ borderRadius: '25px' }}
                                type="tel"

                            />
                        </CInputGroup>
                        {numberError && <div className="text-danger mb-2">{numberError}</div>}


                        <CRow className='mt-5'>
                            <CCol xs={12} className='text-center'>
                                <CButton onClick={() => { forgotpassword(); }} className="login_submit_button px-4" type='button' shape="rounded-pill">
                                    Send OTP
                                </CButton>
                                {/* {errorMessage && <div className="text-danger">{errorMessage}</div>}
                                {successMessage && <div className="text-success">{successMessage}</div>} */}
                            </CCol>
                        </CRow>
                    </CForm>

                </CCol>
            </CRow>



            <CModal
                alignment="center"
                visible={otpblockvisible}
                onClose={() => setOTPBlockVisible(false)}
                aria-labelledby="VerticallyCenteredExample">
                <CModalBody>
                    <CForm>
                        <CRow className="justify-content-center">
                            <CCol sm="4">
                                <CFormInput
                                    type="text"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={handleOTPChange}
                                />
                                {errorMessage && <div className="text-danger">{errorMessage}</div>}
                            </CCol>
                        </CRow>
                        <CRow className="justify-content-center mt-3">
                            <CCol sm="4">
                                <Link to={`/new_password/${contactNoReg}`}>
                                    <CButton color="primary" onClick={() => { handleSubmit(); setOTPBlockVisible(false); }}>Submit OTP</CButton>
                                </Link>
                            </CCol>
                        </CRow>
                    </CForm>

                </CModalBody>
            </CModal>









            {/* <CHeader position="sticky" >
                <CContainer fluid>
                    <CHeaderNav className="d-none d-md-flex me-auto">
                        <CHeaderBrand className="d-none d-md-flex me-auto">
                            <CIcon className="sidebar-brand-full" icon={cibChef} height={35} />

                            <strong style={sitelogo}>Ques.Digi</strong>
                        </CHeaderBrand>
                        <CNavItem>
                            <CNavLink to="/home" component={NavLink}>
                                Home
                            </CNavLink>
                        </CNavItem>
                    </CHeaderNav>
                </CContainer>
            </CHeader>
            <div className="bg-light min-vh-100 d-flex flex-row align-items-center" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
                <CContainer>
                    <CRow className="justify-content-center">
                        <CCol md={8}>
                            <CCardGroup>
                                <CCard className="p-4">
                                    <CCardBody>
                                        <CForm className="row g-3 needs-validation"
                                            noValidate
                                            validated={validated}
                                            onSubmit={handleSubmit}>
                                            <h1>Forgot Password</h1>
                                            <p className="text-medium-emphasis">Enter your registered email id </p>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupText>
                                                    <CIcon icon={cilAt} />
                                                </CInputGroupText>
                                                <CFormInput placeholder="Email" type="email"
                                                    aria-describedby="inputGroupPrependFeedback"
                                                    feedbackInvalid="Please enter your email id "
                                                    id="validationTooltipUsername"
                                                    required
                                                    tooltipFeedback />
                                            </CInputGroup>
                                            <CRow>
                                                <CCol xs={6}><br />
                                                    <CAlert style={{ backgroundColor: "white", border: "none" }}
                                                        color="warning"
                                                        onButton={() => {
                                                            alert('👋 Well, hi there! Thanks for dismissing me.')
                                                        }}
                                                        >



                                                        <CButton 
                                                            
                                                            color="primary" className="px-4" type='submit'
                                                        >
                                                            Reset Password
                                                        </CButton>

                                                    </CAlert>
                                                </CCol>
                                            </CRow>
                                        </CForm>
                                    </CCardBody>
                                </CCard>
                            </CCardGroup>
                        </CCol>
                    </CRow>
                </CContainer>
            </div> */}
        </div>
    )
}

export default LoginForgotPassword
