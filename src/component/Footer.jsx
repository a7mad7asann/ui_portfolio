import React from 'react';

//lib
import { Link } from  'react-router-dom';

//style
import '../style/App.css';
import '../style/Footer.css';


const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-bottom">
        <p>
          &copy; Developed By Ahmad Hassn. All rights reserved.
            
            <Link to="https://wa.me/+201061380485" className='link'>
              Contact the programmer
            </Link>
        </p>
      </div>
    </footer>
    </>
  )
}

export default Footer
