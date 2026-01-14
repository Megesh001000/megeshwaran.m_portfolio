import "./About.css"
import profileImg from "../../assets/profile_image.JPG"
import profileImg2 from "../../assets/profile_image_2.JPG"
import useScrollReveal from "../../hooks/useScrollReveal"

function About() {
  const [ref,visible] =useScrollReveal()
  return (
    <>
    
    
      <section id="about" 
      ref={ref}
      className={`about-section reveal reveal-scale reveal-zoom ${visible?"active":""}`}>
     
          <h2 className="about-title">About me</h2>

          <h3 className="about-name">Hello,I'm Megesh</h3>
          <div className=" profile-photo-wrapper">
              <d iv className="profile-photo mt-5 mb-5 me-5" >
                  <img src={profileImg} alt="Profile Photo" />
                  {/* <img src={profileImg2} alt="Profile Photo" /> */}
              </d>
          </div> 
          <p className="about-content">I am a Full Stack Developer with a strong interest in building
            real-world web applications. I enjoy working on both frontend
            and backend technologies, creating clean user interfaces and
            efficient server-side logic.
          </p>
          <p className="about-content">I am a dedicated self learner and gained knowleadge and experience by developing  projects</p>
        
     
      </section>
    
    </>

   
    
    
   
  )
}

export default About