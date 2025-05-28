
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Impact = () => {
  const impactStats = [
    { number: '50+', label: 'Villages Impacted', description: 'Across rural Assam, creating widespread change' },
    { number: '1000+', label: 'Women Employed', description: 'Providing sustainable livelihoods and economic independence' },
    { number: '5000+', label: 'Books Distributed', description: 'Spreading Assamese literature far and wide' },
    { number: '20+', label: 'Craft Clusters Supported', description: 'Preserving traditional skills and techniques' }
  ];

  const artisanStories = [
    {
      name: 'Rina Devi',
      location: 'Sivasagar',
      craft: 'Handloom Weaving',
      story: 'Once struggling to make ends meet, Rina now supports her family of four through her beautiful handwoven textiles. Her daughter is now in college.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Lakshmi Goswami',
      location: 'Jorhat',
      craft: 'Traditional Cooking',
      story: 'Lakshmi has preserved her grandmother\'s recipes and now teaches other women in her village. Her organic food products reach customers nationwide.',
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Minu Bora',
      location: 'Hajo',
      craft: 'Literary Translation',
      story: 'A former teacher, Minu now translates Assamese literature into English, making our rich literary heritage accessible to global audiences.',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-assam-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-assam-earth mb-4">Lives We've Touched</h1>
          <p className="text-lg text-assam-earth/80 max-w-3xl mx-auto">
            Real stories of transformation, empowerment, and preservation of our beautiful heritage
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-assam-earth mb-4">Our Impact by Numbers</h2>
            <p className="text-lg text-gray-600">Measurable change across communities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-assam-red mb-2 group-hover:text-assam-gold transition-colors">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-bold text-assam-earth mb-3">{stat.label}</h3>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Artisan Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-assam-earth mb-4">Stories of Transformation</h2>
            <p className="text-lg text-gray-600">Meet the amazing women behind our mission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artisanStories.map((artisan, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={artisan.image} 
                    alt={artisan.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{artisan.name}</h3>
                    <p className="text-sm">{artisan.location}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-assam-gold rounded-full mr-3"></div>
                    <span className="text-assam-red font-semibold">{artisan.craft}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{artisan.story}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-assam-earth mb-4">Areas of Impact</h2>
            <p className="text-lg text-gray-600">How we're making a difference across different sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Economic Empowerment',
                description: 'Providing fair wages and sustainable income sources for rural women',
                icon: '💰',
                metrics: 'Average 40% increase in household income'
              },
              {
                title: 'Skill Development',
                description: 'Training programs to enhance traditional crafts and modern business skills',
                icon: '🎯',
                metrics: '500+ women trained in business skills'
              },
              {
                title: 'Cultural Preservation',
                description: 'Documenting and preserving traditional knowledge and practices',
                icon: '🏛️',
                metrics: '50+ traditional recipes documented'
              },
              {
                title: 'Education Support',
                description: 'Supporting children\'s education through increased family income',
                icon: '📖',
                metrics: '200+ children now in school'
              },
              {
                title: 'Health & Wellness',
                description: 'Better healthcare access through improved economic conditions',
                icon: '🏥',
                metrics: '80% improvement in healthcare access'
              },
              {
                title: 'Community Building',
                description: 'Strengthening social bonds through collective economic activities',
                icon: '🤝',
                metrics: '25+ women\'s collectives formed'
              }
            ].map((area, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-bold text-assam-earth mb-3 group-hover:text-assam-red transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{area.description}</p>
                  <div className="bg-assam-cream px-4 py-2 rounded-lg">
                    <span className="text-sm font-semibold text-assam-red">{area.metrics}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
