
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative hero-gradient min-h-[90vh] flex items-center pattern-overlay overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-assam-green/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-assam-gold/30 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-assam-green/25 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-assam-gold/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-assam-green/20 shadow-sm">
              <Sparkles className="h-4 w-4 text-assam-green mr-2" />
              <span className="text-sm font-medium text-assam-green">Authentic Assamese Heritage</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Ulog – A Promise for{' '}
              <span className="text-gradient relative">
                Affinity
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-assam-green to-assam-gold transform scale-x-0 origin-left animate-[scale-x-100_1s_ease-out_1s_forwards]"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl">
              Reviving roots through <span className="font-semibold text-assam-green">taste</span>, 
              <span className="font-semibold text-assam-green"> touch</span>, and 
              <span className="font-semibold text-assam-green"> tales</span>. Experience the authentic essence of Assam through rare ethnic foods, timeless handloom artistry, and celebrated literature.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button 
                onClick={() => navigate('/shop')}
                size="lg"
                className="bg-assam-green hover:bg-assam-green-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => navigate('/about')}
                variant="outline" 
                size="lg"
                className="border-2 border-assam-green text-assam-green hover:bg-assam-green hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Our Story
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="animate-slide-up">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-assam-green/20 to-assam-gold/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Assam Heritage" 
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent rounded-3xl"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-semibold text-assam-green">100% Authentic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
