import "./Footer.css"

import { FaEnvelope } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer" >
        <p>Designed and Developed By Megeshwran M</p>
        <div className="mail-link">
            <a href="mailto:megesh16@gmail.com" ><span className="icon">
            <FaEnvelope/></span>megesh16@gmail.com
            </a>
        </div>
    </footer>
  )
}

export default Footer