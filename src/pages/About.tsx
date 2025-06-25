import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BookOpen, Star, Award, Target } from 'lucide-react';

const About = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const impactStats = [
    { number: 50, label: 'Villages Touched', icon: Target },
    { number: 1000, label: 'Women Employed', icon: Users },
    { number: 5000, label: 'Books Brought to Life', icon: BookOpen },
    { number: 20, label: 'Craft Clusters Supported', icon: Award }
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

      const newCounts = impactStats.map((stat) => {
        const target = stat.number;
        const current = Math.floor(target * progress);
        return current;
      });

      setCounts(newCounts);

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(impactStats.map(stat => stat.number));
      }
    }, stepDuration);
  };

  const successStories = [
    {
      name: 'Bharati Das',
      achievement: 'From housewife to entrepreneur',
      description: 'Started with traditional weaving, now leads a 50-member women\'s collective.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      impact: 'Transformed 50 lives'
    },
    {
      name: 'Anjali Bora',
      achievement: 'Master Weaver & Trainer',
      description: 'Preserves traditional Assamese weaving techniques while training the next generation.',
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      impact: 'Trained 200+ artisans'
    },
    {
      name: 'Gitika Goswami',
      achievement: 'Organic Food Pioneer',
      description: 'Transformed her kitchen knowledge into a thriving organic food business.',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      impact: 'Supplies 100+ families'
    },
    {
      name: 'Rekha Devi',
      achievement: 'Organic Gardening Expert',
      description: 'Leads sustainable farming initiatives and teaches traditional cultivation methods.',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      impact: 'Guides 75+ farmers'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Heritage Preservation',
      description: 'Safeguarding centuries-old traditions and crafts for future generations.'
    },
    {
      icon: Users,
      title: 'Women Empowerment',
      description: 'Creating sustainable livelihoods and independence for rural women.'
    },
    {
      icon: Star,
      title: 'Quality Excellence',
      description: 'Maintaining the highest standards in every product we offer.'
    },
    {
      icon: Target,
      title: 'Organic Gardening',
      description: 'Promoting sustainable farming practices and traditional cultivation methods.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-assam-cream via-white to-assam-cream py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Journey, Our <span className="text-gradient">Promise</span>
            </h1>
            <p className="text-xl text-assam-gray max-w-4xl mx-auto leading-relaxed">
              A heartfelt attempt to reconnect the world with Assam's rich cultural fabric, 
              one story at a time, one thread at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="relative">
                <img 
                  src="https://www.caleidoscope.in/wp-content/uploads/2021/05/Folk-Dances-of-Assam-Bihu-2.jpg" 
                  alt="Assam Heritage" 
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded with passion and purpose, Ulog is a heartfelt attempt to reconnect the world with Assam's rich cultural fabric. 
                  We are a blend of commerce and conscience, partnering with women-led rural collectives to create meaningful livelihoods 
                  and preserve forgotten traditions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Every product in our collection tells a story of heritage, skill, and hope. Through Ulog, we're not just preserving 
                  traditions; we're building bridges between rural artisans and global communities.
                </p>
                <p className="text-lg text-assam-green font-semibold italic">
                  "From Rural Roots to Your Home"
                </p>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-assam-green" />
                  <span className="text-assam-green font-semibold">Made with Love</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-6 w-6 text-assam-green" />
                  <span className="text-assam-green font-semibold">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-assam-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-assam-green" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-assam-green transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600">Measurable change across communities</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {impactStats.map((stat, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-assam-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-assam-green" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-assam-green mb-2">
                    {counts[index]}+
                  </div>
                  <div className="text-sm md:text-base text-gray-900 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-assam-green/5 to-assam-green/10 rounded-3xl p-12">
            <blockquote className="text-2xl text-gray-800 italic max-w-5xl mx-auto leading-relaxed">
              "Empowering over 1000+ women artisans across 50+ villages. Every product is a promise to preserve tradition and uplift lives."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Women Empowerment Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Stories of Transformation</h2>
            <p className="text-xl text-gray-600 italic max-w-4xl mx-auto leading-relaxed">
              "Every thread woven, every page turned, and every bite served tells a woman's story of strength and independence. 
              At Ulog, we don't just sell products – we nurture potential."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-assam-green text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {story.impact}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-assam-earth mb-2">{story.name}</h3>
                    <p className="text-gray-600 italic text-sm mb-2">
                      {story.achievement}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-xs">
                      {story.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20 bg-gradient-to-br from-assam-cream to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-12 lg:p-16 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-assam-green to-assam-green-light rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">A Note from Our Founder</h2>
              
              <div className="space-y-8">
                <blockquote className="text-xl text-gray-700 leading-relaxed italic">
                  "I grew up watching my grandmother weave stories and meals with equal magic. Her hands carried centuries of wisdom, 
                  her recipes held the essence of our land, and her tales painted vivid pictures of our rich heritage."
                </blockquote>
                
                <blockquote className="text-xl text-gray-700 leading-relaxed italic">
                  "Ulog is a tribute to her and to thousands like her – women who carry culture in their hands and hearts. 
                  Through this platform, I hope to honor their legacy while creating sustainable opportunities for future generations."
                </blockquote>
              </div>
              
              <div className="flex justify-center items-center space-x-4 mt-10">
                <div className="w-16 h-16 bg-gradient-to-br from-assam-green to-assam-green-light rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">U</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Lakshadeep Adhikary</p>
                  <p className="text-gray-600">Ulog Heritage Collective</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
