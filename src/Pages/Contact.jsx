import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send, Linkedin, Github, Globe } from "lucide-react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const SocialLinkCard = ({ icon: Icon, title, subtitle, link, color, hoverColor }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:scale-[1.02]"
  >
    <div 
      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
      style={{ backgroundColor: `${color}20` }}
    >
      <Icon className="w-6 h-6 transition-all duration-300 group-hover:scale-110" style={{ color }} />
    </div>
    <div className="flex-1">
      <h3 className="text-white font-medium">{title}</h3>
      <p className="text-gray-400 text-sm">{subtitle}</p>
    </div>
    <div 
      className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
      style={{ backgroundColor: `${hoverColor}10` }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        style={{ color: hoverColor }}
      >
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </div>
  </a>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Sending Message...',
      html: 'Please wait while we send your message',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      // Get form data
      const form = e.target;
      const formData = new FormData(form);

      // Submit form
      await form.submit();

      // Show success message
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonColor: '#6366f1',
        timer: 2000,
        timerProgressBar: true
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#6366f1'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          <span
            style={{
              color: "#6366f1",
              backgroundImage:
                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Me
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Have a question or interested in working together? Get in touch with me directly.
        </p>
      </div>

      <div
        className="h-auto py-10 flex items-center justify-center px-[5%] md:px-[10%]"
        id="Contact"
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form Section */}
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 hover:shadow-[#6366f1]/10"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Get in Touch
                </h2>
                <p className="text-gray-400">
                  Send me a message and I'll get back to you soon.
                </p>
              </div>
              <Share2 className="w-10 h-10 text-[#6366f1] opacity-50" />
            </div>

            <form 
              action="https://formsubmit.co/sajidalam786@gmail.com" 
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="relative group"
              >
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  required
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="relative group"
              >
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  required
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="relative group"
              >
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9.9rem] disabled:opacity-50"
                  required
                />
              </div>
              <button
                data-aos="fade-up"
                data-aos-delay="400"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Social Links & Info Section */}
          <div 
            data-aos="fade-left"
            data-aos-duration="1200"
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transition-all duration-300 hover:shadow-[#6366f1]/10 hover:border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <SocialLinkCard 
                  icon={Mail}
                  title="Email"
                  subtitle="sajidalam786@gmail.com"
                  link="mailto:sajidalam786@gmail.com"
                  color="#6366f1"
                  hoverColor="#a855f7"
                />
                
                <SocialLinkCard 
                  icon={Linkedin}
                  title="LinkedIn"
                  subtitle="Connect with me professionally"
                  link="https://www.linkedin.com/in/muhammad-sajid-alam"
                  color="#0A66C2"
                  hoverColor="#0284c7"
                />
                
                <SocialLinkCard 
                  icon={Github}
                  title="GitHub"
                  subtitle="Check out my code repositories"
                  link="https://github.com/Sajid78612"
                  color="#ffffff"
                  hoverColor="#a1a1aa"
                />
                
                <SocialLinkCard 
                  icon={Globe}
                  title="Kedro"
                  subtitle="Visit the Kedro framework site"
                  link="https://kedro.org"
                  color="#ff4b4b"
                  hoverColor="#f87171"
                />
              </div>
            </div>
            
            <div 
              data-aos="fade-up"
              data-aos-duration="1400"
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transition-all duration-300 hover:shadow-[#6366f1]/10 hover:border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Quote to Live By
              </h3>
              
              <blockquote className="relative">
                <div className="absolute -top-4 -left-2 text-[#6366f1] opacity-30 text-6xl">"</div>
                <p className="relative text-gray-300 italic text-lg leading-relaxed ml-4">
                  Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.
                </p>
                <footer className="mt-4 text-right text-gray-400">
                  — Steve Jobs
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;