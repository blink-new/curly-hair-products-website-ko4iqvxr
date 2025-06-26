import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import EducationPage from './pages/EducationPage';
import HairQuizPage from './pages/HairQuizPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/hair-quiz" element={<HairQuizPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;