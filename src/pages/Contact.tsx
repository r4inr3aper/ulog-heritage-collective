
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      title: 'General Inquiries',
      email: 'hello@ulog.in',
      description: 'Questions about our products or mission'
    },
    {
      title: 'Artisan Partnerships',
      email: 'partnerships@ulog.in',
      description: 'Interested in becoming an artisan partner'
    },
    {
      title: 'Media & Press',
      email: 'media@ulog.in',
      description: 'Press inquiries and media requests'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-assam-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-assam-earth mb-4">Get in Touch</h1>
          <p className="text-lg text-assam-earth/80 max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-assam-earth mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-assam-gold focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-assam-gold focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-assam-gold focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Artisan Partnership</option>
                      <option value="wholesale">Wholesale Orders</option>
                      <option value="media">Media Inquiry</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-assam-gold focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-assam-red hover:bg-assam-red/90 text-white py-3 text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-assam-earth mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-assam-earth mb-2">{info.title}</h3>
                        <p className="text-assam-red font-semibold mb-2">{info.email}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-assam-earth mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { name: 'Facebook', color: 'bg-blue-600' },
                    { name: 'Instagram', color: 'bg-pink-600' },
                    { name: 'Twitter', color: 'bg-blue-400' },
                    { name: 'YouTube', color: 'bg-red-600' }
                  ].map((social, index) => (
                    <div key={index} className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}>
                      <span className="text-white font-bold text-sm">{social.name[0]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Address */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-assam-earth mb-4">Our Office</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Ulog Heritage Collective</p>
                    <p>Cultural Heritage Center</p>
                    <p>Guwahati, Assam 781001</p>
                    <p>India</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-assam-earth mb-4">Visit Us</h2>
            <p className="text-lg text-gray-600">Located in the heart of Guwahati, Assam</p>
          </div>
          
          <div className="bg-assam-cream rounded-lg p-8 text-center">
            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">
                Interactive Map
                <br />
                <span className="text-sm">(Map integration would be implemented with actual location)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
