import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SocialImpact = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: 1000, label: 'Women Artisans Empowered' },
    { number: 50, label: 'Villages Touched' },
    { number: 20, label: 'Craft Clusters Supported' },
    { number: 5000, label: 'Books Brought to Life' }
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
      { threshold: 0.5 }
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

  const whatWeDo = [
    {
      title: 'Preserve Heritage',
      description: 'We work with traditional artisans to preserve ancient crafts, recipes, and cultural practices that are at risk of being lost.',
      icon: '🏺',
      color: 'bg-assam-green'
    },
    {
      title: 'Empower Women',
      description: 'Through fair trade partnerships, we provide sustainable livelihoods to rural women artisans and their families.',
      icon: '💪',
      color: 'bg-assam-green'
    },
    {
      title: 'Revive Traditions',
      description: 'We bring back forgotten recipes, weaving techniques, and farming practices that define Assamese culture.',
      icon: '🌱',
      color: 'bg-assam-green'
    },
    {
      title: 'Connect Communities',
      description: 'Building bridges between rural artisans and global consumers through shared heritage.',
      icon: '🤝',
      color: 'bg-assam-green'
    },
    {
      title: 'Organic Gardening',
      description: 'We promote sustainable farming practices and help you grow your own piece of Assamese heritage.',
      icon: '🌿',
      color: 'bg-assam-green'
    }
  ];

  return (
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The Social Impact</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            "Empowering over 1000+ women artisans across 50+ villages. Every product is a promise to preserve tradition and uplift lives."
          </p>
          <p className="text-lg text-assam-green font-semibold mt-4 italic">
            "From Rural Roots to Your Home"
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-assam-green mb-2">
                  {counts[index]}+
                </div>
                <div className="text-sm md:text-base text-gray-900 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What We Do Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our mission is to preserve Assamese heritage while creating sustainable livelihoods for rural communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whatWeDo.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${item.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-assam-green transition-colors duration-300">{item.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://thedailyguardian.com/wp-content/uploads/2023/01/Destination-Bishwanath-Ghat-Weaving-Assam-India.jpg" 
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
