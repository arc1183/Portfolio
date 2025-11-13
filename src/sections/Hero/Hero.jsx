
import  { useState } from 'react';
import './Hero.css'; 
import Profilepic from '../../assets/Profilepicanimated.png'; 
import Profilepichover from '../../assets/Profilepichover.png'; 

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
    const currentImage = isHovering ? Profilepichover : Profilepic;  
  return (
  
    <section id="hero-intro" className="hero-wrapper">
    <div className="hero-container">
              
        <h1 className='hero-title' > Hi, I'm <br/>
        Abhishek Raj Chowdary<br/>
        <span className='hero-title-secondary'>Early-Career ML Engineer<br/>
        </span>
        <span className='hero-title-third'> New York, USA<br/>
        </span></h1>
        
        <img 
        className='hero-ProfilePic' src={currentImage} alt="Profile Picture"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
                     />
        </div>
     </section>
  );
};


export default Hero;