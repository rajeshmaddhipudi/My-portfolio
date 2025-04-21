import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  isDarkTheme: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkTheme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <div className={`${isDarkTheme ? 'dark-theme' : 'light-theme'} md:pl-64`}>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="pt-16 md:pt-0">
            <h1 className={`section-heading mb-8 ${
              isDarkTheme 
                ? 'text-[#9F7AEA]' 
                : 'text-gradient'
            }`}>Get in Touch</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="glass-card rounded-xl p-6">
                  <h2 className={`section-subheading mb-6 ${
                    isDarkTheme ? 'text-gray-200' : 'text-gray-800'
                  }`}>Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${
                        isDarkTheme ? 'bg-[#2D2B36]' : 'bg-blue-50'
                      }`}>
                        <Mail className={isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-500'} />
                      </div>
                      <div>
                        <p className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>Email</p>
                        <a 
                          href="mailto:Rajeshmaddhipudi@gmail.com"
                          className={`font-medium ${
                            isDarkTheme ? 'text-gray-200 hover:text-[#9F7AEA]' : 'text-gray-800 hover:text-blue-600'
                          }`}
                        >
                          rajeshmaddhipudi@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${
                        isDarkTheme ? 'bg-[#2D2B36]' : 'bg-blue-50'
                      }`}>
                        <Phone className={isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-500'} />
                      </div>
                      <div>
                        <p className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>Phone</p>
                        <a 
                          href="tel:+4915901409064"
                          className={`font-medium ${
                            isDarkTheme ? 'text-gray-200 hover:text-[#9F7AEA]' : 'text-gray-800 hover:text-blue-600'
                          }`}
                        >
                          +4915901409064
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${
                        isDarkTheme ? 'bg-[#2D2B36]' : 'bg-blue-50'
                      }`}>
                        <MapPin className={isDarkTheme ? 'text-[#9F7AEA]' : 'text-blue-500'} />
                      </div>
                      <div>
                        <p className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>Location</p>
                        <p className={`font-medium ${
                          isDarkTheme ? 'text-gray-200' : 'text-gray-800'
                        }`}>
                            Mönchengladbach, Germany
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h2 className={`section-subheading mb-6 ${
                    isDarkTheme ? 'text-gray-200' : 'text-gray-800'
                  }`}>Connect with Me</h2>
                  
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/in/rajesh-maddhipudi-0b0b0b0b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg transition-colors ${
                        isDarkTheme 
                          ? 'bg-[#2D2B36] hover:bg-[#1E1B26]' 
                          : 'bg-blue-50 hover:bg-blue-100'
                      }`}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg transition-colors ${
                        isDarkTheme 
                          ? 'bg-[#2D2B36] hover:bg-[#1E1B26]' 
                          : 'bg-blue-50 hover:bg-blue-100'
                      }`}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="glass-card rounded-xl p-6">
                <h2 className={`section-subheading mb-6 ${
                  isDarkTheme ? 'text-gray-200' : 'text-gray-800'
                }`}>Send a Message</h2>

                {status.type && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    status.type === 'success'
                      ? isDarkTheme ? 'bg-green-900/20 text-green-400' : 'bg-green-50 text-green-600'
                      : isDarkTheme ? 'bg-red-900/20 text-red-400' : 'bg-red-50 text-red-600'
                  }`}>
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label 
                      htmlFor="name"
                      className={`block mb-2 ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border ${
                        isDarkTheme 
                          ? 'bg-[#2D2B36] border-gray-700 text-gray-200 focus:border-[#9F7AEA]' 
                          : 'bg-white border-gray-300 text-gray-800 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="email"
                      className={`block mb-2 ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border ${
                        isDarkTheme 
                          ? 'bg-[#2D2B36] border-gray-700 text-gray-200 focus:border-[#9F7AEA]' 
                          : 'bg-white border-gray-300 text-gray-800 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="subject"
                      className={`block mb-2 ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border ${
                        isDarkTheme 
                          ? 'bg-[#2D2B36] border-gray-700 text-gray-200 focus:border-[#9F7AEA]' 
                          : 'bg-white border-gray-300 text-gray-800 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="message"
                      className={`block mb-2 ${
                        isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        isDarkTheme 
                          ? 'bg-[#2D2B36] border-gray-700 text-gray-200 focus:border-[#9F7AEA]' 
                          : 'bg-white border-gray-300 text-gray-800 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                      isDarkTheme
                        ? 'bg-[#9F7AEA] hover:bg-[#805AD5] text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 