import React from 'react';
import { Heart, Target, Users, Globe } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Authenticity",
      description: "We believe in being genuine in everything we do. No fake promises, no empty marketing - just real products for real people."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Purpose",
      description: "Every product we create serves a purpose. We don't make things just to make things - we create with intention."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Our community shapes who we are. Your feedback, your style, your values - they all contribute to VOA's evolution."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sustainability",
      description: "We're committed to sustainable practices. Quality over quantity means our products last longer and impact less."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">ABOUT VOA</h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Born from the streets, shaped by values. VOA represents a new way of thinking about fashion - 
            where what you stand for matters more than what you own.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  VOA was born in 2024 from a simple observation: the fashion industry had lost its way. 
                  Fast fashion flooded the market with disposable clothing, while luxury brands priced out the very 
                  communities that inspired their designs.
                </p>
                <p>
                  We saw an opportunity to do things differently. To create premium streetwear that wasn't just about 
                  status symbols, but about values. To build a brand that stood for something more than profit.
                </p>
                <p>
                  <strong>Value Over Assets</strong> became our mantra. It means choosing quality over quantity, 
                  purpose over profit, and community over corporate interests.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="VOA Story"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These aren't just words on a page. They're the principles that guide every decision we make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-500 mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">The VOA Philosophy</h2>
          <div className="bg-black text-white p-12 rounded-lg">
            <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed">
              "We believe that what you wear should reflect who you are, not how much you have. 
              In a world obsessed with accumulating assets, we choose to accumulate values instead."
            </blockquote>
            <cite className="block mt-8 text-lg text-gray-300">- The VOA Team</cite>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built by the Community</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              VOA isn't just our brand - it's our collective vision for what fashion can be.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Designer"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Creative Director</h3>
              <p className="text-gray-600">Leading our design vision with street-inspired aesthetics</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Community Manager"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Community Lead</h3>
              <p className="text-gray-600">Connecting with our community and amplifying your voices</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Sustainability Manager"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Sustainability Lead</h3>
              <p className="text-gray-600">Ensuring our practices align with our environmental values</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            To create premium streetwear that empowers individuals to express their values, 
            build authentic communities, and prioritize substance over superficiality. 
            We're not just making clothes - we're making a statement.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;