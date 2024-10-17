import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBarChart,
  cilBell,
  cilCalculator,
  cilChart,
  cilChartLine,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeech,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import Dashboard_icon from 'src/assets/icons/sidebar_icons/Dashboard.png'
import Firms_icon from 'src/assets/icons/sidebar_icons/Firms.png'
import Firm_acc_icon from 'src/assets/icons/sidebar_icons/Firm_acc.png'
import Users_icon from 'src/assets/icons/sidebar_icons/Users.png'
import payments_icon from 'src/assets/icons/sidebar_icons/payments.png'
import receipts_icon from 'src/assets/icons/sidebar_icons/receipts.png'
import transfers_icon from 'src/assets/icons/sidebar_icons/transfers.png'
import reports_icon from 'src/assets/icons/sidebar_icons/reports.png'
import DayBook_icon from 'src/assets/icons/sidebar_icons/DayBook.png'

import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import routes from '../../Route/Routess'

const _adminnav = [
  
  {
    component: CNavItem,
    name: 'Admin Dashboard',
    to: '/super_admin_dash',
    icon: <img src={Dashboard_icon} width={29} height={24} className='mx-2' />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Section',
  },
  {
    component: CNavGroup,
    name: 'Firms',
    icon: <img src={Firms_icon} width={23} height={23} className='mx-3' />,
    items: [
      {
        component: CNavItem,
        name: 'All Firms',
        to: '/all_firms',
      },
      {
        component: CNavItem,
        name: 'Create Firm',
        to: '/create_firms',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Firm Account',
    icon: <img src={Firm_acc_icon} width={23} height={23} className='mx-3' />,
    items: [
      {
        component: CNavItem,
        name: 'All Firms Accounts',
        to: '/ledgers',
      },
      {
        component: CNavItem,
        name: 'Create Firm Account',
        to: '/create_ledger',
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Firm Accounts',
  //   to: '/ledgers',
  //   icon: <img src={Firm_acc_icon} width={23} height={23} className='mx-3' />,
  // },
  {
    component: CNavGroup,
    name: 'Users',
    icon: <img src={Users_icon} width={23} height={23} className='mx-3' />,
    items: [
      {
        component: CNavItem,
        name: 'All Users',
        to: '/all_users',
      },
      {
        component: CNavItem,
        name: 'Add Users',
        to: '/add_users',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Payment',
    icon: <img src={payments_icon} width={23} height={23} className='mx-3' />,
    items: [
      {
        component: CNavItem,
        name: 'Make Payment',
        to: '/make_payment',
      },
      {
        component: CNavItem,
        name: 'All Payments',
        to: '/all_payments',
      },
      
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Payments',
  //   to: '/make_payment',
  //   icon: <img src={payments_icon} width={23} height={23} className='mx-3' />,
  // },

  {
    component: CNavGroup,
    name: 'Receipt',
    icon: <img src={receipts_icon} width={23} height={23} className='mx-3' />,
    items: [
      {
        component: CNavItem,
        name: 'Create Receipt',
        to: '/create_receipt',
      },
      {
        component: CNavItem,
        name: 'All Receipts',
        to: '/all_receipts',
      },
      
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Receipts',
  //   to: '/create_receipt',
  //   icon: <img src={receipts_icon} width={23} height={23} className='mx-3' />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Make Transaction',
  //   to: '/make_transfer',
  //   icon: <img src={transfers_icon} width={23} height={23} className='mx-3' />,
  // },
  {
    component: CNavGroup,
    name: 'Reports',
    icon: <img src={reports_icon} width={23} height={23} className='mx-3' />,
    items: [
      {
        component: CNavItem,
        name: 'Firms Report',
        to: '/firm_transactions',
      },

      {
        component: CNavItem,
        name: 'Ledger Report',
        to: '/ledger_report',
      },

      {
        component: CNavItem,
        name: 'Cash Report',
        to: '/cash_report',
      },
      {
        component: CNavItem,
        name: 'Day Book',
        to: '/day_book',
      },

      {
        component: CNavItem,
        name: 'Complete Report',
        to: '/complete_report',
      },

      
      
      // {
      //   component: CNavItem,
      //   name: 'User Transactions',
      //   to: '/user_transactions',
      // },
    ],
  },

  // {
  //   component: CNavItem,
  //   name: 'Day Book',
  //   to: '/day_book',
  //   icon: <img src={DayBook_icon} width={23} height={23} className='mx-3' />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Setting',
  //   to: '/adminsetting',
  //   icon: <CIcon icon={cilSpeech} />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Help',
  //   to: '/adminhelp',
  //   icon: <CIcon icon={cilSpeech} />,
  // },


]

export default _adminnav