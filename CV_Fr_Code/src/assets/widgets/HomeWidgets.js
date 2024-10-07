import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibFacebook, cibLinkedin, cibTwitter, cilAirplay, cilCalendar, cilCenterFocus, cilMic, cilSpreadsheet, cilTask, cilWarning } from '@coreui/icons'
import { CChart } from '@coreui/react-chartjs'

const HomeWidgets = ({ withCharts }) => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  return (
    <CRow>
      <CCol sm={3} lg={2}>
        <CWidgetStatsD
          className="mb-4"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cilAirplay} height={52} className="my-4 text-white" />}
          values={[
            { value: 'Manage Exam' },
          ]}
          style={{
            '--cui-card-cap-bg': '#CCD90A',
          }}
        />
      </CCol>
      <CCol sm={3} lg={2}>
        <CWidgetStatsD
          className="mb-4"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cilTask} height={52} className="my-4 text-white" />}
          values={[
            { value: 'Check Paper' },
          ]}
          style={{
            '--cui-card-cap-bg': '#57DC15',
          }}
        />
      </CCol>

      <CCol sm={3} lg={2}>
        <CWidgetStatsD
          className="mb-4"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cilCenterFocus} height={52} className="my-4 text-white" />}
          values={[
            { value: 'Video/Image Proctoring' },
          ]}
          style={{
            '--cui-card-cap-bg': '#00aced',
          }}
        />
      </CCol>

      <CCol sm={3} lg={2}>
        <CWidgetStatsD
          className="mb-4"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cilMic} height={52} className="my-4 text-white" />}
          values={[
            {  value: 'Audio/Voice Proctoring' },
          ]}
          style={{
            '--cui-card-cap-bg': '#4875b4',
          }}
        />
      </CCol>

      <CCol sm={3} lg={2}>
        <CWidgetStatsD
          className="mb-4"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cilWarning} height={52} className="my-4 text-white" />}
          values={[
            {  value: 'Cheating Free Online Exam' },
          ]}
          style={{
            '--cui-card-cap-bg': '#FF3B41',
          }}
        />
      </CCol>
      <CCol sm={3} lg={2}>
        <CWidgetStatsD
          className="mb-4"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cilSpreadsheet} height={52} className="my-4 text-white" />}
          values={[
            { value: 'Display Result' },
          ]}
          style={{
            '--cui-card-cap-bg': '#121212',
          }}
        />
      </CCol>
    </CRow>
  )
}

HomeWidgets.propTypes = {
  withCharts: PropTypes.bool,
}

export default HomeWidgets
