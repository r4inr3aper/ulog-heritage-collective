
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Scissors, BookOpen } from 'lucide-react';

const EssenceSection = () => {
  const essenceItems = [
    {
      title: "Ethnic Food",
      subtitle: "A journey of flavor, lost and found.",
      description: "Discover rare delicacies and traditional recipes that have been passed down through generations of Assamese families.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      icon: Utensils,
      color: "from-orange-500/10 to-red-500/10"
    },
    {
      title: "Handloom",
      subtitle: "Stories woven by skilled hands.",
      description: "Exquisite fabrics crafted by talented artisans, each piece carrying the heritage and skill of Assamese weaving traditions.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      icon: Scissors,
      color: "from-purple-500/10 to-pink-500/10"
    },
    {
      title: "Books",
      subtitle: "Words that shaped a region, written by its legends.",
      description: "Celebrate Assamese literature through works by renowned authors like Indira Goswami and Homen Borgohain.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      icon: BookOpen,
      color: "from-blue-500/10 to-green-500/10"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-assam-green/5 rounded-full border border-assam-green/20 mb-8">
            <span className="text-sm font-semibold text-assam-green uppercase tracking-wide">Our Collections</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            The Essence of <span className="text-gradient">Ulog</span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Ulog brings you the authentic essence of Assam – through rare ethnic foods, timeless handloom artistry, and celebrated Assamese literature.
            </p>
            <p className="text-lg md:text-xl text-assam-green font-semibold mt-4">
              Every purchase supports rural women, revives forgotten traditions, and fuels stories worth preserving.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {essenceItems.map((item, index) => (
            <Card key={item.title} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <CardContent className="relative p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <item.icon className="h-6 w-6 text-assam-green" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-assam-green transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 italic text-lg mb-4 font-medium">
                    "{item.subtitle}"
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button className="text-assam-green font-semibold hover:text-assam-green-dark transition-colors duration-200 group/btn">
                      Explore Collection
                      <span className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EssenceSection;
