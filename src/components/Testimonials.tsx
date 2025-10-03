
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The handloom saree I bought from জিঞাঁ is not just beautiful, it carries the soul of Assam. Knowing it supports rural women makes it even more special.",
      author: "Priya Sharma",
      location: "Delhi"
    },
    {
      quote: "জিঞাঁ's ethnic foods brought back memories of my grandmother's cooking. The black rice is absolutely authentic and delicious.",
      author: "Rajesh Bora",
      location: "Guwahati"
    },
    {
      quote: "As an educator, I appreciate জিঞাঁ's effort to promote Assamese literature. These books are treasures that need to be preserved.",
      author: "Dr. Meera Goswami",
      location: "Mumbai"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-assam-earth mb-6">What Our Community Says</h2>
          <p className="text-lg text-gray-600">Stories from customers who believe in our mission</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-assam-gold mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700 italic leading-relaxed mb-6">"{testimonial.quote}"</p>
                </div>
                <div>
                  <p className="font-semibold text-assam-earth">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
