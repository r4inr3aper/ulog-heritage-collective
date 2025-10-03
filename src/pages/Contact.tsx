
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'General Inquiries',
      email: 'hello@jinja.in',
      description: 'Questions about our products or mission'
    },
    {
      icon: Mail,
      title: 'Artisan Partnerships',
      email: 'partnerships@jinja.in',
      description: 'Interested in becoming an artisan partner'
    },
    {
      icon: Mail,
      title: 'Media & Press',
      email: 'media@jinja.in',
      description: 'Press inquiries and media requests'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-assam-cream to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-assam-earth mb-6">Get in Touch</h1>
          <p className="text-xl text-assam-earth/80 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <div className="flex justify-center items-center gap-8 mt-8 text-assam-earth/70">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Secure & Private</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl text-assam-earth flex items-center gap-3">
                    <Send className="w-8 h-8 text-assam-green" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-assam-green mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-assam-earth mb-2">Message Sent!</h3>
                      <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-semibold text-assam-earth">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="h-12 border-2 border-gray-200 focus:border-assam-green transition-colors"
                            placeholder="Your full name"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-semibold text-assam-earth">
                            Email Address *
                          </Label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="h-12 border-2 border-gray-200 focus:border-assam-green transition-colors"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-semibold text-assam-earth">
                          Subject *
                        </Label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full h-12 px-4 py-3 border-2 border-gray-200 rounded-md focus:border-assam-green focus:outline-none transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="partnership">Artisan Partnership</option>
                          <option value="wholesale">Wholesale Orders</option>
                          <option value="media">Media Inquiry</option>
                          <option value="feedback">Feedback</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-semibold text-assam-earth">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="border-2 border-gray-200 focus:border-assam-green transition-colors resize-none"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-assam-green hover:bg-assam-green-dark text-white py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div>
                <h2 className="text-2xl font-bold text-assam-earth mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-assam-green/10 p-3 rounded-lg">
                            <info.icon className="w-6 h-6 text-assam-green" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-assam-earth mb-1">{info.title}</h3>
                            <p className="text-assam-green font-semibold mb-2">{info.email}</p>
                            <p className="text-gray-600 text-sm">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Office Address */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-assam-green/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-assam-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-assam-earth mb-3">Our Office</h3>
                      <div className="space-y-1 text-gray-700">
                        <p className="font-semibold">জিঞা Heritage Collective</p>
                        <p>Cultural Heritage Center</p>
                        <p>Guwahati, Assam 781001</p>
                        <p>India</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-assam-green/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-assam-green" />
                    </div>
                    <div className="w-full">
                      <h3 className="text-lg font-bold text-assam-earth mb-3">Office Hours</h3>
                      <div className="space-y-2">
                        {officeHours.map((schedule, index) => (
                          <div key={index} className="flex justify-between items-center text-sm">
                            <span className="text-gray-700">{schedule.day}</span>
                            <span className="font-semibold text-assam-earth">{schedule.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-assam-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-assam-earth mb-4">Visit Us</h2>
            <p className="text-xl text-gray-600">Located in the heart of Guwahati, Assam</p>
          </div>
          
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="w-full h-96 bg-gradient-to-br from-assam-green/20 to-assam-green/10 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-assam-green mx-auto mb-4" />
                  <p className="text-assam-earth font-semibold text-lg mb-2">Interactive Map</p>
                  <p className="text-gray-600 text-sm max-w-md">
                    Map integration would be implemented with actual location coordinates for Guwahati, Assam
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
