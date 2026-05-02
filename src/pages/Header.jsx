import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';

// Lazy load TypedText
const TypedText = lazy(() => import('../component/TypedText'));

// images
import profile from '../images/header_photo/hossam-pic.webp';

const Header = () => {
  const [fa, setFa] = useState(null);

  useEffect(() => {
    const loadFa = async () => {
      const [{ FontAwesomeIcon }, { faLinkedinIn, faFacebookF, faInstagram, faBehance }] = await Promise.all([
        import('@fortawesome/react-fontawesome'),
        import('@fortawesome/free-brands-svg-icons')
      ]);
      setFa({ FontAwesomeIcon, icons: { faLinkedinIn, faFacebookF, faInstagram, faBehance } });
    };
    
    const timer = setTimeout(loadFa, 1500); // Heavy deferral for FCP
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="pt-32 pb-20 bg-[#212529] min-h-screen flex items-center text-white overflow-hidden relative" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1" data-aos="fade-right">
            <span className="block text-2xl font-semibold mb-2">
              Hello it's Me <span className="inline-block animate-bounce">👋</span>
            </span>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Hossam Mohamed
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-2">
              And I'm a <span className="text-[#007bff]">
                <Suspense fallback={<span>...</span>}>
                  <TypedText />
                </Suspense>
              </span>
            </h2>
            
            <p className="text-gray-300 max-w-lg mb-8 leading-relaxed">
              Hi, I'm Hossam Mohamed a freelance web designer from egypt. 
              I'm UI/UX Designer & Web Developer
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-12">
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {fa ? (
                  <>
                    <Link to="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border-2 border-[#007bff] flex items-center justify-center text-[#007bff] hover:bg-[#007bff] hover:text-white hover:shadow-[0_0_15px_rgba(0,123,255,0.5)] transition-all duration-300 group">
                      <fa.FontAwesomeIcon icon={fa.icons.faLinkedinIn} className="text-lg" />
                    </Link>
                    <Link to="#" aria-label="Facebook" className="w-10 h-10 rounded-full border-2 border-[#007bff] flex items-center justify-center text-[#007bff] hover:bg-[#007bff] hover:text-white hover:shadow-[0_0_15px_rgba(0,123,255,0.5)] transition-all duration-300 group">
                      <fa.FontAwesomeIcon icon={fa.icons.faFacebookF} className="text-lg" />
                    </Link>
                    <Link to="#" aria-label="Instagram" className="w-10 h-10 rounded-full border-2 border-[#007bff] flex items-center justify-center text-[#007bff] hover:bg-[#007bff] hover:text-white hover:shadow-[0_0_15px_rgba(0,123,255,0.5)] transition-all duration-300 group">
                      <fa.FontAwesomeIcon icon={fa.icons.faInstagram} className="text-lg" />
                    </Link>
                    <Link to="#" aria-label="Behance" className="w-10 h-10 rounded-full border-2 border-[#007bff] flex items-center justify-center text-[#007bff] hover:bg-[#007bff] hover:text-white hover:shadow-[0_0_15px_rgba(0,123,255,0.5)] transition-all duration-300 group">
                      <fa.FontAwesomeIcon icon={fa.icons.faBehance} className="text-lg" />
                    </Link>
                  </>
                ) : (
                  <div className="h-10"></div> // placeholder
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#007bff] hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,123,255,0.5)]">
                Download CV
              </button>
              <button className="bg-[#007bff] hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,123,255,0.5)]">
                Book Now
              </button>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="flex-1 relative flex justify-center" data-aos="zoom-in">
            {/* The blue shape background */}
            <div className="absolute inset-0 bg-[#007bff] rounded-full filter blur-[100px] opacity-40 z-0"></div>
            
            {/* Custom geometric shape behind image (approximating the design) */}
            <div className="absolute z-10 w-full max-w-md h-full flex items-center justify-center">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform scale-125 text-[#007bff]">
                <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.1,-46.2C90.4,-33.3,95.9,-17.6,94.2,-2.5C92.5,12.5,83.5,26.9,73.5,39.9C63.4,53,52.3,64.7,38.9,71.8C25.6,78.9,10.1,81.5,-4.8,80.7C-19.6,79.9,-33.8,75.8,-46.5,68.4C-59.2,61,-70.4,50.3,-78.3,37C-86.2,23.7,-90.8,7.8,-88.7,-7.1C-86.6,-22,-77.8,-35.9,-66.3,-46.4C-54.8,-56.9,-40.6,-64,-27,-70C-13.3,-76,-0.7,-81,14.1,-80.6C28.8,-80.2,42.5,-74.4,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>
            
            <img 
              src={profile} 
              alt="Hossam Mohamed" 
              width="400"
              height="400"
              fetchpriority="high"
              className="relative z-20 w-64 md:w-80 lg:w-96 drop-shadow-2xl object-cover mask-image-bottom"
              style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
            />
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
