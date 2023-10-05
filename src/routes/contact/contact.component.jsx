import { useRef } from "react";

import { motion as m } from "framer-motion";

import ContactIcon from '../../assets/contact.png';
import HandshakeIcon from '../../assets/handshake.png';
import {ContactPageIcon, ContactPageSendIcon} from "../../components/contact-icon/contact-icon.component";

import { BsFillPhoneFill, BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";
import { RiMailSendFill } from "react-icons/ri";

import PhoneCall from "../../hooks/phone-call.hook";
import SendEmailButton from "../../hooks/send-email.hook";


const Contact = () => {

    const PhoneCallHandler = () => PhoneCall();
    const SendEmailButtonHandler = () => SendEmailButton();

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  }

  return (
    <m.div
      initial={{ translateX: -200 }}
      animate={{ translateX: 0 }}
      className="content-container"
    >
      <div className="content-list">
        <div className="grid gap-y-60">
          
          <div className="grid lg:grid-cols-2 gap-20 sm:items-center sm:text-left justify-center">
          
         
          
          <div className='flex flex-col justify-center items-center'>
         
         <img className="lg:w-1/3 w-1/2" src={ContactIcon}  alt="profile-img" />
         </div> 
         <div className=' flex flex-col  gap-10 place-self-center bg-white shadow-lg dark:bg-gray-500 fold:p-4 p-4 rounded-3xl'>
              <div className='flex flex-col items-start gap-4'>
              <span className='flex items-center justify-start fold:gap-0 gap-6'><span  onClick={PhoneCallHandler}><ContactPageIcon  icon={<BsFillPhoneFill size='28' className='fold:w-5 fold:h-5'  />}  /></span> <span className='fold:text-xs'>(386) 40 323 077</span></span>
              <span className='flex items-center justify-start fold:gap-0 gap-6'><span onClick={SendEmailButtonHandler}><ContactPageIcon icon={<IoMdMail size='28' className='fold:w-5 fold:h-5' />} /></span><span className='fold:text-xs'>dlauko96@gmail.com</span></span>

              </div>
            <div className='flex gap-2 justify-end'>
            
            <span><ContactPageSendIcon text={"Use Contact Form"} sendIcon={<RiMailSendFill size='29' className='fold:w-5 fold:h-5' />} /></span>
            <div className='flex-grow flex-shrink'></div>
            <span><ContactPageIcon   icon={<BsLinkedin size='26' className='fold:w-4 fold:h-4' />} /></span>
            <span><ContactPageIcon icon={<FaSquareGithub size='29' className='fold:w-4 fold:h-5' />} /></span>
            </div>
            </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 sm:items-center sm:text-left justify-center">
          
         
          
          <div className='flex flex-col justify-center items-center gap-10'>
         
         <img className="lg:w-1/2 w-1/2" src={HandshakeIcon}  alt="profile-img" />
         </div> 
         <div className='place-self-center bg-white shadow-lg dark:bg-gray-500 fold:p-0 p-4 rounded-3xl'>
         <form ref={form} onSubmit={sendEmail} className='flex flex-col fold:p-2  '>
      <label>Name</label>
      <input className='bg-gray-400 text-gray-800 dark:bg-white rounded-md' type="text" name="user_name" />
      <label>Email</label>
      <input className='bg-gray-400 text-gray-800 dark:bg-white rounded-md' type="email" name="user_email" />
      <label>Message</label>
      <textarea className='bg-gray-400 text-gray-800 dark:bg-white rounded-md' name="message" />
      <button type="submit" value="Send">Send</button>
    </form>
            
            </div>
        </div> 
        </div>
      </div>
    </m.div>
  );
};

export default Contact;
