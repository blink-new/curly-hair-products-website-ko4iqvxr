import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { BookOpen, Users, Star, Heart } from 'lucide-react';

const EducationPage = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding Your Curl Pattern",
      category: "Basics",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
      excerpt: "Learn how to identify your curl type and what it means for your hair care routine.",
      author: "Dr. Sarah Johnson",
      date: "Jan 15, 2024"
    },
    {
      id: 2,
      title: "The Science of Hair Porosity",
      category: "Advanced",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=300&fit=crop",
      excerpt: "Discover how hair porosity affects moisture retention and product absorption.",
      author: "Maria Rodriguez",
      date: "Jan 12, 2024"
    },
    {
      id: 3,
      title: "Protective Styling for Healthy Growth",
      category: "Styling",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1634198977815-4e64d1c8f4a7?w=400&h=300&fit=crop",
      excerpt: "Master protective styles that promote length retention and hair health.",
      author: "Jasmine Williams",
      date: "Jan 10, 2024"
    },
    {
      id: 4,
      title: "DIY Hair Masks for Curly Hair",
      category: "DIY",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1596815059600-9e219b6b4338?w=400&h=300&fit=crop",
      excerpt: "Simple, effective hair masks you can make at home with natural ingredients.",
      author: "Alex Chen",
      date: "Jan 8, 2024"
    },
    {
      id: 5,
      title: "Nighttime Routine for Curly Hair",
      category: "Routines",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1594736797933-d0b22ce8a852?w=400&h=300&fit=crop",
      excerpt: "Protect your curls while you sleep for better next-day hair.",
      author: "Taylor Brown",
      date: "Jan 5, 2024"
    },
    {
      id: 6,
      title: "Transitioning from Relaxed to Natural",
      category: "Transition",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
      excerpt: "A complete guide to successfully transitioning to natural hair.",
      author: "Dr. Angela Davis",
      date: "Jan 3, 2024"
    }
  ];

  const tips = [
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Deep Condition Weekly",
      description: "Give your curls the moisture they crave with a weekly deep conditioning treatment"
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Use a Microfiber Towel",
      description: "Regular towels can cause frizz. Use microfiber or cotton t-shirts instead"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      title: "Sleep on Silk",
      description: "Silk or satin pillowcases reduce friction and help maintain curl definition"
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Less is More",
      description: "Start with small amounts of product and build up as needed"
    }
  ];

  const curlTypes = [
    {
      type: "2A",
      name: "Loose Waves",
      description: "Fine, thin hair with a slight wave. Hair is generally easy to style and tends to be straight at the roots.",
      care: ["Use lightweight products", "Avoid heavy creams", "Focus on volume"]
    },
    {
      type: "2B",
      name: "Defined Waves",
      description: "Medium-textured hair with more defined S-pattern waves. May have some frizz.",
      care: ["Use curl-enhancing creams", "Scrunch to encourage waves", "Anti-frizz products"]
    },
    {
      type: "2C",
      name: "Strong Waves",
      description: "Strong waves with some curls, usually coarse and prone to frizz.",
      care: ["Use stronger hold products", "Deep condition regularly", "Protect from humidity"]
    },
    {
      type: "3A",
      name: "Loose Curls",
      description: "Large, loose spiral curls. Hair has a lot of body and bounce.",
      care: ["Use curl-defining creams", "Avoid sulfates", "Regular protein treatments"]
    },
    {
      type: "3B",
      name: "Springy Curls",
      description: "Springy ringlets with a circumference similar to a marker. More volume and texture.",
      care: ["Use leave-in conditioners", "Gel for definition", "Regular deep conditioning"]
    },
    {
      type: "3C",
      name: "Tight Curls",
      description: "Tight corkscrews with a circumference similar to a pencil. Dense and full.",
      care: ["Heavy moisturizers", "Protective styling", "Gentle detangling"]
    },
    {
      type: "4A",
      name: "Soft Coils",
      description: "Soft, fine coils with a lot of elasticity. Hair is fragile when wet.",
      care: ["Moisturize daily", "Gentle cleansing", "Protective styles"]
    },
    {
      type: "4B",
      name: "Z-Pattern Coils",
      description: "Less defined curl pattern with a Z-shape. Hair bends and folds over itself.",
      care: ["Heavy creams and butters", "Regular oil treatments", "Minimize manipulation"]
    },
    {
      type: "4C",
      name: "Tight Coils",
      description: "Tightest coil pattern with maximum shrinkage. Very fragile and needs gentle care.",
      care: ["Daily moisturizing", "Protective styling", "Pre-poo treatments"]
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Curly Hair Education
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about caring for and styling your beautiful curls
          </p>
        </div>

        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-amber-50 p-1 rounded-full">
            <TabsTrigger value="articles" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-amber-700">
              Articles
            </TabsTrigger>
            <TabsTrigger value="curl-guide" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-ambient-700">
              Curl Guide
            </TabsTrigger>
            <TabsTrigger value="tips" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-amber-700">
              Quick Tips
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white border-0 shadow-lg">
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-0">
                      {article.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{article.author}</span>
                      <span className="mx-2">•</span>
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-amber-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="curl-guide" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {curlTypes.map((curl) => (
                <Card key={curl.type} className="hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl font-bold text-amber-600">{curl.type}</CardTitle>
                      <Badge variant="outline" className="border-amber-200 text-amber-700">
                        {curl.name}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">{curl.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Care Tips:</h4>
                      <ul className="space-y-1">
                        {curl.care.map((tip, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="text-amber-600 mr-2">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tips.map((tip, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100">
                        {tip.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{tip.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Want Personalized Tips?</h3>
              <p className="text-gray-600 mb-6">Take our hair quiz to get customized advice for your unique curl pattern</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  Take Hair Quiz →
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EducationPage;