import   "./Projects.css"
import url_ui from "../../assets/projects_UI/URL Info gather checker UI.png"
import wedding_ui from "../../assets/projects_UI/wedding.jpeg"
import healthy_ui from "../../assets/projects_UI/healthybite UI.png"
import portfolio_ui from "../../assets/projects_UI/portfolio_ui.png"
import chat_ui from "../../assets/projects_UI/chat.jpeg"
import { useEffect,useRef } from "react"

import useScrollReveal from "../../hooks/useScrollReveal"
function Project() {
  const [ref,visible]=useScrollReveal()
  const cardsRef =useRef([])


  useEffect(()=>{
    const observer=new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry)=>{
          if (entry.isIntersecting){
            entry.target.classList.add("show")
            observer.unobserve(entry.target)

          }

        }


      )},{threshold:0.2})

      cardsRef.current.forEach((card)=>{
        if (card) observer.observe(card)
      })
      return observer.disconnect()

  },[])
  const projectsData=[
    {
      title:"URL Info gather & checker",
      image:url_ui,
      description:"An intelligent system that analyzes user-input URLs and detects malicious links using ML models like BERT, XGBoost, and Random Forest, along with a blacklist database.",

      tech:["HTML","CSS","JavaScript","Python","Django"],
      github:"https://github.com/Megesh001000/URL-Checker-and-Info-Gather.git",
      demo:"",
      alt_image:"Url Info Gather ui"

    },
    {
      title:"Healthy Bite",
      image:healthy_ui,
      description:"Developed a User Friendly web application for purchasing Foods & Beverages,Apart from others we focus on providing healthy foods to peoples  ",

      tech:["HTML","CSS","JavaScript","Python","Django"],
      github:"https://github.com/Megesh001000/URL-Checker-and-Info-Gather.git",
      demo:"",
      alt_image:"Healthy Bite ui"

    },
    {
      title:"Chit-Chat Web Application",
      image:chat_ui,
      description:"Build a Simple Chat web applicationn where two people can chat and supports multiple  groups",
      tech:["React","Python-Django"],
      github:"https://github.com/Megesh001000/Real_time_chat_application.git",
      demo:"",
      alt_image:"Chit Chat ui"
    },
    {
      title:"Personal Portfolio",
      image:portfolio_ui,
      description:"Designed and Developed a Portfolio  for showcaseing about me and my skills and projects ",
      tech:["React"],
      github:"https://github.com/Megesh001000/Wedding-Invitation.git",
      demo:"",
      alt_image:"Portfolio ui"

    },
      {
      title:"Wedding Card Invitation Site",
      image:wedding_ui,
      description:"Designed and Developed a site for Digital Wedding Card Invitation where it shares among  peoples for showcasing wedding and wedding details",
      tech:["React"],
      github:"https://github.com/Megesh001000/Wedding-Invitation.git",
      demo:"https://wedding-invitation-ashen-chi.vercel.app/"



    },
    
  ]

  return (
    <>
    <section id="projects" 
    className={`projects-section container-fluid  reveal reveal-scale ${visible?"active":""}`}
    ref={ref}>

      <h2 className="projects-title">
        Projects</h2>
      <div className="projects wrapper">
        <div className="projects-grid">
          {projectsData.map((project,index)=>
            <div className="projects-card" key={index} ref={(el)=>(cardsRef.current[index]=el)}
            style={{"--delay":index}}>
              <div className="projects-image">
                <img src={project.image} alt={project.alt_image} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="projects-tech" >
                {project.tech.map((tech,i)=>(
                  <span key={i}>{tech}</span>

                ))}

              </div>
            
              <div className="projects-links">
                <a href={project.github} target="_blank">View On Github </a>
                {project.demo  &&(
                <a href={project.demo}  target="_blank">View Demo </a>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
    </>
  )
}

export default Project