import React, { useRef, useEffect } from "react";
//style 
//style 
import '../style/App.css';
import '../style/Imagegallarey.css';

//lib
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

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
    const container = containerRef.current;

    if (container) {
      NativeFancybox.bind(container, delegate, options);
    }

    return () => {
      if (container) {
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
  return (
    <Fancybox>
      <div className="container gallary">
      <h1>
          Image
          <span>
            gallary
          </span> 
        </h1>

        <div className="row">
          <div className=" col-lg-4 mx-auto">
            <div className="backg">
              <div className="box">
                <a href={Creat_Pass_Web} data-fancybox="gallery">
                  <img src={Creat_Pass_Web} loading="lazy" alt="Creat_Pass_Web"/>
                
                <h1>
                  Creat Password
                </h1>  

                <p>
                  Ui design for Login
                </p> 

                </a>         
              </div>
            </div>
          </div>

          <div className=" col-lg-4 mx-auto">
            <div className="backg">
              <div className="box">
                <a href={Check_Mail_Web} data-fancybox="gallery">
                  <img src={Check_Mail_Web} loading="lazy" alt="Check_Mail_Web"/>
                

                <h1>
                  Mail Confirmation
                </h1>  

                <p>
                  Ui design for Confirmation
                </p> 

                </a>         
              </div>
            </div>
          </div>

          <div className=" col-lg-4 mx-auto">
            <div className="backg">
              <div className="box">
                <a href={Reset_Pass_Web} data-fancybox="gallery">
                  <img src={Reset_Pass_Web} loading="lazy" alt="Reset_Pass_Web"/>
                

                <h1>
                  Reset Password
                </h1>  

                <p>
                  Ui design for Generate Password
                </p> 

                </a>         
              </div>
            </div>
          </div>

          <div className=" col-lg-4 mx-auto">
            <div className="backg">
              <div className="box">
                <a href={Dashboard_Web} data-fancybox="gallery">
                  <img src={Dashboard_Web} loading="lazy" alt="Dashboard_Web"/>
                

                <h1>
                  Dashboard 
                </h1>  

                <p>
                  Ui design for Dashboard
                </p> 

                </a>         
              </div>
            </div>
          </div>

          <div className=" col-lg-4 mx-auto">
            <div className="backg">
              <div className="box">
                <a href={Header_Web } data-fancybox="gallery">
                  <img src={Header_Web } loading="lazy" alt="Header_Web"/>
                

                <h1>
                  Header Web page
                </h1>  

                <p>
                  Ui design for Header
                </p> 

                </a>         
              </div>
            </div>
          </div>

          <div className=" col-lg-4 mx-auto">
            <div className="backg">
              <div className="box">
                <a href={Creat_Acc_Web} data-fancybox="gallery">
                  <img src={Creat_Acc_Web} loading="lazy" alt="Creat_Acc_Web"/>
                

                <h1>
                  Creat Account 
                </h1>  

                <p>
                  Ui design for Regestar
                </p> 

                </a>         
              </div>
            </div>
          </div>

          <div className=" col-lg-4 mx-auto">
            <div className="backg">
              <div className="box">
                <a href={Login_Mob} data-fancybox="gallery">
                  <img src={Login_Mob} loading="lazy" alt="Login_Mob"/>
                

                <h1>
                  Sign In
                </h1>  

                <p>
                  Ui design for Sign In
                </p> 

                </a>         
              </div>
            </div>
          </div>

          <div className=" col-lg-4 mx-auto">
            <div className="backg">
              <div className="box">
                <a href={Rest_Mob} data-fancybox="gallery">
                  <img src={Rest_Mob} loading="lazy" alt="Rest_Mob"/>
                
                <h1>
                  Create Password
                </h1>  

                <p>
                  Ui design for Create Password
                </p> 

                </a>         
              </div>
            </div>
          </div>
        
          <div className=" col-lg-4 mx-auto">
            <div className="backg">
              <div className="box">
                <a href={Dashboard_Mob} data-fancybox="gallery">
                  <img src={Dashboard_Mob} loading="lazy" alt="Dashboard_Mob"/>
                

                <h1>
                  Dashboard
                </h1>  

                <p>
                  Ui design for Dashboard
                </p> 

                </a>         
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fancybox>
  );
};

export default ImageGallery;
