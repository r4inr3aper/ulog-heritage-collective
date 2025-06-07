
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The handloom saree I bought from Ulog is not just beautiful, it carries the soul of Assam. Knowing it supports rural women makes it even more special.",
      author: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Ulog's ethnic foods brought back memories of my grandmother's cooking. The black rice is absolutely authentic and delicious.",
      author: "Rajesh Bora",
      location: "Guwahati",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "As an educator, I appreciate Ulog's effort to promote Assamese literature. These books are treasures that need to be preserved.",
      author: "Dr. Meera Goswami",
      location: "Mumbai",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-assam-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-assam-gold/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border border-assam-green/20 shadow-sm mb-8">
            <Quote className="h-4 w-4 text-assam-green mr-2" />
            <span className="text-sm font-semibold text-assam-green uppercase tracking-wide">Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our <span className="text-gradient">Community</span> Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stories from customers who believe in our mission and have experienced the authentic essence of Assam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-assam-green to-assam-gold"></div>
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-assam-green/10 rounded-full flex items-center justify-center">
                  <Quote className="h-6 w-6 text-assam-green" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-assam-gold fill-current" />
                  ))}
                </div>

                {/* Testimonial */}
                <blockquote className="text-gray-700 leading-relaxed mb-8 text-lg italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-assam-green/20"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                    <p className="text-assam-green font-medium">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-assam-green/5 to-assam-gold/5 rounded-3xl p-12 border border-assam-green/10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Our Growing Community</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience authentic Assamese heritage and become part of a movement that preserves traditions while empowering communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-assam-green hover:bg-assam-green-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Share Your Story
              </button>
              <button className="border-2 border-assam-green text-assam-green hover:bg-assam-green hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
