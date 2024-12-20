import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './scss/style.scss'
import 'src/scss/_custom.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Routess from './Route/Routess'
import { UserContextProvider } from './context/UserContextProvider';
import { ChakraProvider } from '@chakra-ui/react';
import AdminRoute from './Route/AdminRoute';




class App extends Component {
  render() {
    return (
      <UserContextProvider>
        <ChakraProvider>
          <AdminRoute />
          <Routess />
        </ChakraProvider>
      </UserContextProvider>
    )
  }
}

export default App
