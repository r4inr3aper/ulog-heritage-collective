
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'food', name: 'Ethnic Foods' },
    { id: 'handloom', name: 'Handloom' },
    { id: 'books', name: 'Books' }
  ];

  const products = [
    {
      id: 1,
      name: 'Northeastern Black Rice',
      price: '₹450',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Once a royal delicacy, now a farmer\'s pride.',
      story: 'Cultivated in the hills of Assam, this ancient grain was once reserved for royalty.',
      artisan: 'Grown by Lakshmi Collective, Sivasagar'
    },
    {
      id: 2,
      name: 'Traditional Assamese Silk Saree',
      price: '₹8,500',
      category: 'handloom',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Handwoven with golden threads of tradition.',
      story: 'Each saree takes 15 days to complete, representing centuries-old techniques.',
      artisan: 'Woven by Meera Devi, Sualkuchi'
    },
    {
      id: 3,
      name: 'Works of Indira Goswami',
      price: '₹650',
      category: 'books',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Literary masterpieces from the Jnanpith Award winner.',
      story: 'Dr. Indira Goswami\'s works capture the essence of Assamese society and culture.',
      artisan: 'Collected works translated into English'
    },
    {
      id: 4,
      name: 'Assam Tea Leaves (Special Blend)',
      price: '₹320',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Premium CTC tea from the gardens of Assam.',
      story: 'Hand-picked from high-altitude gardens, processed using traditional methods.',
      artisan: 'Sourced from Jorhat Tea Collective'
    },
    {
      id: 5,
      name: 'Handwoven Gamusa',
      price: '₹250',
      category: 'handloom',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'The iconic symbol of Assamese hospitality.',
      story: 'A traditional cloth that represents honor and respect in Assamese culture.',
      artisan: 'Crafted by Bina Das, Hajo'
    },
    {
      id: 6,
      name: 'Homen Borgohain Collection',
      price: '₹580',
      category: 'books',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Contemporary Assamese literature at its finest.',
      story: 'Explore modern Assam through the eyes of one of its greatest writers.',
      artisan: 'Complete collection with English translations'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-assam-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-assam-earth mb-4">Our Shop</h1>
          <p className="text-lg text-assam-earth/80">Discover authentic Assamese heritage through our curated collection</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={selectedCategory === category.id 
                  ? "bg-assam-red hover:bg-assam-red/90" 
                  : "border-assam-earth text-assam-earth hover:bg-assam-earth hover:text-white"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-assam-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-assam-earth mb-2">{product.name}</h3>
                  <p className="text-gray-600 italic mb-3">{product.description}</p>
                  <p className="text-sm text-gray-700 mb-3">{product.story}</p>
                  <p className="text-sm text-assam-red font-medium mb-4">{product.artisan}</p>
                  <Button className="w-full bg-assam-red hover:bg-assam-red/90 text-white">
                    Add to Cart
                  </Button>
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

export default Shop;
