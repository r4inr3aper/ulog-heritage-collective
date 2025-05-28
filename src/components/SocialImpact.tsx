
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SocialImpact = () => {
  const stats = [
    { number: '1000+', label: 'Women Artisans Empowered' },
    { number: '50+', label: 'Villages Impacted' },
    { number: '20+', label: 'Craft Clusters Supported' },
    { number: '5000+', label: 'Books Distributed' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The Social Impact</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            "Empowering over 1000+ women artisans across 50+ villages. Every product is a promise to preserve tradition and uplift lives."
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-assam-green mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-900 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Women Artisans" 
              className="rounded-2xl shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Preserving Traditions, Empowering Communities</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Each purchase directly supports rural women artisans, providing them with sustainable livelihoods while preserving ancient crafts and culinary traditions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our partnerships with village collectives ensure fair wages, skill development, and educational opportunities for artisans and their families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;
