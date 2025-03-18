import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <div>
        <Header/>
        <Sidebar/>
      </div>
    </>
  )
}

export default App
