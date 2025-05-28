
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-assam-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-assam-earth mb-4">Our Journey, Our Promise</h1>
          <p className="text-lg text-assam-earth/80 max-w-3xl mx-auto">
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
              <h2 className="text-3xl font-bold text-assam-earth mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded with passion and purpose, Ulog is a heartfelt attempt to reconnect the world with Assam's rich cultural fabric. 
                We are a blend of commerce and conscience, partnering with women-led rural collectives to create meaningful livelihoods 
                and preserve forgotten traditions.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our mission extends beyond selling products – we're cultural custodians, ensuring that the authentic essence of Assam 
                reaches every corner of the world while empowering the hands that create these treasures.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every product in our collection tells a story of heritage, skill, and hope. Through Ulog, we're not just preserving 
                traditions; we're building bridges between rural artisans and global communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-16 bg-assam-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-assam-earth mb-8">Founder's Note</h2>
              <blockquote className="text-xl text-gray-700 leading-relaxed italic mb-8">
                "I grew up watching my grandmother weave stories and meals with equal magic. Her hands carried centuries of wisdom, 
                her recipes held the essence of our land, and her tales painted vivid pictures of our rich heritage."
              </blockquote>
              <blockquote className="text-xl text-gray-700 leading-relaxed italic mb-8">
                "Ulog is a tribute to her and to thousands like her – women who carry culture in their hands and hearts. 
                Through this platform, I hope to honor their legacy while creating sustainable opportunities for future generations."
              </blockquote>
              <div className="flex justify-center items-center space-x-4">
                <div className="w-16 h-16 bg-assam-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">U</span>
                </div>
                <div>
                  <p className="font-semibold text-assam-earth">Founder</p>
                  <p className="text-gray-600">Ulog Heritage Collective</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-assam-earth mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-assam-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <h3 className="text-xl font-bold text-assam-earth mb-4">Authenticity</h3>
                <p className="text-gray-700">
                  Every product is genuine, sourced directly from traditional artisans and producers who maintain age-old practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-assam-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <h3 className="text-xl font-bold text-assam-earth mb-4">Empowerment</h3>
                <p className="text-gray-700">
                  We create sustainable livelihood opportunities for rural women, ensuring fair wages and skill development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-assam-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <h3 className="text-xl font-bold text-assam-earth mb-4">Preservation</h3>
                <p className="text-gray-700">
                  We actively work to preserve and promote traditional crafts, recipes, and literature for future generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
