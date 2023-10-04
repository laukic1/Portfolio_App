// eslint-disable-next-line react/prop-types
const StackIcon = ({ icon, text = 'tooltip' }) => {
    return <div className='fold:w-7 fold:h-7 stack-icon group'>
    {icon}
    <span className='stack-icon-tooltip group-hover:scale-100'>{text}</span>
    </div>;
  };
  
  export default StackIcon;
  