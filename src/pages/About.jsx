import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF, faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons';

// images
import profile from '../images/header_photo/hossam-pic.webp';

const About = () => {
  const { data } = useContext(DataContext);
  const { title, titleHighlight, subtitle, paragraphs } = data.about;

  return (
    <section className="py-20 bg-[#1c1f24] text-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Side - Image */}
          <div className="flex-1 relative flex justify-center w-full" data-aos="fade-right">
            {/* Blue glowing background circle */}
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full bg-[#007bff] flex items-center justify-center shadow-[0_0_80px_rgba(0,123,255,0.4)]">
              {/* Inner darker circle behind the person */}
              <div className="absolute w-56 h-56 md:w-[280px] md:h-[280px] rounded-full bg-[#181a1f] opacity-80"></div>
              
              <img 
                loading="lazy"
                src={profile} 
                alt="Hossam Mohamed" 
                width="384"
                height="384"
                className="relative z-10 w-48 md:w-[350px] object-cover drop-shadow-2xl translate-y-6 md:translate-y-12"
                style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
              />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="flex-1" data-aos="fade-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              {title} <span className="text-[#007bff]">{titleHighlight}</span>
            </h2>
            
            <h3 className="text-xl md:text-2xl font-medium mb-8 text-gray-200">
              {subtitle}
            </h3>
            
            <div className="space-y-4 mb-10">
              {paragraphs.map((para, idx) => (
                <p key={idx} className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center gap-8">
              <button className="bg-[#007bff] hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,123,255,0.6)]">
                Download CV
              </button>
              
              <div className="flex items-center gap-4">
                <span className="font-bold text-lg mr-2 border-b-2 border-[#007bff] pb-1">Follow me</span>
                <Link to="#" aria-label="LinkedIn" className="text-[#007bff] hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
                </Link>
                <Link to="#" aria-label="Facebook" className="text-[#007bff] hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
                </Link>
                <Link to="#" aria-label="Instagram" className="text-[#007bff] hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                </Link>
                <Link to="#" aria-label="Behance" className="text-[#007bff] hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={faBehance} className="text-xl" />
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
