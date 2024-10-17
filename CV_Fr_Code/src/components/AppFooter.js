import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="" target="_blank" rel="noopener noreferrer">
          QPE
        </a>
        <span className="ms-1">&copy; 2023</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://www.tekhnologiaindia.com/" target="_blank" rel="noopener noreferrer">
          Tekhnologia Innovations India Pvt Ltd
          {/* CoreUI React Admin &amp; Dashboard Template */}
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
