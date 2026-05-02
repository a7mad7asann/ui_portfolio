import React, { useEffect } from 'react';

//style 
import '../style/App.css';
import '../style/AppProject.css';
import '../style/Media/AppProjectMedia.css'

//images
import icon    from '../images/icons/mouse-squareicon.svg'
import banner1 from '../images/banner/E-commarce_banner_mob.webp';
import banner2 from '../images/banner/landing-page_banner_mob.webp';

// lib
import { Link } from  'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

const AppProject = () => {
   //Initialize AOS when the component mounts
    useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <>
      <div className="container projecti">
        <h1>
          App 
          <span>
            design
          </span> 
        </h1>

        <div className="img-card">
          <div className="row">
            <div className="banner col-lg-6 col-sm-12" data-aos="fade-right">
              <img src={banner1}  loading='lazy' alt="" />

              <Link  target='_blanc' to="https://www.figma.com/proto/a99xv3l9dBpqNPhu0pbgLw/Untitled?page-id=9%3A37&node-id=80-7&viewport=1750%2C375%2C0.16&t=f8iUa6Dhw4PWSo3A-1&scaling=min-zoom&starting-point-node-id=144%3A254" className="overlay">
                <h2>
                  E-Commarce
                </h2>
                
                <p>
                  Et blanditiis sit neque provident soluta quibusdam. Ut optio nobis. 
                  Eligendi voluptas qui maxime id quo culpa qui. 
                  Nihil error necessitatibus distinctio explicabo et. 
                </p>

                <p>
                  Voluptas quas placeat. Quia aut aut vel harum ullam eum.
                  Nihil minima fugit fuga tempore eum aut consequatur. 
                  Dolores iusto minus ab soluta in temporibus fuga
                </p>      

                <Link target='_blanc' to="https://www.figma.com/proto/a99xv3l9dBpqNPhu0pbgLw/Untitled?page-id=9%3A37&node-id=80-7&viewport=1750%2C375%2C0.16&t=f8iUa6Dhw4PWSo3A-1&scaling=min-zoom&starting-point-node-id=144%3A254" className='link'> 
                  <img src={icon} loading='lazy' alt="" />
                </Link>
              </Link>
            </div>

            <div className="banner col-lg-6 col-sm-12" data-aos="fade-left">
              <img src={banner2}  loading='lazy' alt="" />

              <Link  target='_blanc' to="https://www.figma.com/proto/zgwFp5WQ2d98gU7U7xCEtG/Untitled?page-id=0%3A1&node-id=30-28&viewport=90%2C1686%2C0.14&t=uEMKnPo6GLFbIY5B-1&scaling=min-zoom" className="overlay">
                <h2>
                  Landing-Page
                </h2>
                      
                <p>
                  Et blanditiis sit neque provident soluta quibusdam. Ut optio nobis. 
                  Eligendi voluptas qui maxime id quo culpa qui. 
                  Nihil error necessitatibus distinctio explicabo et. 
                </p>

                <p>
                  Voluptas quas placeat. Quia aut aut vel harum ullam eum.
                  Nihil minima fugit fuga tempore eum aut consequatur. 
                  Dolores iusto minus ab soluta in temporibus fuga
                </p>

                <Link target='_blanc' to="https://www.figma.com/proto/zgwFp5WQ2d98gU7U7xCEtG/Untitled?page-id=0%3A1&node-id=30-28&viewport=90%2C1686%2C0.14&t=uEMKnPo6GLFbIY5B-1&scaling=min-zoom" className='link'> 
                  <img src={icon} loading='lazy' alt="" />
                </Link>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppProject
