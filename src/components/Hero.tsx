
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-gradient min-h-[80vh] flex items-center pattern-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-assam-earth mb-6 leading-tight">
              Ulog – A Promise for <span className="text-gradient">Affinity</span>
            </h1>
            <p className="text-xl text-assam-earth/80 mb-8 leading-relaxed">
              Reviving roots through taste, touch, and tales. Experience the authentic essence of Assam through rare ethnic foods, timeless handloom artistry, and celebrated literature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate('/shop')}
                className="bg-assam-red hover:bg-assam-red/90 text-white px-8 py-3 text-lg"
              >
                Shop Now
              </Button>
              <Button 
                onClick={() => navigate('/about')}
                variant="outline" 
                className="border-assam-earth text-assam-earth hover:bg-assam-earth hover:text-white px-8 py-3 text-lg"
              >
                Our Story
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Assam Heritage" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-assam-earth/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
