import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderS from './components/header/header'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Main from './pages/Main'
import CourseComponent from './pages/Courses/page'
import Footer from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex  flex-col '>
    <BrowserRouter>
    <HeaderS/>
    <Routes
    >
      <Route path="/" element={<Main/>}></Route>
      <Route path="/courses" element={<CourseComponent/>}></Route>


    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </main>
  )
}

export default App
