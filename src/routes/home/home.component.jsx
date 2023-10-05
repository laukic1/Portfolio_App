import TypewriterEffect from "../../components/typewriter-effect/typewritter-effect.component";
import { motion as m } from "framer-motion";

const Home = () => {
return (
    <m.div
      initial={{ translateX: -200 }}
      animate={{ translateX: 0 }}
      className="content-container w-screen h-screen"
    >
      <div className="content-list flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          
          
          
    <div>
    <TypewriterEffect />
    
    </div>
    </div>
    </div>
    </m.div>
)
}

export default Home;