import { useState,useEffect } from "react";

import "./ScrollIndicator.css"
function ScrollIndicator(){
    const [scrollPercent,setScrollPercent]=useState(0)

    useEffect(()=>{
        const handleScroll=()=>{
        const scrollTop=window.scrollY;
        const docheight=
        document.documentElement.scrollHeight - document.documentElement.clientHeight;


        const scroll=(scrollTop/docheight)*100;
        setScrollPercent(scroll);
    }
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);

    },[])
    

    return(
        <div className="scroll-track">
            <div className="scroll-thumb"
                style={{
                    height:`${scrollPercent}%`,
                    background:`linear-gradient(
                    180deg,
                    hsl(${200 + scrollPercent}, 90%, 65%),
                    hsl(${220 + scrollPercent}, 90%, 55%)
                    )`
                 }}
                /> 
           
        </div>
)
}

export default ScrollIndicator