import { projects } from "../../data";
import ProjectsContainer from "../projects-container/projects-container-component";

import { motion as m } from "framer-motion";

const ContentContainer = () => {
  return (
    <m.div initial={{ translateX: -200 }}  animate={{ translateX: 0 }} className="content-container">
      <div className="content-list">
        <div className="grid gap-y-40 ">
          {projects.map((project) => {
            {
              console.log(project.icons);
            }
            return <ProjectsContainer key={project.id} project={project} />;
          })}
        </div>
      </div>
    </m.div>
  );
};

export default ContentContainer;
