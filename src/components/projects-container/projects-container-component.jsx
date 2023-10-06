import StackIcon from "../stack-icon/stack-icon.component";
import TooltipImage from "../tooltip-image/tooltip-image.component";
// eslint-disable-next-line react/prop-types
const ProjectsContainer = ({ project }) => {
  // eslint-disable-next-line react/prop-types
  const { id, text, imgUrl, title, workflow1, workflow2, icons, github, website } = project;

  return (
    <div
      key={id}
      className="grid gap-x-20 lg:grid-cols-2 sm:items-center sm:text-right justify-between"
    >
      <TooltipImage text={text} imgUrl={imgUrl} title={title} github={github} website={website} />

<div className='flex flex-col gap-4'>
<div className="flex flex-col text-left justify-evenly bg-white dark:bg-gray-500 fold:text-xs sm:text-sm lg:text-base fold:p-2 p-4 rounded-3xl">
<p>{workflow1}</p>
<br />
<p>{workflow2}</p>
</div>
      <div className="flex justify-evenly shadow-lg bg-white dark:bg-gray-500 fold:p-0 p-4 rounded-3xl flex-wrap">
        {
          // eslint-disable-next-line react/prop-types
          icons.map((IconComponent, index) => {
            return (
              <span key={index} className="dark:text-white">
                {
                  <StackIcon
                    text={IconComponent.tooltip}
                    icon={
                      <IconComponent.icon className="fold:w-5 fold:h-5 w-6 h-6 sm:w-8 sm:h-8" />
                    }
                  />
                }
              </span>
            );
          })
        }
        
        
        
        
      </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
