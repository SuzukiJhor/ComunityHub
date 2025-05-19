import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/navigation/sidebar'

function RootLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet/>
    </div>
  )
}

export default RootLayout