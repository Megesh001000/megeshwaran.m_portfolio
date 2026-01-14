import "./Background.css"
import backgroundVideo from "../../assets/background.mp4"
import Backgroundimage from "../../assets/bg1.jpg"
function Background() {
  return (
    <div className="background-container">
        {/* <video className="background-video"
         src={backgroundVideo}
        loop
        playsInline
        autoPlay
        muted
        preload="auto"
        /> */}
        <img className="background-image" src={Backgroundimage} alt="background image" />

        
    </div>
  )
}

export default Background