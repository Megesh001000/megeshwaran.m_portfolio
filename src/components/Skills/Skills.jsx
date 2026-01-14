import "./Skills.css"
import htmlicon from "../../assets/icons/html.png"
import cssicon from "../../assets/icons/css.png"
import jsicon from "../../assets/icons/js.png"
import reacticon from "../../assets/icons/react.png"
import bootstrapicon from "../../assets/icons/bootstrap.png"
import pythonicon from "../../assets/icons/python.png"
import djangoicon from "../../assets/icons/django.png"
import sqlicon from "../../assets/icons/sql.png"
import giticon from "../../assets/icons/git.png"
import githubicon from "../../assets/icons/github_logo.png"
import javaicon from "../../assets/icons/java.png"

import useScrollReveal  from "../../hooks/useScrollReveal"

const skillsData=[
    
    {
        category:"Frontend",
        skills:[
            {name:"HTML",icon:htmlicon},
            {name:"CSS",icon:cssicon},
            {name:"JavaScript",icon:jsicon},
            {name:"React",icon:reacticon},
            {name:"Bootstrap",icon:bootstrapicon},

        ]
        
    },
    {
        category:"Backend",
        skills:[
            {name:"Python",icon:pythonicon},
            {name:"Django",icon:djangoicon}
        ]
    },
    {
        category:"Database",
        skills:[
            {name:"SQL",icon:sqlicon}]
    },
    {
        category:"Tools",
        skills:[
            {name:"Git",icon:giticon},
            {name:"Github",icon:githubicon}
        ]
    },
    {
        category:"Other Programming Languages [Basic]",
        skills:[{name:"Java",icon:javaicon}]

    }


]


function Skills() {
    const [ref,visible]=useScrollReveal()
  return (
    <section id="skills" 
    ref={ref}
    className={`skills-section reveal reveal-left ${visible?"active":""}`}>
        <h2 className="skills-title">Skills</h2>

        <div className="skills-grid">
            {skillsData.map((group,index)=>(
                <div className="skills-card" key={index}>
                    
                    <h3>{group.category}</h3>

                    <div className="skills-list">
                        {group.skills.map((skill,i)=>(
                          
                            <span key={i}  className="skills-chip">
                                 <img src={skill.icon} alt={skill.name}/>  
                                 {skill.name}
                            </span>
                          
                           
                        ))}
                       
                    </div>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Skills
