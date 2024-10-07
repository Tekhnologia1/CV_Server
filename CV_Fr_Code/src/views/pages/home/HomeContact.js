// import React, { useState } from 'react'
// import HomeHeader from './HomeHeader'
// import { CAlert, CButton, CCol, CForm, CFormInput, CFormLabel, CFormSelect } from '@coreui/react'

// const HomeContact = () => {
//   const [validated, setValidated] = useState(false)
//   const handleSubmit = (event) => {
//     const form = event.currentTarget
//     if (form.checkValidity() === false) {
//       event.preventDefault()
//       event.stopPropagation()
//     }
//     setValidated(true)
//   }
//   return (
//     <div> <HomeHeader />
//       <div>
//         <CForm 
//         className="col g-3 needs-validation"
//         noValidate
//         validated={validated}
//         onSubmit={handleSubmit}
//         > 
//           <p>Fill the following to contact us.</p>
//           <CCol>
//             <CFormSelect
//               aria-describedby="validationCustom04Feedback"
//               feedbackInvalid="Please select a valid state."
//               id="validationCustom04"
//               label="Select your user type"
//               required
//             >
//               <option selected="" disabled="" value="">
//                 Select...
//               </option>
//               <option>Student</option>
//               <option>Examiner</option>
//               <option>Scanner</option>
//             </CFormSelect><br />
//           </CCol><br />
//           <CCol>
//             <CFormInput type='id' label='User ID' />
//           </CCol><br />
//           <CCol>
//             <CFormInput type='Schoolname' label='School Name' />
//           </CCol><br />
//           <CCol>
//             <CFormInput id='inputaddress' label='Address' />
//           </CCol><br />
//           <CCol>
//             <CFormInput type='text' label='Your query' />
//           </CCol><br />
//           <CCol>
//             <CFormInput id='inputCity' label='City' />
//           </CCol><br />
//           <CCol>
//             <CFormInput id='inputState' label='State' />
//           </CCol><br />

//           <CAlert
//             color="white"
//             dismissible
//             onClick={() => {
//               alert("Thank You, we'll contact you.")
//             }}>
//             <CButton href='/ContactUs'>Submit</CButton>
//           </CAlert>

//         </CForm>
//       </div>
//     </div >
//   )
// }

// export default HomeContact


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
  CFormTextarea,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CInputGroup,
  CInputGroupText,
  CNavItem,
  CNavLink,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibChef, cilLockLocked, cilUser } from '@coreui/icons'
import HomeHeader from './HomeHeaderwithlogin'
import image from 'src/assets/images/image2.jpg'

const HomeContact = () => {
  const sitelogo = {}
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <div>
      <HomeHeader />

      <div className="bg-light min-vh-100 d-flex flex-row align-items-center to-right" style={{ backgroundImage:`url(${image})`, backgroundSize:'cover'}} >

        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm className="row g-3 needs-validation"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}>
                    <h1>Contact Us</h1>
                    <p className="text-medium-emphasis">Fill the following to contact us. </p>
                    <CFormLabel>User Type
                      <CCol className="position-relative">
                        <CFormSelect
                          aria-describedby="validationTooltip04Feedback"
                          feedbackInvalid="Please select a valid user."
                          id="validationTooltip04"
                          // label="User type"
                          required
                          tooltipFeedback
                        >
                          <option selected="" disabled="" value="">
                            Choose...
                          </option>
                          <option>Student</option>
                          <option>Examiner</option>
                          <option>Scanner</option>
                        </CFormSelect>
                      </CCol>
                    </CFormLabel>

                    <CFormLabel>User ID
                      <CInputGroup className="position-relative">
                        <CFormInput placeholder="User ID" type="text"
                          aria-describedby="inputGroupPrependFeedback"
                          feedbackInvalid="Please choose a username."
                          id="validationTooltipUsername"
                          required
                          tooltipFeedback />
                      </CInputGroup>
                    </CFormLabel>

                    <CFormLabel>School Name
                      <CInputGroup className="position-relative">
                        <CFormInput placeholder="School Name" type="text"
                          aria-describedby="inputGroupPrependFeedback"
                          feedbackInvalid="Please fill valid school name."
                          id="validationTooltipUsername"
                          required
                          tooltipFeedback />
                      </CInputGroup>
                    </CFormLabel>

                    {/* <CFormLabel>Address
                      <CInputGroup className="position-relative">
                        <CFormInput placeholder="" type="text"
                          aria-describedby="inputGroupPrependFeedback"
                          feedbackInvalid="Please fill your address."
                          id="validationTooltipUsername"
                          required
                          tooltipFeedback />
                      </CInputGroup>
                    </CFormLabel> */}

                    <CFormLabel >
                      Your Query
                      <CFormTextarea placeholder="" type="text"
                          aria-describedby="inputGroupPrependFeedback"
                          feedbackInvalid=""
                          id="validationTooltipUsername"
                          required
                          tooltipFeedback
                      />
                    </CFormLabel>


                    <CRow>
                      <CCol xs={6}>
                        
                          <CButton color="primary" className="px-4" type='submit'>
                            Submit
                          </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>

      </div>
    </div>
  )
}

export default HomeContact
