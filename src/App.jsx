
import './App.css'
import "./components/Intro/Intro"
import { useState,useEffect } from 'react'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Background from './components/Background/Background'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'
import ScrollIndicator from './hooks/ScrollIndiicator'
import Certificates from './components/Certificates/Certificates'

function App() {
  const [showIntro,setShowIntro]=useState(true)
  const [exitIntro,setExitIntro]=useState(false)
  // const [showProfile,setShowProfile]=useState(false)

  useEffect(()=>{
    const exitTimer=setTimeout(()=>{
      setExitIntro(true)


    },3000)
    const timer=setTimeout(()=>{
      setShowIntro(false)
    },2000)
    return () =>{clearTimeout(timer)
      clearTimeout(exitTimer)
    };
    
  },[])
  
  return (
    <>
      <Background/>
      {/* <ScrollIndicator/> */}
      {/* {!showProfile && <Intro onFinish={() => setShowProfile(true)} />}
      {showProfile && <Profile />} */}
      {showIntro &&  <Intro  exit={exitIntro}/>}
      {!showIntro && (
        <>
         <Navbar/>
         <Profile/>
         <About/>
         <Education/>
        
         <Skills/>
         <Projects/>
         <Contact/>
         <Footer/>
         
      
      
        </>
      )}

     
    </>
  )
}

export default App
