
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const EssenceSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-assam-earth mb-6">The Essence of Ulog</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ulog brings you the authentic essence of Assam – through rare ethnic foods, timeless handloom artistry, and celebrated Assamese literature. 
              <span className="font-semibold text-assam-red"> Every purchase supports rural women, revives forgotten traditions, and fuels stories worth preserving.</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ethnic Food */}
          <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Ethnic Food" 
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-assam-earth mb-4">Ethnic Food</h3>
              <p className="text-gray-600 italic text-lg">
                "A journey of flavor, lost and found."
              </p>
              <p className="mt-4 text-gray-700">
                Discover rare delicacies and traditional recipes that have been passed down through generations of Assamese families.
              </p>
            </CardContent>
          </Card>

          {/* Handloom */}
          <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Handloom" 
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-assam-earth mb-4">Handloom</h3>
              <p className="text-gray-600 italic text-lg">
                "Stories woven by skilled hands."
              </p>
              <p className="mt-4 text-gray-700">
                Exquisite fabrics crafted by talented artisans, each piece carrying the heritage and skill of Assamese weaving traditions.
              </p>
            </CardContent>
          </Card>

          {/* Books */}
          <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Books" 
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-assam-earth mb-4">Books</h3>
              <p className="text-gray-600 italic text-lg">
                "Words that shaped a region, written by its legends."
              </p>
              <p className="mt-4 text-gray-700">
                Celebrate Assamese literature through works by renowned authors like Indira Goswami and Homen Borgohain.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EssenceSection;
