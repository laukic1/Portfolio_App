import ProjectInfoIcon from "../project-info-icon/project-info-icon.component";
import { TbEyeQuestion, TbMessage2Question } from "react-icons/tb";

const TooltipImage = ({ imgUrl, title, text }) => {
  return (
    <div className="">
   <div className='relative project-img group rounded-custom'> 
      <img
        className="rounded-custom hover:grayscale-0 shadow-xl w-full h-full object-cover "
        src={imgUrl}
        alt={`${title}`}
      />
      <div className='flex sm:gap-2 absolute top-1 right-5'>
       <ProjectInfoIcon text={"Link"} icon={<TbEyeQuestion size="28" className='w-6 h-6 drop-shadow-lg' />} />
        <ProjectInfoIcon text={"Docs"} icon={<TbMessage2Question size="28" className='w-6 h-6 drop-shadow-lg' />} />
        </div>
    <span className='transition-all duration-500 project-tooltip z-30 group-hover:scale-100'>{text}</span>

      </div>
      <h2 className="lg:text-3xl text-xl m-2 mb-4 font-medium">{title}</h2>
      <div className="img-links flex flex-end gap-2">
        <div className="flex-grow flex-shrink"></div>
       
      </div>
    </div>
  );
};
export default TooltipImage;