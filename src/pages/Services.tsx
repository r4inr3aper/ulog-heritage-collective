import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Target, Award, Heart } from 'lucide-react';

const Services = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      title: 'Artisan Partnership',
      description: 'Comprehensive support for rural artisans including handloom training, fair wage employment, and rural outreach programs that transform lives.',
      features: [
        'Skill development workshops and certification',
        'Fair trade practices ensuring livable wages',
        'Quality certification and product standardization',
        'Global marketing support and brand building'
      ],
      icon: '🤝',
      color: 'from-assam-green to-assam-green-light'
    },
    {
      title: 'Sustainable Food Chain',
      description: 'Building a robust network for sourcing and promoting indigenous food ingredients while supporting local farmers and preserving culinary heritage.',
      features: [
        'Direct farmer partnerships and fair pricing',
        'Essential certification, support and guidance',
        'Food license assistance and compliance',
        'Supply chain optimization and logistics'
      ],
      icon: '🌾',
      color: 'from-green-600 to-green-400'
    },
    {
      title: 'Literature Promotion',
      description: 'Partnering with local writers, translators, and libraries to keep Assamese literature alive, accessible, and celebrated worldwide.',
      features: [
        'Professional translation services',
        'Publication support and distribution',
        'Author workshops and mentorship programs',
        'Literary event organization and promotion'
      ],
      icon: '📚',
      color: 'from-emerald-600 to-emerald-400'
    },
    {
      title: 'Cultural Workshops',
      description: 'Interactive culinary, weaving, and storytelling events conducted both online and offline to spread cultural awareness and preserve traditions.',
      features: [
        'Hands-on cooking masterclasses',
        'Live weaving demonstrations',
        'Traditional storytelling sessions',
        'Immersive cultural experience programs'
      ],
      icon: '🎨',
      color: 'from-teal-600 to-teal-400'
    }
  ];

  const stats = [
    { icon: Users, number: 1000, label: 'Artisans Supported' },
    { icon: Target, number: 50, label: 'Villages Reached' },
    { icon: Award, number: 20, label: 'Craft Clusters' },
    { icon: Heart, number: 5000, label: 'Lives Impacted' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounts();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      const newCounts = stats.map((stat) => {
        const target = stat.number;
        const current = Math.floor(target * progress);
        return current;
      });

      setCounts(newCounts);

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(stats.map(stat => stat.number));
      }
    }, stepDuration);
  };

  const processSteps = [
    { 
      step: '01', 
      title: 'Identify & Connect', 
      description: 'We discover talented artisans and authentic products through grassroots community outreach and partnerships.' 
    },
    { 
      step: '02', 
      title: 'Build Partnerships', 
      description: 'We establish fair, long-term partnerships that benefit both artisans and customers sustainably' 
    },
    { 
      step: '03', 
      title: 'Train & Develop', 
      description: 'We provide comprehensive training and resources to enhance skills, quality, and market readiness' 
    },
    { 
      step: '04', 
      title: 'Market & Scale', 
      description: 'We market products globally while sharing authentic stories and ensuring fair compensation' 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-assam-green to-assam-green-light text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Comprehensive programs designed to preserve heritage, empower communities, and create sustainable impact across Assam
          </p>
          <div className="mt-8 flex justify-center">
            <Button 
              size="lg" 
              className="bg-white text-assam-green hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-assam-green text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-assam-green mb-2">
                  {counts[index]}+
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach combines traditional craftsmanship with modern business practices
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-5xl mr-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-assam-green transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-600">
                        <CheckCircle className="h-5 w-5 text-assam-green mr-3 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Create Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures sustainable growth and meaningful change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-assam-green to-assam-green-light"></div>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-assam-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-xl font-bold text-assam-green">{process.step}</div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-assam-green transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-assam-green to-assam-green-light text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Join our mission to preserve Assamese heritage while creating sustainable livelihoods for rural communities. Together, we can make tradition profitable and culture sustainable.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-assam-green hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Become an Artisan Partner
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-assam-green hover:bg-white hover:text-assam-green font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Learn More About Our Impact
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
