import './App.css'
import HeaderS from './components/header/header'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Main from './pages/Main'
import CourseComponent from './pages/Courses/page'
import Footer from './components/footer/footer'

function App() {

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
