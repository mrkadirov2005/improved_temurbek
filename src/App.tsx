import './App.css'
import HeaderS from './components/header/header'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Main from './pages/Main'
import CourseComponent from './pages/Courses/page'
import Footer from './components/footer/footer'
import ContactForm from './components/contact/contact'
import TemurbekAI from './pages/temurbek_ai/temurbek_ai'

function App() {

  return (
    <main className='flex  flex-col '>
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
