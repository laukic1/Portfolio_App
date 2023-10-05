// eslint-disable-next-line react/prop-types
const ProjectInfoIcon = ({ icon, text }) => {
    return <div className='fold:w-10 fold:h-6  sm:w-20 sm:h-12 w-14 h-8 project-icon group'>
    {icon}
    <span className='project-icon-tooltip group-hover:scale-100'>{text}</span>
    </div>;
  };
  
  export default ProjectInfoIcon;
  