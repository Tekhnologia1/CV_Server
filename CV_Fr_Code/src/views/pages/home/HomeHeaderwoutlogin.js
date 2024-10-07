import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormCheck,
    CFormInput,
    CFormSelect,
    CFormTextarea,
    CHeader,
    CHeaderBrand,
    CHeaderNav,
    CImage,
    CInputGroup,
    CInputGroupText,
    CNavItem,
    CNavLink,
    CNavbar,
    CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibChef, cilAlignRight, cilLockLocked, cilUser, cilVerticalAlignTop } from '@coreui/icons'
import { NavLink } from 'react-router-dom'
import image from 'src/assets/images/image.jpg'
import logo from 'src/assets/brand/qpelogo.png'
import qpelogo from 'src/assets/brand/qpelogo.png'



const HomeHeaderwoutlogin = () => {
    const sitelogo = {}
    return (
        <div>
            <CHeader position="sticky" >
                <CContainer fluid>
                    <CHeaderNav className="d-flex flex-grow-1 me-auto">
                        {/* <CImage src={qpelogo} height={40} width={35} /> */}
                        <CHeaderBrand className="d-none d-md-flex me-auto">
                            <CIcon className="sidebar-brand-full" icon={cibChef} height={35} />

                            <strong style={sitelogo}>QPE</strong>
                        </CHeaderBrand>
                        <CNavLink className='d-grid gap-2 d-md-flex justify-content-md-end'>
                            <CNavItem className='mt-1'>
                                <CNavLink to="/home" component={NavLink}>
                                    Home
                                </CNavLink>
                            </CNavItem>
                            <CNavItem className='mt-1'>
                                <CNavLink href="/Products">Products</CNavLink>
                            </CNavItem>
                            <CNavItem className='mt-1'>
                                <CNavLink href="/SpecialFeatures">Special features</CNavLink>
                            </CNavItem>
                            <CNavItem className='mt-1'>
                                <CNavLink href="/Aboutus">About us</CNavLink>
                            </CNavItem>
                            <CNavItem className='mt-1'>
                                <CNavLink href="/ContactUs">Contact us</CNavLink>
                            </CNavItem>
                        </CNavLink>

                    </CHeaderNav>
                </CContainer>
            </CHeader>
            <CCardBody>

            </CCardBody>

        </div>
    )
}

export default HomeHeaderwoutlogin
