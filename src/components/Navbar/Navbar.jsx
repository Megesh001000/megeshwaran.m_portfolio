import {useState} from 'react'
import "./Navbar.css"
function Navbar() {
    
    const [open,setOpen]=useState(false);
    const scrollToSection=(id)=>{
        const section=document.getElementById(id);
        if (section){
            section.scrollIntoView({behavior:"smooth"})
            setOpen(false)
        }
    }
  return (
    <>
    <div className={`navbar-icon ${open?"open":""}`} onClick={()=>setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    
        <nav className={`side-menu ${open?"open":""}`}>
            {/* <button className="close-btn" onClick={()=>setOpen(false)}>
                ✕

            </button> */}
            <ul>
                <li onClick={() => scrollToSection("home")}>Home</li>
                <li onClick={() => scrollToSection("about")}>About</li>
                <li onClick={()=>scrollToSection("skills")}>Skills</li>
                <li onClick={() => scrollToSection("projects")}>Projects</li>
                <li onClick={() => scrollToSection("contact")}>Contact</li>
            </ul>
        </nav>

    
    </>
  )
}

export default Navbar