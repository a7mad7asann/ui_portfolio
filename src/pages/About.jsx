import React, { useEffect } from 'react';
// Import CSS styles
import '../style/App.css';
import '../style/About.css';
import '../style/Media/AboutMedia.css'



// Import images
import profile from '../images/header_photo/hossam-pic.webp';

// Import AOS for animations
import 'aos/dist/aos.css';
import AOS from 'aos';


const Information = () => {
  //Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <>
      <section id='about'>
        <div className="container">
          <div className="aside-left0" data-aos="fade-up">
            <img src={profile} alt="" />
          </div>

          <div className="aside-right" data-aos="fade-left">
            <h1 data-aos="zoom-in">
              About 
                <span>
                  Me
                </span>
            </h1>

            <h2>
              UX/UI Designer
            </h2>

            <p>
                An innovative, detail-oriented UI/UX designer with [18] month of experience 
                designing intuitive and engaging user interfaces for web and mobile applications.
            </p>

            <p>
                Professional in user research, wireframes, prototyping and visual design. Skilled 
                in collaborating with cross-functional teams to translate user needs and business 
                goals into effective design solutions.
            </p>

            <p>
                Proficient in design tools such as Sketch, Figma, and InVision. 
                Passionate about enhancing user experiences through innovative, user-centered design strategies.
            </p>

            <button className='see-more'>
              Coming soon ...
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Information
