
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const impactStats = [
    { number: '50+', label: 'Villages Impacted' },
    { number: '1000+', label: 'Women Employed' },
    { number: '5000+', label: 'Books Distributed' },
    { number: '20+', label: 'Craft Clusters Supported' }
  ];

  const successStories = [
    {
      name: 'Bharati Das',
      achievement: 'From housewife to entrepreneur',
      description: 'Started with traditional weaving, now leads a 50-member women\'s collective.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Anjali Bora',
      achievement: 'Master Weaver & Trainer',
      description: 'Preserves traditional Assamese weaving techniques while training the next generation.',
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Gitika Goswami',
      achievement: 'Organic Food Pioneer',
      description: 'Transformed her kitchen knowledge into a thriving organic food business.',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-assam-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Journey, Our Promise</h1>
          <p className="text-lg text-assam-gray max-w-3xl mx-auto">
            A heartfelt attempt to reconnect the world with Assam's rich cultural fabric
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Assam Heritage" 
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded with passion and purpose, Ulog is a heartfelt attempt to reconnect the world with Assam's rich cultural fabric. 
                We are a blend of commerce and conscience, partnering with women-led rural collectives to create meaningful livelihoods 
                and preserve forgotten traditions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every product in our collection tells a story of heritage, skill, and hope. Through Ulog, we're not just preserving 
                traditions; we're building bridges between rural artisans and global communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">Measurable change across communities</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-assam-green mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 italic max-w-4xl mx-auto">
              "Empowering over 1000+ women artisans across 50+ villages. Every product is a promise to preserve tradition and uplift lives."
            </p>
          </div>
        </div>
      </section>

      {/* Women Empowerment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Women Empowerment</h2>
            <p className="text-lg text-gray-600 italic max-w-4xl mx-auto">
              "Every thread woven, every page turned, and every bite served tells a woman's story of strength and independence. 
              At Ulog, we don't just sell products – we nurture potential."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                  <p className="text-assam-green font-semibold mb-2">{story.achievement}</p>
                  <p className="text-gray-700 text-sm">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-16 bg-assam-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Founder's Note</h2>
              <blockquote className="text-xl text-gray-700 leading-relaxed italic mb-8">
                "I grew up watching my grandmother weave stories and meals with equal magic. Her hands carried centuries of wisdom, 
                her recipes held the essence of our land, and her tales painted vivid pictures of our rich heritage."
              </blockquote>
              <blockquote className="text-xl text-gray-700 leading-relaxed italic mb-8">
                "Ulog is a tribute to her and to thousands like her – women who carry culture in their hands and hearts. 
                Through this platform, I hope to honor their legacy while creating sustainable opportunities for future generations."
              </blockquote>
              <div className="flex justify-center items-center space-x-4">
                <div className="w-16 h-16 bg-assam-green rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">U</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Founder</p>
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
