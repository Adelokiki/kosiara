import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@kosiara.com",
      subtext: "We'll respond within 24 hours",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtext: "Mon-Fri, 9AM-6PM EST",
      color: "text-green-400"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Fashion Avenue",
      subtext: "New York, NY 10001",
      color: "text-purple-400"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Sat: 10AM-8PM",
      subtext: "Sunday: 12PM-6PM",
      color: "text-orange-400"
    }
  ];

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unworn items in original packaging."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide! International orders typically arrive within 10-14 business days."
    },
    {
      question: "Are your jewelry pieces hypoallergenic?",
      answer: "Yes, all our pieces are made with hypoallergenic materials and are nickel-free."
    },
    {
      question: "Do you offer custom jewelry design?",
      answer: "Absolutely! Contact us to discuss your custom design ideas and we'll bring them to life."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Elegant Jewelry Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D1B2A]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/60 to-[#0D1B2A]/40"></div>
        </div>
        
        {/* Animated Floating Elements */}
        <div className="absolute top-16 left-8 w-6 h-6 bg-[#F6D1C1]/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-32 right-12 w-4 h-4 bg-[#F6D1C1]/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-24 left-16 w-8 h-8 bg-[#F6D1C1]/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-8 w-3 h-3 bg-[#F6D1C1]/50 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2s' }}></div>
        <div className="absolute top-1/2 left-4 w-5 h-5 bg-[#F6D1C1]/25 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-[#F6D1C1]/60 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        
        <div className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}>
          <div className="mb-8">
            <div className={`inline-block transition-all duration-1500 delay-300 ${
              isVisible ? 'opacity-100 rotate-0' : 'opacity-0 rotate-12'
            }`}>
              <div className="w-20 h-20 bg-[#F6D1C1]/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-[#F6D1C1]/30">
                <div className="w-12 h-12 bg-[#F6D1C1]/30 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-6 h-6 bg-[#F6D1C1] rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className={`font-playfair text-5xl md:text-7xl font-bold text-[#F6D1C1] mb-6 leading-tight transition-all duration-1200 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Get in Touch
          </h1>
          <p className={`text-[#F6D1C1]/90 text-xl md:text-2xl font-light max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          
          {/* Decorative Line */}
          <div className={`mt-8 flex justify-center transition-all duration-1500 delay-900 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#F6D1C1] to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group bg-[#F6D1C1]/5 backdrop-blur-sm border border-[#F6D1C1]/20 rounded-2xl p-8 text-center hover:bg-[#F6D1C1]/10 hover:border-[#F6D1C1]/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#F6D1C1]/10 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${info.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className={`w-8 h-8 ${info.color}`} />
                </div>
                <h3 className="text-[#F6D1C1] font-semibold text-xl mb-3 playfair">
                  {info.title}
                </h3>
                <p className="text-[#F6D1C1]/90 font-medium mb-2">
                  {info.details}
                </p>
                <p className="text-[#F6D1C1]/60 text-sm">
                  {info.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="bg-[#F6D1C1]/5 backdrop-blur-sm border border-[#F6D1C1]/20 rounded-3xl p-8 lg:p-12">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#F6D1C1] mb-8">
                  Send us a Message
                </h2>
                
                {isSubmitted && (
                  <div className="mb-8 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <p className="text-green-400 font-medium">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#F6D1C1] font-medium mb-3">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-[#0D1B2A]/50 border-2 border-[#F6D1C1]/30 rounded-xl text-[#F6D1C1] placeholder-[#F6D1C1]/50 focus:border-[#F6D1C1] focus:outline-none transition-all duration-300 focus:bg-[#0D1B2A]/70"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#F6D1C1] font-medium mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-[#0D1B2A]/50 border-2 border-[#F6D1C1]/30 rounded-xl text-[#F6D1C1] placeholder-[#F6D1C1]/50 focus:border-[#F6D1C1] focus:outline-none transition-all duration-300 focus:bg-[#0D1B2A]/70"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#F6D1C1] font-medium mb-3">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-[#0D1B2A]/50 border-2 border-[#F6D1C1]/30 rounded-xl text-[#F6D1C1] focus:border-[#F6D1C1] focus:outline-none transition-all duration-300 focus:bg-[#0D1B2A]/70"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Support</option>
                      <option value="custom">Custom Design</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="return">Returns & Exchanges</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#F6D1C1] font-medium mb-3">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-[#0D1B2A]/50 border-2 border-[#F6D1C1]/30 rounded-xl text-[#F6D1C1] placeholder-[#F6D1C1]/50 focus:border-[#F6D1C1] focus:outline-none transition-all duration-300 focus:bg-[#0D1B2A]/70 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F6D1C1] text-[#0D1B2A] py-4 px-8 rounded-xl font-semibold text-lg hover:bg-[#0D1B2A] hover:text-[#F6D1C1] hover:border-2 hover:border-[#F6D1C1] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#0D1B2A]/30 border-t-[#0D1B2A] rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              {/* Map */}
              <div className="bg-[#F6D1C1]/5 backdrop-blur-sm border border-[#F6D1C1]/20 rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#F6D1C1] mx-auto mb-4" />
                  <h3 className="text-[#F6D1C1] font-semibold text-xl mb-2 playfair">
                    Visit Our Showroom
                  </h3>
                  <p className="text-[#F6D1C1]/80">
                    123 Fashion Avenue<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-[#F6D1C1]/5 backdrop-blur-sm border border-[#F6D1C1]/20 rounded-3xl p-8">
                <h3 className="text-[#F6D1C1] font-semibold text-xl mb-6 playfair text-center">
                  Follow Us
                </h3>
                <div className="flex justify-center gap-6">
                  {[
                    { icon: Instagram, color: 'hover:text-pink-400', label: 'Instagram' },
                    { icon: Facebook, color: 'hover:text-blue-400', label: 'Facebook' },
                    { icon: Twitter, color: 'hover:text-sky-400', label: 'Twitter' },
                    { icon: MessageCircle, color: 'hover:text-green-400', label: 'WhatsApp' }
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`w-14 h-14 bg-[#F6D1C1]/10 rounded-full flex items-center justify-center text-[#F6D1C1] ${social.color} transition-all duration-300 hover:scale-110 hover:bg-[#F6D1C1]/20`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6D1C1]/5">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#F6D1C1] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#F6D1C1]/70 text-lg">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-[#0D1B2A]/30 backdrop-blur-sm border border-[#F6D1C1]/20 rounded-2xl p-8 hover:bg-[#0D1B2A]/50 hover:border-[#F6D1C1]/40 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <h3 className="text-[#F6D1C1] font-semibold text-lg mb-4 playfair">
                  {faq.question}
                </h3>
                <p className="text-[#F6D1C1]/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;