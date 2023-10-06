import profileImg from "../../assets/profile-image.png";
import resumeImg from "../../assets/cv-img.png";
import skillsImg from "../../assets/skills-image.png";
import InterestsImg from "../../assets/other-interests.png";

import { motion as m } from "framer-motion";
import { techStackIcons } from "../../data";
import SkillStackIcon from "../../components/skill-stack-icon/skill-stack-icon.component";
import { GiClick } from "react-icons/gi";
import ResumeButton from "../../components/resume-button/resume-button.component";

import { Link } from "react-router-dom";

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
            <div className="lg:w-1/2 bg-white shadow-lg dark:bg-gray-500 fold:p-4 p-4 rounded-3xl">
              <p>{`Hey, my name is David Lauko and I'm a passionate Web Developer from Maribor, Slovenia.`}</p>
              <br />
              <p>{`My dedication to excellence and commitment to deliver best possible product have been honed by my ability to be a creative and efficient problem solver.`}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-20 sm:items-center sm:text-left justify-center">
            <h2 className="place-self-center font-bold text-3xl justify-center">
              SKILLS
            </h2>
            <div className="flex flex-col justify-center items-center gap-10">
              <img
                className="lg:w-1/2 w-1/2"
                src={skillsImg}
                alt="profile-img"
              />
            </div>
            <div className="grid grid-cols-4 lg:grid-cols-4 place-self-center pr-1">
              {techStackIcons.map((StackIcons, index) => (
                <span key={index}>
                  <SkillStackIcon
                    icon={
                      <StackIcons
                        size="30"
                        className="fold:w-5 fold:h-5 animate-bounce-slower"
                      />
                    }
                  />
                </span>
              ))}
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-20 sm:items-center sm:text-left justify-center">
            <h2 className="place-self-center font-bold text-3xl justify-center">
              OTHER INTERESTS
            </h2>

            <div className="flex flex-col justify-center items-center gap-10">
              <img
                className="lg:w-1/2 w-1/2"
                src={InterestsImg}
                alt="profile-img"
              />
            </div>
            <div className=" place-self-center bg-white shadow-lg dark:bg-gray-500 fold:p-4 p-4 rounded-3xl">
              <p>{`As a person, I am characterized by my honesty, openness, and a supportive nature. Beyond the realm of coding, I find immense joy in music production, expressing myself through the strings of a guitar, and engaging in intellectual conversations that broaden my perspectives.`}</p>
              <br />
              <p>{`  I bring not only technical proficiency but also a supportive spirit to every team I join, creating an environment where collaboration thrives and individual strengths are celebrated.`}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-20 sm:items-center sm:text-left justify-center">
            <h2 className="place-self-center font-bold text-3xl justify-center">
              RESUME
            </h2>

            <div className="flex flex-col justify-center items-center gap-10">
              <img
                className="lg:w-1/2 w-1/2"
                src={resumeImg}
                alt="profile-img"
              />
            </div>
           <span className="flex justify-center">
           <Link target='_blank' to='https://www.dropbox.com/scl/fi/vlcdlxt5dgfg1v3vpddda/resume.pdf?rlkey=raze4oe37rfslkhom3o171m13&dl=0'><ResumeButton
                text={"View Resume"}
                icon={<GiClick size="38" className="animate-pulse" />}
              /></Link>
            </span>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default About;
