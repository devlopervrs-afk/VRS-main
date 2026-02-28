import React, { useState } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Unable to send your request right now.');
      }

      setStatus('success');
      setMessage('Thank you. Our team will contact you shortly.');
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <div className=" flex items-center justify-center p-4 md:p-12 font-sans text-black">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Side - Image */}
        <div className="w-full h-full">
          <img 
            // Using a placeholder image similar to the reference
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Fashion Models" 
            className="w-full h-[500px] lg:h-[600px] object-cover rounded-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-between h-full">
          
          {/* Header */}
          <h1 className="text-5xl md:text-7xl font-bold  tracking-tight">
            Contact Us
          </h1>

          {/* Form & Info Container */}
          <div className="border border-black p-8 md:p-12 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
              
              {/* Form Section */}
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="group">
                  <label htmlFor='name' className="block text-sm font-medium mb-2 text-gray-800">Full Name</label>
                  <input 
                    id='name'
                    type="text" 
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-black py-2 outline-none focus:border-gray-500 transition-colors"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor='email' className="block text-sm font-medium mb-2 text-gray-800">E-mail</label>
                  <input 
                    id='email'
                    type="email" 
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-black py-2 outline-none focus:border-gray-500 transition-colors"
                  />
                </div>

                <div className="group">
                  <label htmlFor='phone' className="block text-sm font-medium mb-2 text-gray-800">Phone Number</label>
                  <input 
                    id='phone'
                    type="tel"
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-black py-2 outline-none focus:border-gray-500 transition-colors"
                  />
                </div>

                <button
                  type='submit'
                  disabled={status === 'loading'}
                  className="bg-black text-white px-8 py-3 rounded-full mt-4 hover:bg-gray-800 transition-colors text-sm font-medium disabled:opacity-60"
                >
                  {status === 'loading' ? 'Sending...' : 'Contact Us'}
                </button>

                {status !== 'idle' && (
                  <p className={`text-sm ${status === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                    {message}
                  </p>
                )}
              </form>

              {/* Contact Info Section */}
              <div className="flex flex-col justify-between pl-0 md:pl-8">
                <div className="space-y-8 mt-8 md:mt-0">
                  <div>
                    <h3 className="text-lg font-medium mb-1">Contact</h3>
                    <p className="text-gray-600 font-light">info@vrsinteriors.com</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-1">Based in</h3>
                    <p className="text-gray-600 font-light">
                      V R S TECHNICAL SERVICES LLC <br /> Street No. 29, Al Quoz Industrial Area 4, Dubai, U.A.E
                    </p>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 mt-12 md:mt-0 items-end">
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <Facebook size={20} fill="black" className="text-black" />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <Instagram size={20} className="text-black" />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <Twitter size={20} fill="black" className="text-black" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
