import React, { useEffect } from 'react';

//images
import icon    from '../images/icons/mouse-squareicon.svg'
import banner1 from '../images/banner/E-commarce_banner_mob.webp';
import banner2 from '../images/banner/landing-page_banner_mob.webp';

// lib
import { Link } from  'react-router-dom';

const AppProject = () => {
  return (
    <div className="py-24 bg-[#252830] text-white min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          App <span className="text-[#007bff]">design</span> 
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="group relative rounded-2xl overflow-hidden bg-[#1e2227] shadow-xl" data-aos="fade-right">
            <img src={banner1} loading="lazy" alt="E-Commerce" width="800" height="600" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" />

            <Link target="_blank" to="https://www.figma.com/proto/a99xv3l9dBpqNPhu0pbgLw/Untitled?page-id=9%3A37&node-id=80-7&viewport=1750%2C375%2C0.16&t=f8iUa6Dhw4PWSo3A-1&scaling=min-zoom&starting-point-node-id=144%3A254" className="absolute inset-0 bg-gradient-to-t from-[#1e2227] via-[#1e2227]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <h2 className="text-2xl font-bold mb-3 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">E-Commerce</h2>
              
              <p className="text-gray-300 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-2 text-sm">
                Et blanditiis sit neque provident soluta quibusdam. Ut optio nobis. Eligendi voluptas qui maxime id quo culpa qui. Nihil error necessitatibus distinctio explicabo et. 
              </p>

              <div className="mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                <div className="w-10 h-10 bg-[#007bff] rounded-lg flex items-center justify-center hover:bg-white transition-colors duration-300 group/btn">
                  <img src={icon} loading="lazy" alt="icon" width="20" height="20" className="w-5 h-5 filter group-hover/btn:brightness-0 group-hover/btn:invert" />
                </div>
              </div>
            </Link>
          </div>

          <div className="group relative rounded-2xl overflow-hidden bg-[#1e2227] shadow-xl" data-aos="fade-left">
            <img src={banner2} loading="lazy" alt="Landing Page" width="800" height="600" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" />

            <Link target="_blank" to="https://www.figma.com/proto/zgwFp5WQ2d98gU7U7xCEtG/Untitled?page-id=0%3A1&node-id=30-28&viewport=90%2C1686%2C0.14&t=uEMKnPo6GLFbIY5B-1&scaling=min-zoom" className="absolute inset-0 bg-gradient-to-t from-[#1e2227] via-[#1e2227]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <h2 className="text-2xl font-bold mb-3 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Landing-Page</h2>
                    
              <p className="text-gray-300 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-2 text-sm">
                Et blanditiis sit neque provident soluta quibusdam. Ut optio nobis. Eligendi voluptas qui maxime id quo culpa qui. Nihil error necessitatibus distinctio explicabo et. 
              </p>

              <div className="mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                <div className="w-10 h-10 bg-[#007bff] rounded-lg flex items-center justify-center hover:bg-white transition-colors duration-300 group/btn">
                  <img src={icon} loading="lazy" alt="icon" width="20" height="20" className="w-5 h-5 filter group-hover/btn:brightness-0 group-hover/btn:invert" />
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AppProject;

