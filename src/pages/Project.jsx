import React, { useEffect } from 'react';
//style 
import '../style/App.css';
import '../style/Project.css';
import '../style/Media/ProjectMedia.css'

//images
import icon    from '../images/icons/mouse-squareicon.svg'
import banner1 from '../images/banner/banner1.webp';
import banner2 from '../images/banner/banner2.webp';
import banner3 from '../images/banner/banner3.webp';

// lib
import { Link } from  'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';


const Project = () => {
  //Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <>
      <section className='project' id='project'>
        <div className="container">
          <div className="contain">  
            <h1>
                our
              
                <span>
                  project
                </span>
            </h1>

            <div className="img-card">
              <div className="row">
                <div className="banner col-lg-6 col-sm-12" data-aos="fade-right">
                  <img src={banner1}  loading='lazy' alt="" />

                  <div className="overlay">
                    <h2>
                      web design
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

                    <Link to='/Web_Project' className='link'> 
                      <img src={icon} loading='lazy' alt="" />
                    </Link>
                  </div>
                </div>

                <div className="banner col-lg-6 col-sm-12" data-aos="fade-left">
                  <img src={banner2}  loading='lazy' alt="" />

                  <div className="overlay">
                    <h2>
                      APP design
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

                    <Link to='/App_Project' className='link'> 
                      <img src={icon} loading='lazy' alt="" />
                    </Link>
                  </div>
                </div>

                <div className="banner col-lg-6 col-sm-12" data-aos="fade-up-right">
                  <img src={banner3}  loading='lazy' alt="" />

                  <div className="overlay">
                    <h2>
                      Galary
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

                    <Link  to='/Gallary' className='link'> 
                      <img src={icon} loading='lazy' alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
