import React, { useRef, useEffect } from "react";

//lib
//image
import Creat_Acc_Web  from '../images/WORK/Creat_Acc_Web.webp';
import Check_Mail_Web from '../images/WORK/Check_Mail.webp';
import Creat_Pass_Web from '../images/WORK/Creat _Password.webp';
import Dashboard_Web  from '../images/WORK/Dashboard.webp';
import Reset_Pass_Web from '../images/WORK/Reset_Password.webp';
import Header_Web     from '../images/WORK/Header_Web.webp';
import Dashboard_Mob  from '../images/WORK/Dashboard_Mobile.webp';
import Login_Mob      from '../images/WORK/Login_mob.webp';
import Rest_Mob       from '../images/WORK/Rest_Mob.webp';

const Fancybox = ({ delegate = "[data-fancybox]", options = {}, children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let NativeFancybox;
    const container = containerRef.current;

    const initFancybox = async () => {
      const module = await import("@fancyapps/ui");
      NativeFancybox = module.Fancybox;
      await import("@fancyapps/ui/dist/fancybox/fancybox.css");
      
      if (container) {
        NativeFancybox.bind(container, delegate, options);
      }
    };

    initFancybox();

    return () => {
      if (NativeFancybox) {
        NativeFancybox.unbind(container);
        NativeFancybox.close();
      }
    };
  }, [delegate, options]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

const ImageGallery = () => {
  const galleryItems = [
    { id: 1, src: Creat_Pass_Web, title: "Creat Password", desc: "Ui design for Login" },
    { id: 2, src: Check_Mail_Web, title: "Mail Confirmation", desc: "Ui design for Confirmation" },
    { id: 3, src: Reset_Pass_Web, title: "Reset Password", desc: "Ui design for Generate Password" },
    { id: 4, src: Dashboard_Web, title: "Dashboard", desc: "Ui design for Dashboard" },
    { id: 5, src: Header_Web, title: "Header Web page", desc: "Ui design for Header" },
    { id: 6, src: Creat_Acc_Web, title: "Creat Account", desc: "Ui design for Regestar" },
    { id: 7, src: Login_Mob, title: "Sign In", desc: "Ui design for Sign In" },
    { id: 8, src: Rest_Mob, title: "Create Password", desc: "Ui design for Create Password" },
    { id: 9, src: Dashboard_Mob, title: "Dashboard", desc: "Ui design for Dashboard" },
  ];

  return (
    <Fancybox>
      <div className="py-24 bg-[#252830] text-white min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Image <span className="text-[#007bff]">gallary</span> 
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="bg-[#1e2227] rounded-xl overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <a href={item.src} data-fancybox="gallery" className="block w-full h-full">
                  <div className="aspect-video w-full overflow-hidden">
                    <img src={item.src} loading="lazy" alt={item.title} width="800" height="600" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2 text-white">{item.title}</h2>  
                    <p className="text-gray-300 text-sm">{item.desc}</p> 
                  </div>
                </a>         
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fancybox>
  );
};

export default ImageGallery;
