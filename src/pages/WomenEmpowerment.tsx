
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const WomenEmpowerment = () => {
  const successStories = [
    {
      name: 'Bharati Das',
      location: 'Kamrup',
      achievement: 'From housewife to entrepreneur',
      description: 'Started with traditional weaving, now leads a 50-member women\'s collective generating ₹2 lakhs monthly.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      impact: 'Supports 50 families'
    },
    {
      name: 'Anjali Bora',
      location: 'Sivasagar',
      achievement: 'Master Weaver & Trainer',
      description: 'Preserves traditional Assamese weaving techniques while training the next generation of artisans.',
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      impact: 'Trained 100+ women'
    },
    {
      name: 'Gitika Goswami',
      location: 'Jorhat',
      achievement: 'Organic Food Pioneer',
      description: 'Transformed her kitchen knowledge into a thriving organic food business, inspiring others to follow.',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      impact: 'Mentored 30+ women'
    }
  ];

  const programs = [
    {
      title: 'Skill Development Programs',
      description: 'Comprehensive training in traditional crafts, modern business skills, and digital literacy.',
      features: [
        'Handloom weaving techniques',
        'Quality control and finishing',
        'Basic business management',
        'Digital marketing basics'
      ]
    },
    {
      title: 'Financial Literacy',
      description: 'Empowering women with knowledge of banking, savings, and financial planning for sustainable growth.',
      features: [
        'Banking and credit awareness',
        'Savings and investment planning',
        'Micro-finance options',
        'Income diversification strategies'
      ]
    },
    {
      title: 'Leadership Development',
      description: 'Building confidence and leadership skills to help women take charge of their communities.',
      features: [
        'Communication skills',
        'Team management',
        'Problem-solving techniques',
        'Community organizing'
      ]
    },
    {
      title: 'Child Education Support',
      description: 'Ensuring the next generation has access to quality education through increased family income.',
      features: [
        'School fee assistance',
        'Educational material support',
        'After-school programs',
        'Career guidance'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-assam-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-assam-earth mb-6">Women Empowerment</h1>
            <p className="text-xl text-assam-earth/80 max-w-4xl mx-auto leading-relaxed">
              "Every thread woven, every page turned, and every bite served tells a woman's story of strength and independence. 
              At Ulog, we don't just sell products – we nurture potential."
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-assam-earth mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">Celebrating the achievements of remarkable women</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-assam-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {story.impact}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-assam-earth mb-2">{story.name}</h3>
                  <p className="text-assam-red font-semibold mb-2">{story.achievement}</p>
                  <p className="text-gray-600 text-sm mb-3">{story.location}</p>
                  <p className="text-gray-700 leading-relaxed">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-assam-earth mb-4">Empowerment Programs</h2>
            <p className="text-lg text-gray-600">Comprehensive support for holistic development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-assam-earth mb-4">{program.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                  <ul className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
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

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-assam-earth mb-4">Empowerment in Numbers</h2>
            <p className="text-lg text-gray-600">Measurable change in women's lives</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: '85%', description: 'Increase in household decision-making power' },
              { metric: '70%', description: 'Women now have personal savings accounts' },
              { metric: '90%', description: 'Children continued education' },
              { metric: '60%', description: 'Improved healthcare access' }
            ].map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-assam-red mb-2">{stat.metric}</div>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Groups */}
      <section className="py-16 bg-assam-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-assam-earth mb-4">Partner Women's Groups</h2>
            <p className="text-lg text-gray-600">Collaborative networks driving change</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sivasagar Silk Weavers Collective',
                members: '45 Women',
                specialty: 'Traditional Silk Weaving',
                established: '2019'
              },
              {
                name: 'Jorhat Organic Food Group',
                members: '30 Women',
                specialty: 'Organic Food Production',
                established: '2020'
              },
              {
                name: 'Kamrup Craft Artisans',
                members: '60 Women',
                specialty: 'Bamboo & Cane Crafts',
                established: '2018'
              }
            ].map((group, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-assam-earth mb-4">{group.name}</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-semibold">Members:</span> {group.members}</p>
                    <p><span className="font-semibold">Specialty:</span> {group.specialty}</p>
                    <p><span className="font-semibold">Established:</span> {group.established}</p>
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

export default WomenEmpowerment;
