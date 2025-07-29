import './App.css'
import HeaderS from './components/header/header'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Main from './pages/Main'
import CourseComponent from './pages/Courses/page'
import Footer from './components/footer/footer'
import ContactForm from './components/contact/contact'
import TemurbekAI from './pages/temurbek_ai/temurbek_ai'
import NewCourseModal from './modals/newCourse'
import { useState } from 'react'

function App() {
  const [modal, setIsModal]=useState<boolean>(true)

  return (
    <main className='flex  flex-col '>
     {modal? <div className='modals w-[100vw] h-[100vh] bg-transparent min-w-[200px] fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 '>
      
      <NewCourseModal link='/courses' onClose={setIsModal} isOpen={modal} courseTitle='Yangi mavsum, yangi kurslar 📚' description='TEMURBEK SCHOOL da yangi kurslarga start berildi. Hoziroq joyingizni band qiling' ></NewCourseModal>
        </div>:""}
    <BrowserRouter>
    <HeaderS/>
    <Routes
    >
      <Route path="/" element={<Main/>}></Route>
      <Route path="/courses" element={<CourseComponent/>}></Route>
      <Route path="/contact" element={<ContactForm/>}></Route>
      <Route path="/temurbek_ai" element={<TemurbekAI/>}></Route>


    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </main>
  )
}

export default App
