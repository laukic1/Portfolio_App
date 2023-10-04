// eslint-disable-next-line react/prop-types
const ResumeButton = ({ icon, text = 'tooltip' }) => {
    return <div className='bg-white hover:cursor-pointer shadow-custom hover:shadow-sm fold:w-7 fold:h-7 lg:w-20 lg:h-20 resume-icon group'>
    {icon}
    <span className='stack-icon-tooltip group-hover:scale-100'>{text}</span>
    </div>;
  };
  
  export default ResumeButton;
  