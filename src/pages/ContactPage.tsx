import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Package, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Message sent! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Get a response within 24 hours",
      value: "hello@voa-brand.com",
      action: "mailto:hello@voa-brand.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Mon-Fri, 9AM-6PM EST",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Available during business hours",
      value: "Start a conversation",
      action: "#"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      description: "By appointment only",
      value: "Los Angeles, CA 90210",
      action: "#"
    }
  ];

  const faqItems = [
    {
      icon: <Package className="w-5 h-5" />,
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery."
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      question: "What's your return policy?",
      answer: "We offer 30-day returns on all items in original condition. Free return shipping on orders over $100."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "When will new collections drop?",
      answer: "We release new collections seasonally. Follow us on social media for early access announcements."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">GET IN TOUCH</h1>
          <p className="text-xl text-gray-300">
            Questions, feedback, or just want to say hello? We're here to listen.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-black focus:ring-black"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="border-gray-300 focus:border-black focus:ring-black resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-black text-white hover:bg-gray-800 py-3 text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Methods */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Other ways to reach us</h2>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-blue-500 mt-1">{method.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                    <a 
                      href={method.action}
                      className="text-black hover:text-blue-500 font-medium transition-colors"
                    >
                      {method.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Business Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {faqItems.map((item, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="text-blue-500 mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Follow VOA</h3>
          <p className="text-gray-600 mb-8">Stay connected with our community and be the first to know about new drops</p>
          <div className="flex justify-center space-x-6">
            {['Instagram', 'Twitter', 'TikTok', 'YouTube'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-black hover:text-blue-500 font-medium transition-colors text-lg"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;