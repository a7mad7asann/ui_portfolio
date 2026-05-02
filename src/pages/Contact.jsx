import React, { useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
    <section className="py-24 bg-[#1a1d21] text-white" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl font-bold relative z-10">
            Contact <span className="text-[#007bff]">Me?</span>
          </h2>
        </div>

        <form onSubmit={sendWhatsapp} className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div data-aos="fade-right">
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name" 
                className="w-full bg-[#1e2227] border border-transparent focus:border-[#007bff] rounded-lg px-6 py-4 outline-none transition-all duration-300 text-white placeholder-gray-400 font-bold"
                required
              />
            </div>
            <div data-aos="fade-left">
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="First Name" 
                className="w-full bg-[#1e2227] border border-transparent focus:border-[#007bff] rounded-lg px-6 py-4 outline-none transition-all duration-300 text-white placeholder-gray-400 font-bold"
                required
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <input 
                type="text" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="First Name" 
                className="w-full bg-[#1e2227] border border-transparent focus:border-[#007bff] rounded-lg px-6 py-4 outline-none transition-all duration-300 text-white placeholder-gray-400 font-bold"
                required
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <input 
                type="text" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="First Name" 
                className="w-full bg-[#1e2227] border border-transparent focus:border-[#007bff] rounded-lg px-6 py-4 outline-none transition-all duration-300 text-white placeholder-gray-400 font-bold"
                required
              />
            </div>
          </div>
          
          <div className="mb-10" data-aos="fade-up" data-aos-delay="300">
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="First Name" 
              rows="6"
              className="w-full bg-[#1e2227] border border-transparent focus:border-[#007bff] rounded-lg px-6 py-4 outline-none transition-all duration-300 text-white placeholder-gray-400 font-bold resize-none"
              required
            ></textarea>
          </div>

          <div className="flex justify-center" data-aos="zoom-in">
            <button 
              type="submit" 
              className="bg-[#007bff] hover:bg-blue-600 text-white font-bold py-3 px-16 rounded-lg transition-all duration-300 shadow-[0_0_30px_rgba(0,123,255,0.6)]"
            >
              Send
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default Contact;
