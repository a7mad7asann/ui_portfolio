import React, { useEffect } from 'react';

//style
import '../style/App.css';
import '../style/Services.css';
import '../style/Media/ServicesMedia.css'



//images
import brush from '../images/icons/brush.svg';

// Import AOS for animations
import 'aos/dist/aos.css';
import AOS from 'aos';


const Services = () => {
    //Initialize AOS when the component mounts
    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
      });
    }, []);

  return (
    <>
      <section className='services' id='services'>
        <div className="container">
          <div className="contain">
            <h1>
              Our 
              <span>
                Services
              </span>
            </h1>

            <div className="boxes row">
              <div className="serv-box col-sm-12" data-aos="fade-right">
                <img src={brush} loading='lazy' alt="" />

                <h2>
                  ui/ux designer
                </h2>

                <p>
                  Et blanditiis sit neque provident soluta quibusdam. Ut optio nobis. 
                  Eligendi voluptas qui maxime id quo culpa qui. Nihil error necessitatibus 
                  distinctio explicabo et. 
                </p>

                <p>
                  Voluptas quas placeat. Quia aut aut vel harum 
                  ullam eum. Nihil minima fugit fuga
                </p>

                <button type='submit' className='read-more' data-aos="flip-up">
                  Coming soon ...
                </button>
              </div>

              <div className="serv-box col-sm-12" data-aos="fade-up">
                <img src={brush} loading='lazy' alt="" />

                <h2>
                  Web designer
                </h2>

                <p>
                  Et blanditiis sit neque provident soluta quibusdam. Ut optio nobis. 
                  Eligendi voluptas qui maxime id quo culpa qui. Nihil error necessitatibus 
                  distinctio explicabo et. 
                </p>

                <p>
                  Voluptas quas placeat. Quia aut aut vel harum 
                  ullam eum. Nihil minima fugit fuga
                </p>

                <button type='submit' className='read-more' data-aos="flip-up">
                  Coming soon ...
                </button>
              </div>

              <div className="serv-box col-sm-12" data-aos="fade-left">
                <img src={brush} loading='lazy' alt="" />

                <h2>
                  app designer
                </h2>

                <p>
                  Et blanditiis sit neque provident soluta quibusdam. Ut optio nobis. 
                  Eligendi voluptas qui maxime id quo culpa qui. Nihil error necessitatibus 
                  distinctio explicabo et. 
                </p>

                <p>
                  Voluptas quas placeat. Quia aut aut vel harum 
                  ullam eum. Nihil minima fugit fuga
                </p>

                <button type='submit' className='read-more' data-aos="flip-up">
                  Coming soon ...
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
