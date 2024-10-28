import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CDropdown,
  CLink,
  CRow,
  CWidgetStatsA,
  CWidgetStatsB,
  CWidgetStatsC,
  CWidgetStatsE,
  CWidgetStatsF,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cilArrowRight,
  cilBasket,
  cilBell,
  cilChartPie,
  cilMoon,
  cilLaptop,
  cilPeople,
  cilSettings,
  cilSpeech,
  cilSpeedometer,
  cilUser,
  cilUserFollow,
} from '@coreui/icons'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import { DocsExample, StudentHeader, StudentSidebar } from 'src/components'

import WidgetsBrand from './WidgetsBrand'
import WidgetsDropdown from './WidgetsDropdown'

const StudentWidgets = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  return (
    <div> <StudentSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <StudentHeader />
        <div className="body flex-grow-1 px-3">

          <CCard className="mb-4">
            <CCardHeader><strong>Choose Subject</strong></CCardHeader>
            <CCardBody>
              <DocsExample href="/components/widgets/#cwidgetstatsa">
                <CRow>
                  <CCol sm={3} lg={3}>
                    {/* <CWidgetStatsA
                className ="mb-4"
                color = "primary"
                type='button'
                value={ */}
                    <CButton

                      href="/"
                      className='btn-lg'
                      color='primary'
                    >
                      English
                    </CButton>
                    {/* //   }
              // /> */}
                  </CCol>
                  <CCol sm={3} lg={3}>
                    {/* <CWidgetStatsA
                className ="mb-4"
                color = "primary"
                type='button'
                value={ */}
                    <CButton
                      href="/"
                      className='btn-lg'
                    >
                      Math
                    </CButton>
                    {/* }
                title=""
              /> */}
                  </CCol>
                  <CCol sm={3} lg={3}>
                    <CButton className='btn-lg'>
                      Marathi
                    </CButton>
                  </CCol>
                </CRow><br />
                <CRow>
                  <CCol sm={3} lg={3}>
                    <CButton className='btn-lg'>
                      History
                    </CButton>
                  </CCol>
                  <CCol sm={3} lg={3}>
                    <CButton className='btn-lg'>
                      Hindi
                    </CButton>
                    {/* <CButton  className='btn-lg'>
               German
              </CButton> */}
                  </CCol>
                  <CCol sm={3} lg={3}>
                    <CButton className='btn-lg'>
                      German
                    </CButton>
                  </CCol>
                </CRow>
              </DocsExample>
              {/* <DocsExample href="/components/widgets/#cwidgetstatsf">
          <CRow>
            <CCol xs={12} sm={6} lg={3}>
              <CWidgetStatsF
                className="mb-3"
                icon={<CIcon width={24} icon={cilSettings} size="xl" />}
                title="income"
                value="$1.999,50"
                color="primary"
                footer={
                  <CLink
                    className="font-weight-bold font-xs text-medium-emphasis"
                    href="https://coreui.io/"
                    rel="noopener norefferer"
                    target="_blank"
                  >
                    View more
                    <CIcon icon={cilArrowRight} className="float-end" width={16} />
                  </CLink>
                }
              />
            </CCol>
            <CCol xs={12} sm={6} lg={3}>
              <CWidgetStatsF
                className="mb-3"
                icon={<CIcon width={24} icon={cilLaptop} size="xl" />}
                title="income"
                value="$1.999,50"
                color="info"
                footer={
                  <CLink
                    className="font-weight-bold font-xs text-medium-emphasis"
                    href="https://coreui.io/"
                    rel="noopener norefferer"
                    target="_blank"
                  >
                    View more
                    <CIcon icon={cilArrowRight} className="float-end" width={16} />
                  </CLink>
                }
              />
            </CCol>
            <CCol xs={12} sm={6} lg={3}>
              <CWidgetStatsF
                className="mb-3"
                icon={<CIcon width={24} icon={cilMoon} size="xl" />}
                title="income"
                value="$1.999,50"
                color="warning"
                footer={
                  <CLink
                    className="font-weight-bold font-xs text-medium-emphasis"
                    href="https://coreui.io/"
                    rel="noopener norefferer"
                    target="_blank"
                  >
                    View more
                    <CIcon icon={cilArrowRight} className="float-end" width={16} />
                  </CLink>
                }
              />
            </CCol>
            <CCol xs={12} sm={6} lg={3}>
              <CWidgetStatsF
                className="mb-3"
                icon={<CIcon width={24} icon={cilBell} size="xl" />}
                title="income"
                value="$1.999,50"
                color="danger"
                footer={
                  <CLink
                    className="font-weight-bold font-xs text-medium-emphasis"
                    href="https://coreui.io/"
                    rel="noopener norefferer"
                    target="_blank"
                  >
                    View more
                    <CIcon icon={cilArrowRight} className="float-end" width={16} />
                  </CLink>
                }
              />
            </CCol>
          </CRow>
        </DocsExample> */}
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  )
}

export default StudentWidgets
