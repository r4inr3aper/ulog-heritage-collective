
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Clock, Eye, BookOpen, FileText, Camera, Users } from 'lucide-react';

const Media = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const videoCategories = ['All', 'Handloom Process', 'Cooking Stories', 'Cultural Heritage', 'Village Diaries', 'Literature'];

  const videos = [
    {
      title: 'The Art of Assamese Handloom',
      description: 'Follow master weaver Rina Devi as she creates a traditional silk saree using techniques passed down through generations.',
      category: 'Handloom Process',
      duration: '12:45',
      views: '2.3k',
      thumbnail: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Traditional Black Rice Preparation',
      description: 'Discover the secrets of cooking traditional Northeastern black rice, from field to plate.',
      category: 'Cooking Stories',
      duration: '8:30',
      views: '1.8k',
      thumbnail: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Stories Behind the Gamusa',
      description: 'Understanding the cultural significance of Assam\'s most iconic textile and its role in daily life.',
      category: 'Cultural Heritage',
      duration: '15:20',
      views: '3.1k',
      thumbnail: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Village Diary: Sivasagar',
      description: 'A day in the life of our artisan partners in Sivasagar, showcasing their daily work and community life.',
      category: 'Village Diaries',
      duration: '18:45',
      views: '4.2k',
      thumbnail: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Indira Goswami: Literary Legacy',
      description: 'Exploring the works and impact of Assam\'s Nobel Prize-winning author through expert interviews.',
      category: 'Literature',
      duration: '22:15',
      views: '1.5k',
      thumbnail: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Tea Gardens of Assam',
      description: 'Journey through the historic tea gardens that put Assam on the global map.',
      category: 'Cultural Heritage',
      duration: '14:30',
      views: '2.7k',
      thumbnail: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const resources = [
    {
      title: 'Rare Ethnic Foods of Assam',
      type: 'Article',
      description: 'A comprehensive guide to traditional Assamese foods that are disappearing from modern kitchens.',
      readTime: '8 min read',
      icon: FileText
    },
    {
      title: 'Weaving Tales: Stories from the Loom',
      type: 'Photo Essay',
      description: 'Visual journey through the intricate process of traditional Assamese handloom weaving.',
      readTime: '5 min read',
      icon: Camera
    },
    {
      title: 'Top Assamese Writers to Read',
      type: 'Book List',
      description: 'Essential reading list of contemporary and classic Assamese literature with English translations.',
      readTime: '6 min read',
      icon: BookOpen
    },
    {
      title: 'Village Diaries: Impact on Ground',
      type: 'Case Study',
      description: 'Real stories of transformation in rural Assam through our artisan partnership programs.',
      readTime: '12 min read',
      icon: Users
    }
  ];

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-assam-green to-assam-green-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Media & Resources</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8 animate-slide-up">
            Explore the rich heritage of Assam through our collection of videos, articles, and cultural content
          </p>
          <div className="flex justify-center items-center space-x-8 text-green-200">
            <div className="flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>50+ Videos</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>25+ Articles</span>
            </div>
            <div className="flex items-center space-x-2">
              <Camera className="w-5 h-5" />
              <span>Photo Essays</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block bg-assam-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                Featured Content
              </span>
              <h2 className="text-4xl font-bold text-gray-900">The Heart of Assamese Heritage</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dive deep into the world of traditional Assamese crafts, foods, and literature through our carefully curated content. 
                Each piece tells a story of preservation, empowerment, and cultural pride.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>12.5k views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>25 min documentary</span>
                </div>
              </div>
              <button className="bg-assam-green hover:bg-assam-green-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Watch Documentary
              </button>
            </div>
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Featured Content" 
                className="rounded-xl shadow-2xl w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-assam-green ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Collection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Collection</h2>
            <p className="text-xl text-gray-600">Stories told through moving images</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {videoCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-assam-green text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-assam-green ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-assam-green text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {video.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-xs flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{video.duration}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-xs flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{video.views}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-assam-green transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles & Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Articles & Resources</h2>
            <p className="text-xl text-gray-600">In-depth explorations of Assamese culture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-assam-green/10 rounded-lg flex items-center justify-center group-hover:bg-assam-green group-hover:text-white transition-colors">
                      <resource.icon className="w-6 h-6 text-assam-green group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                          {resource.type}
                        </span>
                        <span className="text-gray-500 text-sm">{resource.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-assam-green transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{resource.description}</p>
                  <button className="text-assam-green font-semibold hover:text-assam-green-dark transition-colors flex items-center space-x-2">
                    <span>Read More</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-assam-green to-assam-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl mb-8 text-green-100">
            Subscribe to our newsletter for the latest stories, videos, and cultural insights from Assam.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
            />
            <button className="bg-white hover:bg-gray-100 text-assam-green px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
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
