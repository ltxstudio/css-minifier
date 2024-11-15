'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CSSForm from '../components/CSSForm';
import ResultDisplay from '../components/ResultDisplay';
import Modal from '../components/Modal';
import Section from '../components/Section';

import { FaRocket, FaBolt, FaQuestionCircle } from 'react-icons/fa';

export default function HomePage() {
  const [minifiedCSS, setMinifiedCSS] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Function to simulate the loading state for CSS minification
  const handleMinifySubmit = async (css) => {
    setIsLoading(true);
    setTimeout(() => {
      setMinifiedCSS(css); // Simulate the minification process
      setIsLoading(false);
      setIsModalOpen(true); // Open the modal when minified
    }, 1500); // Simulate a delay of 1.5 seconds
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-grow container mx-auto px-4 md:px-8 py-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-700">
          CSS Minifier & Compressor
        </h1>

        <CSSForm 
          setMinifiedCSS={setMinifiedCSS} 
          setIsModalOpen={setIsModalOpen} 
          handleMinifySubmit={handleMinifySubmit}
          isLoading={isLoading}
        />

        <ResultDisplay minifiedCSS={minifiedCSS} />

        {/* Responsive Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Section
            title="About"
            description="Optimize your CSS files easily and improve your site's performance."
            icon={<FaRocket className="text-blue-600" size={40} />}
          />
          <Section
            title="Features"
            description="Includes instant compression, syntax highlighting, and more."
            icon={<FaBolt className="text-yellow-500" size={40} />}
          />
          <Section
            title="FAQ"
            description="Learn how to get the most out of this tool."
            icon={<FaQuestionCircle className="text-green-500" size={40} />}
          />
        </div>

        {/* Preview of Minified CSS */}
        {minifiedCSS && (
          <div className="mt-8 p-4 bg-gray-100 rounded-md">
            <h3 className="text-xl font-semibold text-gray-800">Preview of Minified CSS</h3>
            <div
              className="p-4 bg-gray-200 rounded-md"
              style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}
            >
              {minifiedCSS}
            </div>
          </div>
        )}
      </motion.main>

      <Footer />
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
