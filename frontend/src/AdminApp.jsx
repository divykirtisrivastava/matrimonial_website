import React from 'react'
import Navbar from './components/Admin/Navbar'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider'

export default function AdminApp() {
  return (
    <UserContextProvider>
      <Navbar/>
      <Outlet/>
    </UserContextProvider>
  )
}
