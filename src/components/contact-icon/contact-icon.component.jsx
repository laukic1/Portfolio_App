// eslint-disable-next-line react/prop-types
export const ContactPageIcon = ({ icon }) => {
    return <div className='sidebar-icon group fold:w-8 fold:h-8'>
    {icon}
    </div>;
  };
  

// eslint-disable-next-line react/prop-types
  export const ContactPageSendIcon = ({ sendIcon, text }) => {
    return <div className='sidebar-icon w-12 h-16  group hover:animate-none animate-bounce'>
    {sendIcon}
    <span className='hidden lg:block lg:project-icon-tooltip group-hover:scale-100'>{text}</span>
    </div>;
  };
  

  