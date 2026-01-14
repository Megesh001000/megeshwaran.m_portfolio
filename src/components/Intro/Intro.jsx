import { useEffect, useState } from "react"
import "./Intro.css"
import useScrollReveal from "../../hooks/useScrollReveal"
function Intro({exit}) {


  // const [openDoors,setOpenDoors]=useState(false)

  // useEffect(()=>{
  //   setTimeout(() => {
  //     setOpenDoors(true) 
  //   }, 2000)

  //   setTimeout(() => {
  //     onFinish();  
  //   }, 3000)

  // }, []);
  return (
    // <div className={`intro-container ${exit,openDoors?"fade-out,open":""}`}>
    <div className={`intro-container ${exit?"fade-out":""}`}>
        {/* <h1 className="intro-name">Dharshan M</h1> */}
        
           <h1 className="intro-name">Megeshwaran M</h1>
           <p className="intro-role">Full Stack Developer</p>
{/*         
        <div className="door left-door"></div>
        <div className="door right-door"></div> */}
       

    </div>
  )
}

export default Intro