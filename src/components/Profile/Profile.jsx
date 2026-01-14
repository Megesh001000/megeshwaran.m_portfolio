import "./Profile.css"
// import profileImg from "../../assets/profile_image.JPG"
import useScrollReveal  from "../../hooks/useScrollReveal"


function Profile() {
    const [ref,visible]=useScrollReveal()
  return (
    <section id="home" className={`profile-section reveal reveal-scale ${visible?"active":""}`}
    ref={ref}>
        <div className="profile-wrapper">
            {/* <div className="row align-items-start profile-row"> */}
                <div className=" profile-text">
                    {/* <h1 className="profile-name">Dharshan M</h1> */}
                    <h1 className="profile-name">Megeshwaran M</h1>
                    <h3 className="profile-role">Full Stack Developer</h3>
                    <p className="profile-about">I design and build modern web applications with clean user interfaces,
                        strong backend logic, and real-world project experience.</p>

                </div>
                {/* <div className="col-lg-6 profile-photo-wrapper">
                    <div className="profile-photo">
                        <img src={profileImg} alt="Profile Photo" />
                    </div>
                </div> */}
                <div className="other-details">
                    <div className="detail-card">
                        <span className="num">4+</span>
                        <span className="content">Projects Completed</span>

                    </div>
                    <div className="detail-card">
                        <span className="num">2+</span>
                        <span className="content">Self Experience</span>

                    </div>
                </div>
            
                
               
        
            
            {/* </div> */}
        </div>
    </section>
  )
}

export default Profile