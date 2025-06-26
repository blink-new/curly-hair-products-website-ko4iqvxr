import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Star, Heart, ShoppingBag } from 'lucide-react';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'shampoo', name: 'Shampoos' },
    { id: 'conditioner', name: 'Conditioners' },
    { id: 'styler', name: 'Stylers' },
    { id: 'treatment', name: 'Treatments' },
  ];

  const products = [
    {
      id: 1,
      name: "Gentle Curl Cleansing Shampoo",
      category: "shampoo",
      price: "$24.99",
      rating: 4.8,
      reviews: 127,
      curlType: "2A-3C",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
      description: "Sulfate-free formula that gently cleanses without stripping natural oils",
      ingredients: ["Coconut Oil", "Shea Butter", "Aloe Vera"]
    },
    {
      id: 2,
      name: "Deep Moisture Conditioner",
      category: "conditioner",
      price: "$28.99",
      rating: 4.9,
      reviews: 203,
      curlType: "3A-4C",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
      description: "Rich, nourishing conditioner for intense hydration and detangling",
      ingredients: ["Argan Oil", "Coconut Milk", "Keratin"]
    },
    {
      id: 3,
      name: "Curl Defining Cream",
      category: "styler",
      price: "$19.99",
      rating: 4.7,
      reviews: 89,
      curlType: "2B-3B",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      description: "Lightweight cream that defines curls and reduces frizz all day",
      ingredients: ["Flaxseed Gel", "Jojoba Oil", "Vitamin E"]
    },
    {
      id: 4,
      name: "Curl Activating Gel",
      category: "styler",
      price: "$22.99",
      rating: 4.6,
      reviews: 156,
      curlType: "3A-4A",
      image: "https://images.unsplash.com/photo-1607762542333-3d0d4b3c6a9f?w=400&h=400&fit=crop",
      description: "Strong hold gel that enhances curl pattern without crunch",
      ingredients: ["Aloe Vera", "Castor Oil", "Honey"]
    },
    {
      id: 5,
      name: "Overnight Hair Mask",
      category: "treatment",
      price: "$32.99",
      rating: 4.9,
      reviews: 91,
      curlType: "2A-4C",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
      description: "Intensive overnight treatment for deeply damaged or dry curls",
      ingredients: ["Avocado Oil", "Protein Complex", "Silk Amino Acids"]
    },
    {
      id: 6,
      name: "Leave-In Conditioner Spray",
      category: "treatment",
      price: "$16.99",
      rating: 4.8,
      reviews: 134,
      curlType: "2A-3C",
      image: "https://images.unsplash.com/photo-1595475038665-fdf97de65634?w=400&h=400&fit=crop",
      description: "Lightweight daily protection and moisture boost for healthy curls",
      ingredients: ["Rose Water", "Glycerin", "Panthenol"]
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of curl-loving products, each formulated with natural ingredients and love
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                  : 'border-amber-200 text-amber-700 hover:bg-amber-50'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Button size="sm" variant="ghost" className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </Button>
                </div>
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-0">
                  {product.curlType}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-xl font-bold text-amber-600">{product.price}</span>
                </div>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Key Ingredients:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.ingredients.map((ingredient, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-amber-50 text-amber-700 border-amber-200">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white transition-all duration-300 transform hover:scale-105">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Not sure which products are right for you?</h3>
          <p className="text-gray-600 mb-6">Take our personalized hair quiz to get custom recommendations</p>
          <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            Take Hair Quiz →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;