import "./Contact.css"
import  fb_icon  from "../../assets/icons/fb.png"
import ig_icon from "../../assets/icons/ig.png"
import linkedin_icon from "../../assets/icons/li.png"
import X_icon from "../../assets/icons/X.png"
import github_icon from "../../assets/icons/githubs1.png"
import mail from "../../assets/icons/mail1.png"
import { FaEnvelope,FaGithub,FaFacebook,FaInstagram, FaLinkedin } from "react-icons/fa"

import useScrollReveal from "../../hooks/useScrollReveal"
function Contact() {
  const contactData=[
    {
      instagram_link:"https://www.instagram.com/dharshan_prince_5?igsh=dHQxa3Y5dW4waG9x",
      github_link:"https://github.com/Megesh001000",
      linkedin_link:"https://www.linkedin.com/in/megeshwaran-m-a45993332",
      email_id:"mailto:dharshansachin.m1018@gmail.com",    //Add mailto: before mail id
      facebook_link:""

    }
  ]
  const [ref,visible]=useScrollReveal()
  return (
   
      <section id="contact" ref={ref} className={`contact-section reveal reveal-down ${visible?"active":""}`}>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-text">
              I’m open to opportunities, collaborations, and discussions.
          Feel free to reach out.
          </p>
        
          {contactData.map((link,index)=>(
            <div className="contact-links"  key={index}>
          
              <a href={link.email_id}  ><img src={mail} alt="mail" /></a>
              <a href={link.github_link} target="_blank" rel="noreferror" className="icon">
                <img src={github_icon} alt="git" className="github" /* width="90px" height="90px"*/  />
              
              </a>
              <a href={link.linkedin_link} target="_blank" rel="noreferror" className="icon">
                <img src={linkedin_icon} alt="linkedin" />
            
              </a>
              <a href={link.instagram_link} target="_blank" rel="noreferror" className="icon">
              <img src={ig_icon}></img>
            
              </a>
              
              <a href="#" target="_blank" rel="noreferror" className="icon">
                <img src={fb_icon} alt="fb" />
              </a> 
            </div>
          ))}
          
          
          <div className="resume">
              <a href="/Megeshwaran M Resume.pdf" target="_blank" rel="noreferror">Download Resume</a>

          </div>
          
      </section>
 
  )

}

export default Contact