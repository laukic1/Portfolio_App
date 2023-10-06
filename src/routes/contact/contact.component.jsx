import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { motion as m } from "framer-motion";

import ContactIcon from '../../assets/contact.png';
import HandshakeIcon from '../../assets/handshake.png';
import {ContactPageIcon, ContactPageSendIcon} from "../../components/contact-icon/contact-icon.component";

import { BsFillPhoneFill, BsLinkedin, BsArrowDownCircle } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";

import PhoneCall from "../../hooks/phone-call.hook";
import SendEmailButton from "../../hooks/send-email.hook";
import { Link } from "react-router-dom";


const Contact = () => {
    const sectionRef = useRef(null);
    const scrollToSectionHandler = () => {
       if(sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
       }
    };
    

    const PhoneCallHandler = () => PhoneCall();
    const SendEmailButtonHandler = () => SendEmailButton();

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        "service_d66x8i8",
        "template_7ue8775",
        form.current,
        "te5SU7euBFO2JNMc9"
    )
    .then(
        (result) => {
        console.log(result.text);
        e.target.reset();
        console.log("message sent")
        
    },
    (error) => {
        console.log(error.text);
    }
    );
  };

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
         <div className=' flex flex-col w-full h-full gap-10 place-self-center bg-white shadow-lg dark:bg-gray-500 fold:p-4 p-4 rounded-3xl'>
              <div className='flex flex-col items-start gap-4'>
              <span className='flex items-center justify-start fold:gap-0 gap-6'><span onClick={PhoneCallHandler}><ContactPageIcon  icon={<BsFillPhoneFill size='28' className='fold:w-5 fold:h-5'  />}  /></span> <span className='lg:text-xl fold:text-xs'>(386) 40 323 077</span></span>
              <span className='flex items-center justify-start fold:gap-0 gap-6'><span onClick={SendEmailButtonHandler}><ContactPageIcon icon={<IoMdMail size='28' className='fold:w-5 fold:h-5' />} /></span><span className='lg:text-xl fold:text-xs'>dlauko96@gmail.com</span></span>

              </div>
            <div className='flex gap-2 justify-end'>
            
            <span onClick={scrollToSectionHandler}><ContactPageSendIcon text={"Send me a message"} sendIcon={<BsArrowDownCircle size='29' className='fold:w-5 fold:h-5' />} /></span>
            <div className='flex-grow flex-shrink'></div>
            <Link target='_blank' to='https://www.linkedin.com/in/david-lauko-602649269/'><span><ContactPageIcon   icon={<BsLinkedin size='26' className='fold:w-4 fold:h-4' />} /></span></Link>
            <Link target='_blank' to='https://github.com/laukic1'><span><ContactPageIcon icon={<FaSquareGithub size='29' className='fold:w-4 fold:h-5' />} /></span></Link>
            </div>
            </div>
        </div>
        



        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-20 sm:items-center sm:text-left justify-center">
          


          <div  className='flex flex-col justify-center items-center gap-10'>
         
         <img className="lg:w-1/2 w-1/2" src={HandshakeIcon}  alt="profile-img" />
         </div> 
         <div className='place-self-center bg-white shadow-lg w-full fold:w-full dark:bg-gray-500 fold:p-0 p-4 rounded-3xl'>
         <form ref={form} onSubmit={sendEmail} className='flex flex-col fold:p-0 gap-1'>
         <div><h2 className='place-self-center font-bold text-3xl mb-4 mt-2 justify-center'>{`LET'S GET IN TOUCH`}</h2></div>

      <label>Name</label>
      <input required className='bg-gray-400 text-gray-800 dark:bg-white rounded-md mb-4 p-1 fold:m-1' type="text" name="user_name" />
      <label>Email</label>
      <input required className='bg-gray-400 text-gray-800 dark:bg-white rounded-md mb-4 p-1 fold:m-1' type="email" name="user_email" />
      <label>Message</label>
      <textarea required className='bg-gray-400 text-gray-800 dark:bg-white rounded-md mb-4 p-1 fold:m-1' name="message" />
      <button className='bg-green-400 rounded-2xl mt-6 pt-2 pb-2 lg:hover:bg-green-500' type="submit" value="Send">Send</button>
    </form>
            
            </div>
        </div> 
        </div>
      </div>
    </m.div>
  );
};

export default Contact;
