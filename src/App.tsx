import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Audience from './pages/Audience';
import News from './pages/News';
import Gabon from './pages/Gabon';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <SEOHead />
      <div className="min-h-screen bg-white">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/audience" element={<Audience />} />
            <Route path="/news" element={<News />} />
            <Route path="/gabon" element={<Gabon />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;