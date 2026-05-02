import React, { useEffect } from 'react';
//style
import '../style/App.css';
import '../style/Header.css';
import '../style/Media/HeaderMedia.css'

//images
import profile   from '../images/header_photo/hossam-pic.webp';
import facebook  from  '../images/icons/facebook-hex.svg';
import insta     from  '../images/icons/insta.svg';
import x         from  '../images/icons/x.svg';
import linked    from  '../images/icons/linked-in.svg';

//component
import TypedText from '../component/TypedText';
import DownBtn from '../component/DownBtn';

// lib
import { Link } from  'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Header = () => {
     //Initialize AOS when the component mounts
     useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
      });
    }, []);
  
  return (
    <>
    <header>
      <div className="container">
        <div className="contain">
          <div className="aside-left animate__animated animate__bounceInRight">
            <h2 className='animate__animated animate__bounceInRight'>
              Hello it's me 
            </h2>

            <h1 className='animate__animated animate__bounceInRight'>
              hosssam mohamed
            </h1>

            <h3>
              and i'm 
              <span className='input'>
                <TypedText/>
              </span>
            </h3>

            <p>
                I'm a 21 years. 
                Have some expert on Ui/Ux . 
                I hope you enjoy my profile.
            </p>

            <div className="social-icon">
              <div className="icon">
                <Link to="https://www.linkedin.com/in/hossam-mohamed-775347257/" className="icon">
                <div className="bk-img">
                  <img src={linked}
                  loading='lazy'
                  alt="" />
                </div>
                </Link>
              </div>

              <div className="icon">
                <Link to="https://www.facebook.com/profile.php?id=100068724381075" className="bk-img">
                  <img src={facebook}
                  loading='lazy'
                  alt="" />
                </Link>
              </div>

              <div className="icon">
                <Link to="https://www.instagram.com/h_o_s_s_a_m.0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="bk-img">
                  <img src={insta}
                  loading='lazy'
                  alt="" />
                </Link>
              </div>

              <div className="icon">
                <Link to="https://x.com/HossamM70877388?t=NMZcG5LrLqYoA44nAigYHg&s=09" className="bk-img">
                  <img src={x}
                  loading='lazy'
                  alt="" />
                </Link>
              </div>
            </div>

            <DownBtn/>
          </div>

          <div className="aside-right">
            <div className="back">
              <div class="triangle-right"></div>
              <div class="triangle-left"></div>
              <img  data-aos="zoom-in-left" src={profile} loading='lazy' alt="" />
            </div>
          </div>
        </div>
      </div>
    </header> 
    </>
  )
}

export default Header
