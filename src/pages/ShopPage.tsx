import React, { useState } from 'react';
import { Filter, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ShopPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Essentials', 'Street', 'Accessories', 'Limited'];

  const products = [
    {
      id: 1,
      name: "VOA Essential Tee",
      price: 45,
      originalPrice: null,
      category: "Essentials",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 127,
      colors: ['Black', 'White', 'Gray'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      badge: null
    },
    {
      id: 2,
      name: "VOA Oversized Hoodie",
      price: 95,
      originalPrice: 120,
      category: "Street",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 89,
      colors: ['Black', 'Cream', 'Olive'],
      sizes: ['S', 'M', 'L', 'XL'],
      badge: "Sale"
    },
    {
      id: 3,
      name: "VOA Cargo Pants",
      price: 85,
      originalPrice: null,
      category: "Street",
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 156,
      colors: ['Black', 'Khaki', 'Navy'],
      sizes: ['28', '30', '32', '34', '36'],
      badge: null
    },
    {
      id: 4,
      name: "VOA Minimalist Cap",
      price: 35,
      originalPrice: null,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      reviews: 73,
      colors: ['Black', 'White', 'Navy'],
      sizes: ['One Size'],
      badge: null
    },
    {
      id: 5,
      name: "VOA Statement Jacket",
      price: 180,
      originalPrice: null,
      category: "Limited",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 5.0,
      reviews: 24,
      colors: ['Black', 'Navy'],
      sizes: ['S', 'M', 'L', 'XL'],
      badge: "Limited"
    },
    {
      id: 6,
      name: "VOA Basic Crewneck",
      price: 65,
      originalPrice: null,
      category: "Essentials",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 198,
      colors: ['Black', 'White', 'Gray', 'Navy'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      badge: null
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">SHOP VOA</h1>
          <p className="text-xl text-gray-300">Premium streetwear that speaks to your values</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filters & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${selectedCategory === category ? 'bg-black text-white' : 'text-black border-black hover:bg-black hover:text-white'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <div className="flex border border-black rounded">
              <Button
                variant={viewMode === 'grid' ? "default" : "ghost"}
                size="sm"
                className={`rounded-r-none border-0 ${viewMode === 'grid' ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "ghost"}
                size="sm"
                className={`rounded-l-none border-0 ${viewMode === 'list' ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                {product.badge && (
                  <Badge 
                    className={`absolute top-3 left-3 z-10 ${
                      product.badge === 'Sale' ? 'bg-red-500' : 
                      product.badge === 'Limited' ? 'bg-blue-500' : 'bg-black'
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="mr-2">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-bold text-lg group-hover:text-blue-500 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Colors:</span>
                  <div className="flex gap-1">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded-full border ${
                          color === 'Black' ? 'bg-black' :
                          color === 'White' ? 'bg-white border-gray-300' :
                          color === 'Gray' ? 'bg-gray-400' :
                          color === 'Navy' ? 'bg-blue-900' :
                          color === 'Cream' ? 'bg-amber-100' :
                          color === 'Olive' ? 'bg-green-700' :
                          color === 'Khaki' ? 'bg-yellow-700' :
                          'bg-gray-300'
                        }`}
                      />
                    ))}
                    {product.colors.length > 3 && (
                      <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;