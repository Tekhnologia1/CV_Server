import React, { useState } from 'react'
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
    CNav,
    CNavItem,
    CNavLink,
    CNavbar,
    CRow,
    CTabContent,
    CTabPane,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibChef, cilAlignRight, cilLockLocked, cilUser, cilVerticalAlignTop } from '@coreui/icons'
import { NavLink } from 'react-router-dom'
import image from 'src/assets/images/image.jpg'
// import logo from 'src/assets/brand/qpelogo.png'
// import qpelogo from 'src/assets/brand/qpelogo.png'



const HomeHeaderwithlogin = () => {
    const sitelogo = {}
    const [activeKey, setActiveKey] = useState(1)
    return (
        <CNav variant="underline-border">
            <CNavItem>
                <CNavLink href="#">
                    Home
                </CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink href="#">
                    Special Features
                </CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink href="#">
                    Products
                </CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink href="#">
                    About Us
                </CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink href="#">
                    Contact Us
                </CNavLink>
            </CNavItem>
        </CNav>

    )
}

export default HomeHeaderwithlogin
