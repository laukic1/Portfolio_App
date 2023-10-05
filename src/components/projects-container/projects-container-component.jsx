import StackIcon from "../stack-icon/stack-icon.component";
import TooltipImage from "../tooltip-image/tooltip-image.component";

const ProjectsContainer = ({project}) => {
    const { id, text, imgUrl, title, icons } = project;

    return(
        <div key={id} className="grid gap-x-20 lg:grid-cols-2 sm:items-center sm:text-right justify-between">
        {/* <TooltipImage text={text} imgUrl={imgUrl} title={title} /> */}

        
        <div className="flex justify-evenly shadow-lg bg-white dark:bg-gray-500 fold:p-0 p-4 rounded-3xl">
       
        {icons.map((IconComponent, index) => {
          return (
            <span key={index} className='dark:text-white'>{<StackIcon text={IconComponent.tooltip} icon={<IconComponent.icon className='fold:w-5 fold:h-5 w-6 h-6 sm:w-8 sm:h-8' />} />}</span>
            
          )
          
        }
        )
          
        }
        <span className='fold:text-xs fold:p-1 text-xs sm:text-lg'>Tech Stack</span>
        </div>
      </div>
    )
   
}

export default ProjectsContainer;