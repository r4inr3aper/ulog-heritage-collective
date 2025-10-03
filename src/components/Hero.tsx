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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              জিঞা – A Promise for <span className="text-gradient">Affinity</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Reviving roots through taste, touch, and tales. Experience the authentic essence of Assam through rare ethnic foods, timeless handloom artistry, and celebrated literature.
            </p>
            <p className="text-lg text-assam-green font-semibold mb-8 italic">
              "From Rural Roots to Your Home"
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate('/shop')}
                className="bg-assam-green hover:bg-assam-green-dark text-white px-8 py-3 text-lg"
              >
                Shop Now
              </Button>
              <Button 
                onClick={() => navigate('/about')}
                variant="outline" 
                className="border-assam-green text-assam-green hover:bg-assam-green hover:text-white px-8 py-3 text-lg"
              >
                Our Story
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <img 
                src="https://static.wixstatic.com/media/e58556_258afa9e674440c19385f0c599d20146~mv2.jpg/v1/fill/w_1000,h_670,al_c,q_90,usm_0.66_1.00_0.01/e58556_258afa9e674440c19385f0c599d20146~mv2.jpg" 
                alt="Assam Heritage" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
