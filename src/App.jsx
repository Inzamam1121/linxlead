import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import About from './Pages/About'
import Pricing from './Pages/Pricing'
import Partnership from './Pages/Partnership'
import SmartSequence from './Pages/Solution/SmartSequence'
import LinkdInSolution from './Pages/Solution/LinkdInSolution'
import EmailVerification from './Pages/Solution/EmailVerification'
import ImageGifPersonalization from './Pages/Solution/ImageGifPersonalization'
import ScrollToTop from './Components/ScrolltToTop'

function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/partnership' element={<Partnership/>}/>
          <Route path='/solutions/smartsequence' element={<SmartSequence/>}/>
          <Route path='/solutions/linkedin-solution' element={<LinkdInSolution/>}/>
          <Route path='/solutions/email-verification' element={<EmailVerification/>}/>
          <Route path='/solutions/image-gif-personalization' element={<ImageGifPersonalization/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
