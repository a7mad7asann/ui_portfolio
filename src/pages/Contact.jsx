import React, { useEffect , useState } from 'react';

//style 
import '../style/App.css';
import '../style/Contact.css';
import '../style/Media/ContactMedia.css'


// Import AOS for animations
import 'aos/dist/aos.css';
import AOS from 'aos';

const Contact = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Send WhatsApp message
  const sendWhatsapp = (e) => {
    e.preventDefault();
    const phonenumber = "+201029698780";
    const { firstName, lastName, email, phone, message } = formData;
    const name = `${firstName} ${lastName}`;

    const url = `https://wa.me/${phonenumber}?text=` +
      `*Name :* ${encodeURIComponent(name)}%0a` +
      `*E-mail :* ${encodeURIComponent(email)}%0a` +
      `*Phone :* ${encodeURIComponent(phone)}%0a` +
      `*Message :* ${encodeURIComponent(message)}%0a`;

    window.open(url, '_blank').focus();
  };

  return (
    <>
      <section id='contact'>
        <div className="container">
          <div className="contain">
            <h1>
              FeedBack
              <span>
                me?
              </span>
            </h1>

            <form onSubmit={sendWhatsapp}>
              <div className="conten row">
                <div className="con col-lg-6 col-sm-12">
                  <div className="inbut-f" data-aos="fade-right">
                    <input 
                      type="text" 
                      className='f-name' 
                      placeholder='First Name' 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>

                <div className="con col-lg-6 col-sm-12">
                  <div className="inbut-f" data-aos="fade-left">
                    <input 
                      type="text"  
                      className='l-name' 
                      placeholder='Last Name' 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>

                <div className="con  col-lg-6 col-sm-12">
                  <div className="inbut-f" data-aos="fade-up-right">
                    <input 
                      type="tel" 
                      className='phone' 
                      placeholder='Number' 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>

                <div className="con  col-lg-6 col-sm-12">
                  <div className="inbut-f" data-aos="fade-up-left">
                    <input 
                      type="email" 
                      className='email' 
                      placeholder='Email' 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
              </div>

            <div className="con col-lg-12 col-sm-12">
              <textarea 
              
                id="message" 
                placeholder='Message' 
                name="message" 
                rows="6" 
                cols="80" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                data-aos="fade-up">
              </textarea>
            </div>

              <button  type='submit' className='send-bt' data-aos="fade-up" onClick={sendWhatsapp}>
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;