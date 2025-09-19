
import React from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Offer from './components/Offer';
import Forms from './components/Forms';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContent: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-500 font-sans">
      <Navbar />
      <main className={`flex-grow ${location.pathname === '/' ? '' : 'pt-20'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HashRouter>
          <AppContent />
        </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;