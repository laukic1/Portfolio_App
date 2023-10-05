import { Typewriter } from "react-simple-typewriter";



const TypewriterEffect = () => {

  

    return(
    
      
    <div>
   
        <h1 className='text-green-500' style={{ paddingBottom: '10rem', padding: '0.5em', margin: 'auto 0', fontWeight: 'bold', textAlign: "center"  }}>
        { " Developer who is " }
        <span className='text-gray-800 dark:text-white' style={{ fontWeight: 'bold',}}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['building innovative and user-friendly applications.', 'passionate about coding and problem-solving.', 'always eager to learn new technologies.', 'providing smart solutions.' ]}
            loop={3}
            cursor
            cursorStyle='_'
            typeSpeed={20}
            deleteSpeed={30}
            delaySpeed={5000}
         
          />
           
        </span>
        
      </h1>
      
      </div>
    )
   
}

export default TypewriterEffect;