
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Media = () => {
  const videos = [
    {
      title: 'The Art of Assamese Handloom',
      description: 'Follow master weaver Rina Devi as she creates a traditional silk saree using techniques passed down through generations.',
      category: 'Handloom Process',
      duration: '12:45',
      thumbnail: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Traditional Black Rice Preparation',
      description: 'Discover the secrets of cooking traditional Northeastern black rice, from field to plate.',
      category: 'Cooking Stories',
      duration: '8:30',
      thumbnail: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Stories Behind the Gamusa',
      description: 'Understanding the cultural significance of Assam\'s most iconic textile and its role in daily life.',
      category: 'Cultural Heritage',
      duration: '15:20',
      thumbnail: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Village Diary: Sivasagar',
      description: 'A day in the life of our artisan partners in Sivasagar, showcasing their daily work and community life.',
      category: 'Village Diaries',
      duration: '18:45',
      thumbnail: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Indira Goswami: Literary Legacy',
      description: 'Exploring the works and impact of Assam\'s Nobel Prize-winning author through expert interviews.',
      category: 'Literature',
      duration: '22:15',
      thumbnail: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Tea Gardens of Assam',
      description: 'Journey through the historic tea gardens that put Assam on the global map.',
      category: 'Cultural Heritage',
      duration: '14:30',
      thumbnail: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const resources = [
    {
      title: 'Rare Ethnic Foods of Assam',
      type: 'Article',
      description: 'A comprehensive guide to traditional Assamese foods that are disappearing from modern kitchens.',
      readTime: '8 min read'
    },
    {
      title: 'Weaving Tales: Stories from the Loom',
      type: 'Photo Essay',
      description: 'Visual journey through the intricate process of traditional Assamese handloom weaving.',
      readTime: '5 min read'
    },
    {
      title: 'Top Assamese Writers to Read',
      type: 'Book List',
      description: 'Essential reading list of contemporary and classic Assamese literature with English translations.',
      readTime: '6 min read'
    },
    {
      title: 'Village Diaries: Impact on Ground',
      type: 'Case Study',
      description: 'Real stories of transformation in rural Assam through our artisan partnership programs.',
      readTime: '12 min read'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-assam-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-assam-earth mb-4">Media & Resources</h1>
          <p className="text-lg text-assam-earth/80 max-w-3xl mx-auto">
            Explore the rich heritage of Assam through our collection of videos, articles, and cultural content
          </p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-assam-red text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Featured Content
              </span>
              <h2 className="text-3xl font-bold text-assam-earth mb-4">The Heart of Assamese Heritage</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Dive deep into the world of traditional Assamese crafts, foods, and literature through our carefully curated content. 
                Each piece tells a story of preservation, empowerment, and cultural pride.
              </p>
              <button className="bg-assam-red hover:bg-assam-red/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Watch Our Latest Documentary
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Featured Content" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-assam-red ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Collection */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-assam-earth mb-4">Video Collection</h2>
            <p className="text-lg text-gray-600">Stories told through moving images</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-assam-red ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-assam-gold text-white px-2 py-1 rounded text-xs font-semibold">
                    {video.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-assam-earth mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles & Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-assam-earth mb-4">Articles & Resources</h2>
            <p className="text-lg text-gray-600">In-depth explorations of Assamese culture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-assam-cream text-assam-red px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      {resource.type}
                    </span>
                    <span className="text-gray-500 text-sm">{resource.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-assam-earth mb-3 group-hover:text-assam-red transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{resource.description}</p>
                  <button className="text-assam-red font-semibold hover:text-assam-red/80 transition-colors">
                    Read More →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-assam-earth text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl mb-8 text-gray-300">
            Subscribe to our newsletter for the latest stories, videos, and cultural insights from Assam.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-assam-gold"
            />
            <button className="bg-assam-gold hover:bg-assam-gold/90 text-assam-earth px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;
