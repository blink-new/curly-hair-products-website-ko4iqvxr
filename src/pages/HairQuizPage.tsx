import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { ArrowRight, ArrowLeft, CheckCircle, Sparkles } from 'lucide-react';

interface QuizResults {
  curlType: string;
  recommendations: Array<{
    type: string;
    name: string;
    reason: string;
    price: string;
  }>;
  totalValue: number;
}

const HairQuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [results, setResults] = useState<QuizResults | null>(null);

  const questions = [
    {
      id: 0,
      question: "What's your natural curl pattern?",
      options: [
        { id: "2a", label: "2A - Loose waves", description: "Slight wave, fine texture" },
        { id: "2b", label: "2B - Defined waves", description: "More defined S-pattern" },
        { id: "2c", label: "2C - Strong waves", description: "Strong waves with some curls" },
        { id: "3a", label: "3A - Loose curls", description: "Large, loose spiral curls" },
        { id: "3b", label: "3B - Springy curls", description: "Springy ringlets" },
        { id: "3c", label: "3C - Tight curls", description: "Tight corkscrews" },
        { id: "4a", label: "4A - Soft coils", description: "Soft, fine coils" },
        { id: "4b", label: "4B - Z-pattern coils", description: "Z-pattern, less defined" },
        { id: "4c", label: "4C - Tight coils", description: "Tightest coil pattern" }
      ]
    },
    {
      id: 1,
      question: "How does your hair feel?",
      options: [
        { id: "dry", label: "Very dry", description: "Feels rough, tangles easily" },
        { id: "normal", label: "Normal", description: "Balanced moisture and oil" },
        { id: "oily", label: "Oily", description: "Gets greasy quickly at roots" }
      ]
    },
    {
      id: 2,
      question: "What's your biggest hair concern?",
      options: [
        { id: "frizz", label: "Frizz control", description: "Taming flyaways and frizz" },
        { id: "definition", label: "Curl definition", description: "Enhancing curl pattern" },
        { id: "volume", label: "Volume", description: "Adding body and bounce" },
        { id: "moisture", label: "Moisture", description: "Hydration and softness" },
        { id: "growth", label: "Hair growth", description: "Length retention and health" }
      ]
    },
    {
      id: 3,
      question: "How often do you wash your hair?",
      options: [
        { id: "daily", label: "Daily", description: "Every day" },
        { id: "every-other", label: "Every other day", description: "2-3 times per week" },
        { id: "weekly", label: "Weekly", description: "Once a week" },
        { id: "bi-weekly", label: "Bi-weekly", description: "Every 2 weeks or less" }
      ]
    },
    {
      id: 4,
      question: "What's your styling routine like?",
      options: [
        { id: "minimal", label: "Minimal", description: "Wash and go" },
        { id: "moderate", label: "Moderate", description: "A few products, some styling" },
        { id: "extensive", label: "Extensive", description: "Multiple products, detailed routine" }
      ]
    }
  ];

  const handleAnswer = (questionId: number, answerId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      generateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const generateResults = () => {
    // Simple logic to generate product recommendations based on answers
    const curlType = answers[0] || '3a';
    const hairFeel = answers[1] || 'normal';
    const concern = answers[2] || 'definition';
    const washFreq = answers[3] || 'weekly';
    const routine = answers[4] || 'moderate';

    const recommendations = [];

    // Shampoo recommendation
    if (washFreq === 'daily' || washFreq === 'every-other') {
      recommendations.push({
        type: 'Shampoo',
        name: 'Gentle Daily Cleansing Shampoo',
        reason: 'Perfect for frequent washing without over-drying',
        price: '$24.99'
      });
    } else {
      recommendations.push({
        type: 'Shampoo',
        name: 'Deep Cleansing Clarifying Shampoo',
        reason: 'Ideal for weekly deep cleansing',
        price: '$26.99'
      });
    }

    // Conditioner recommendation
    if (hairFeel === 'dry' || concern === 'moisture') {
      recommendations.push({
        type: 'Conditioner',
        name: 'Intensive Moisture Conditioner',
        reason: 'Provides deep hydration for dry curls',
        price: '$28.99'
      });
    } else {
      recommendations.push({
        type: 'Conditioner',
        name: 'Lightweight Daily Conditioner',
        reason: 'Perfect balance of moisture without weighing down curls',
        price: '$24.99'
      });
    }

    // Styler recommendation
    if (concern === 'frizz') {
      recommendations.push({
        type: 'Styler',
        name: 'Anti-Frizz Curl Cream',
        reason: 'Controls frizz while defining curls',
        price: '$22.99'
      });
    } else if (concern === 'definition') {
      recommendations.push({
        type: 'Styler',
        name: 'Curl Defining Gel',
        reason: 'Enhances natural curl pattern with strong hold',
        price: '$19.99'
      });
    } else if (concern === 'volume') {
      recommendations.push({
        type: 'Styler',
        name: 'Volumizing Mousse',
        reason: 'Adds body and bounce without crunch',
        price: '$18.99'
      });
    }

    // Treatment recommendation
    if (routine === 'extensive' || concern === 'growth') {
      recommendations.push({
        type: 'Treatment',
        name: 'Weekly Protein Treatment',
        reason: 'Strengthens hair for better growth and health',
        price: '$32.99'
      });
    }

    setResults({
      curlType,
      recommendations,
      totalValue: recommendations.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0)
    });
    setIsCompleted(true);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (isCompleted && results) {
    return (
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4 rounded-full">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Your Personalized Results!
            </h1>
            <p className="text-xl text-gray-600">
              Based on your answers, here are our top product recommendations
            </p>
          </div>

          <div className="grid gap-6">
            {results.recommendations.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Badge className="mr-3 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-0">
                          {product.type}
                        </Badge>
                        <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                      <p className="text-gray-600">{product.reason}</p>
                    </div>
                    <Button className="ml-6 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Complete Routine Value: ${results.totalValue.toFixed(2)}
            </h3>
            <p className="text-gray-600 mb-6">Get the bundle and save 15%!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-full">
                <Sparkles className="w-5 h-5 mr-2" />
                Get Complete Bundle
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-3 rounded-full">
                Retake Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Hair Quiz
          </h1>
          <p className="text-xl text-gray-600">
            Answer a few questions to get personalized product recommendations
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2 bg-amber-100" />
        </div>

        {/* Question Card */}
        <Card className="mb-8 bg-white shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option) => (
                <div
                  key={option.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-md ${
                    answers[currentQuestion] === option.id
                      ? 'border-amber-500 bg-amber-50'
                      : 'border-gray-200 hover:border-amber-300 hover:bg-amber-25'
                  }`}
                  onClick={() => handleAnswer(currentQuestion, option.id)}
                >
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                      answers[currentQuestion] === option.id
                        ? 'border-amber-500 bg-amber-500'
                        : 'border-gray-300'
                    }`}>
                      {answers[currentQuestion] === option.id && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className="px-6 py-3 border-amber-200 text-amber-700 hover:bg-amber-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button
            onClick={nextQuestion}
            disabled={!answers[currentQuestion]}
            className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
          >
            {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HairQuizPage;