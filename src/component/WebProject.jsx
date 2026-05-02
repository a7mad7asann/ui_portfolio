import React from 'react';

//style 
import '../style/App.css';
import '../style/WebProject.css';
import '../style/Media/WebProjectMedia.css'

//images
import icon    from '../images/icons/mouse-squareicon.svg'
import banner1 from '../images/banner/E-commarce_banner.webp';
import banner2 from '../images/banner/hotel_banner.webp';
import banner3 from '../images/banner/porfolio_banner.webp';
import banner4 from '../images/banner/landing-page_banner.webp';


// lib
import { Link } from  'react-router-dom';

const WebProject = () => {
  return (
    <>
      <div className="container projecte">
      <h1>
          Web 
          <span>
            design
          </span> 
        </h1>
        
        <div className="img-card">
          <div className="row">
            <div className="banner col-lg-6 col-sm-12" data-aos="fade-right">
              <img src={banner1}  loading='lazy' alt="" />

              <Link target="_blank" to="https://www.figma.com/proto/j5es1m7Qt3V4Oe7ul0PCJp/Untitled?page-id=0%3A1&node-id=30-25&viewport=265%2C180%2C0.12&t=KnvN53RcWVHbvgBj-1&scaling=min-zoom" className="overlay">
                <h2>
                  E-commarce
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

                <Link target="_blank" to="https://www.figma.com/proto/2tSqLZL1Ue0elaT3MPMuou/Landing-page?page-id=0%3A1&node-id=1-2&viewport=454%2C295%2C0.06&t=ofkbqqAWNnRLcCle-1&scaling=min-zoom" className='link'> 
                  <img src={icon} loading='lazy' alt="" />
                </Link>
              </Link>
            </div>

            <div className="banner col-lg-6 col-sm-12" data-aos="fade-left">
              <img src={banner2}  loading='lazy' alt="" />

              <Link target="_blank" to="https://www.figma.com/proto/2tSqLZL1Ue0elaT3MPMuou/Landing-page?page-id=0%3A1&node-id=1-2&viewport=454%2C295%2C0.06&t=Zbv0nbL1IhItjQOg-1&scaling=min-zoom" className="overlay">
                <h2>
                  hotel 
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

                <Link target="_blank" to="https://www.figma.com/proto/2tSqLZL1Ue0elaT3MPMuou/Landing-page?page-id=0%3A1&node-id=1-2&viewport=454%2C295%2C0.06&t=Zbv0nbL1IhItjQOg-1&scaling=min-zoom" className='link'> 
                  <img src={icon} loading='lazy' alt="" />
                </Link>
              </Link>
            </div>

            <div className="banner col-lg-6 col-sm-12" data-aos="fade-up-right">
              <img src={banner3}  loading='lazy' alt="" />

              <Link target="_blank" to="https://www.figma.com/proto/ERuMjgYBLe0Z8xVNZdil0q/protfolio?page-id=0%3A1&node-id=1-171&viewport=744%2C686%2C0.2&t=2t69ARNRJBABYkB5-1&scaling=min-zoom" className="overlay">
                <h2>
                  Portfolio
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

                <Link  target="_blank" to="https://www.figma.com/proto/ERuMjgYBLe0Z8xVNZdil0q/protfolio?page-id=0%3A1&node-id=1-171&viewport=744%2C686%2C0.2&t=2t69ARNRJBABYkB5-1&scaling=min-zoom" className='link'> 
                  <img src={icon} loading='lazy' alt="" />
                </Link>
              </Link>
            </div>

            <div className="banner col-lg-6 col-sm-12" data-aos="fade-up-right">
              <img src={banner4}  loading='lazy' alt="" />

              <Link target="_blank" to="https://www.figma.com/proto/zgwFp5WQ2d98gU7U7xCEtG/Untitled?page-id=0%3A1&node-id=30-147&viewport=90%2C1686%2C0.14&t=uEMKnPo6GLFbIY5B-1&scaling=min-zoom" className="overlay">
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

                <Link  target="_blank" to="https://www.figma.com/proto/zgwFp5WQ2d98gU7U7xCEtG/Untitled?page-id=0%3A1&node-id=30-147&viewport=90%2C1686%2C0.14&t=uEMKnPo6GLFbIY5B-1&scaling=min-zoom" className='link'> 
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

export default WebProject
