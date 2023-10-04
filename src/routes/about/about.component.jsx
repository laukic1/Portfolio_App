import profileImg from "../../assets/profile-image.png";
import resumeImg from '../../assets/cv-img.png';
import skillsImg from '../../assets/skills-img.png';
import { motion as m } from "framer-motion";
import { techStackIcons } from "../../data";
import SkillStackIcon from "../../components/skill-stack-icon/skill-stack-icon.component";
import { GiClick } from "react-icons/gi";
import ResumeButton from "../../components/resume-button/resume-button.component";
const About = () => {
  return (
    <m.div
      initial={{ translateX: -200 }}
      animate={{ translateX: 0 }}
      className="content-container"
    >
      <div className="content-list">
        <div className="grid gap-y-60">
          <div className="flex gap-y-6 flex-col items-center justify-center">
            <img className="lg:w-1/3" src={profileImg} alt="profile-img" />
            <div className='lg:w-1/2 bg-white shadow-lg dark:bg-gray-500 fold:p-0 p-4 rounded-3xl'>
              <p>{`Hey, my name is David Lauko and I'm a passionate Web Developer from Maribor, Slovenia.`}</p>
              <br />
              <p>{`My dedication to excellence and commitment to deliver best possible product have been honed by my ability to be a creative and efficient problem solver.`}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 sm:items-center sm:text-left justify-center">
          
         
          
          <div className='flex flex-col justify-center items-center gap-10'>
         
         <img className="lg:w-1/2 w-1/2" src={resumeImg} alt="profile-img" />
         </div> 
         <img className="lg:w-1/2 w-1/2" src={resumeImg} alt="profile-img" />

        </div>

          <div className="grid lg:grid-cols-3 gap-20 sm:items-center sm:text-left justify-center">
          <h2 className='place-self-center font-bold text-3xl justify-center'>SKILLS</h2>
         <div className='flex flex-col justify-center items-center gap-10'>
         
<img className="lg:w-1/2 w-1/2" src={skillsImg} alt="profile-img" />
</div> 
           <div className='grid grid-cols-5 lg:grid-cols-5'>
           
            {
                techStackIcons.slice(0,5).map((StackIcons, index) => (
                    
                    <span key={index}><SkillStackIcon icon={<StackIcons size='38' className='animate-bounce-slower' />}/></span>
                ))
                
            }

            {
              techStackIcons.slice(5,10).map((StackIcons, index) => (
                    
                    <span key={index}><SkillStackIcon  icon={<StackIcons size='38' className='animate-bounce-slow' />}/></span>
                ))
                
            }
            
            </div>
           
          </div>
       <div className="grid lg:grid-cols-3 gap-20 sm:items-center sm:text-left justify-center">
          
          <h2 className='place-self-center font-bold text-3xl justify-center'>RESUME</h2>
          
          <div className='flex flex-col justify-center items-center gap-10'>
         
         <img className="lg:w-1/2 w-1/2" src={resumeImg} alt="profile-img" />
         </div> 
         <span><ResumeButton text={"View Resume"} icon={<GiClick size='38' className='animate-pulse' />}/></span>
        </div>
        </div>
      </div>
    </m.div>
  );
};

export default About;
