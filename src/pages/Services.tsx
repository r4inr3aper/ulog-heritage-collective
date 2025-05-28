
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: 'Artisan Partnership',
      description: 'Comprehensive support for rural artisans including handloom training, fair wage employment, and rural outreach programs.',
      features: [
        'Skill development workshops',
        'Fair trade practices',
        'Quality certification',
        'Marketing support'
      ],
      icon: '🤝'
    },
    {
      title: 'Sustainable Food Chain',
      description: 'Building a robust network for sourcing and promoting indigenous food ingredients while supporting local farmers.',
      features: [
        'Direct farmer partnerships',
        'Organic certification support',
        'Traditional recipe preservation',
        'Supply chain optimization'
      ],
      icon: '🌾'
    },
    {
      title: 'Literature Promotion',
      description: 'Partnering with local writers, translators, and libraries to keep Assamese literature alive and accessible.',
      features: [
        'Translation services',
        'Publication support',
        'Author workshops',
        'Literary event organization'
      ],
      icon: '📚'
    },
    {
      title: 'Cultural Workshops',
      description: 'Interactive culinary, weaving, and storytelling events conducted both online and offline to spread awareness.',
      features: [
        'Cooking masterclasses',
        'Weaving demonstrations',
        'Storytelling sessions',
        'Cultural immersion programs'
      ],
      icon: '🎨'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-assam-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-assam-earth mb-4">Our Services</h1>
          <p className="text-lg text-assam-earth/80 max-w-3xl mx-auto">
            Comprehensive programs designed to preserve heritage, empower communities, and create sustainable impact
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-assam-earth group-hover:text-assam-red transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-assam-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-assam-earth mb-4">How We Work</h2>
            <p className="text-lg text-gray-600">Our systematic approach to creating lasting impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Identify', description: 'We identify talented artisans and authentic products in rural communities' },
              { step: '02', title: 'Partner', description: 'We establish fair partnerships that benefit both artisans and customers' },
              { step: '03', title: 'Train', description: 'We provide training and resources to enhance skills and quality' },
              { step: '04', title: 'Market', description: 'We market products globally while sharing the stories behind them' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-assam-red text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:bg-assam-gold transition-colors">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-assam-earth mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-assam-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Join our mission to preserve Assamese heritage while creating sustainable livelihoods for rural communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-assam-gold hover:bg-assam-gold/90 text-assam-earth px-8 py-3 rounded-lg font-semibold transition-colors">
              Become an Artisan Partner
            </button>
            <button className="border border-assam-gold text-assam-gold hover:bg-assam-gold hover:text-assam-earth px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
