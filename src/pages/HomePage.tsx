import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Truck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Every piece is crafted with premium materials and attention to detail."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "Built by the community, for the community. Your voice shapes our brand."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Shipping",
      description: "Free worldwide shipping on orders over $100. Express options available."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Lifetime Warranty",
      description: "We stand by our quality. Lifetime warranty on all core products."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="block">VALUE</span>
            <span className="block text-blue-400">OVER</span>
            <span className="block">ASSETS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Street culture meets conscious consumption. Premium streetwear that values purpose over profit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-4">
              <Link to="/shop">
                Shop Collection <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose VOA?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just another clothing brand. We're a movement that prioritizes values over vanity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Collections</h2>
            <p className="text-xl text-gray-600">Curated pieces that define modern streetwear</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1503341338985-b018c9bed62d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Essential Collection"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold mb-2">ESSENTIALS</h3>
                    <p className="text-lg">Timeless basics, redefined</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Street Collection"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold mb-2">STREET</h3>
                    <p className="text-lg">Bold designs, bold statements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Philosophy</h2>
          <div className="text-2xl md:text-3xl font-light space-y-6 text-gray-700">
            <p>"In a world obsessed with possessions,</p>
            <p className="text-black font-normal">we choose to value what truly matters."</p>
            <p>Quality over quantity.</p>
            <p>Purpose over profit.</p>
            <p className="text-blue-500 font-bold">Value over assets.</p>
          </div>
          <Button asChild size="lg" className="mt-12 bg-black text-white hover:bg-gray-800 text-lg px-8 py-4">
            <Link to="/about">Learn More About VOA</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;