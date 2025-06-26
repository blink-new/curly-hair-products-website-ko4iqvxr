import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Leaf, Star } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      title: "Curl-Specific Formulas",
      description: "Products designed for your unique curl pattern and porosity level"
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Gentle & Nourishing",
      description: "Sulfate-free, paraben-free formulas that love your curls"
    },
    {
      icon: <Leaf className="w-6 h-6 text-emerald-600" />,
      title: "Natural Ingredients",
      description: "Enriched with shea butter, coconut oil, and botanical extracts"
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Expert Approved",
      description: "Developed with curl specialists and real curly-haired people"
    }
  ];

  const curlTypes = [
    { type: "2A-2B", name: "Wavy", description: "Loose waves with light texture", image: "https://images.unsplash.com/photo-1594736797933-d0b22ce8a852?w=300&h=400&fit=crop" },
    { type: "2C-3A", name: "Curly", description: "Defined curls with bounce", image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=400&fit=crop" },
    { type: "3B-3C", name: "Coily", description: "Tight curls with volume", image: "https://images.unsplash.com/photo-1634198977815-4e64d1c8f4a7?w=300&h=400&fit=crop" },
    { type: "4A-4C", name: "Kinky", description: "Dense, tightly coiled texture", image: "https://images.unsplash.com/photo-1596815059600-9e219b6b4338?w=300&h=400&fit=crop" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200 transition-colors">
            ✨ Celebrate Your Natural Texture
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent mb-6 leading-tight">
            Love Your Curls
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the perfect products for your unique curl pattern. From gentle cleansers to nourishing treatments, we've got everything you need for healthy, beautiful curls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
              <Link to="/hair-quiz">Find Your Products</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-6 text-lg rounded-full transition-all duration-300">
              <Link to="/products">Shop All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Our Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curl Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Products for Every Curl Type
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From loose waves to tight coils, we have specialized formulas for every curl pattern
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curlTypes.map((curl, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white border-0 shadow-lg">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={curl.image} 
                    alt={curl.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-0">
                    {curl.type}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{curl.name}</h3>
                  <p className="text-gray-600">{curl.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Curls?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Take our quick hair quiz to discover your perfect product routine
          </p>
          <Button size="lg" asChild className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
            <Link to="/hair-quiz">Start Hair Quiz →</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;