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

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-grow container mx-auto px-4 md:px-8 py-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-700">
          CSS Minifier & Compressor
        </h1>

        <CSSForm setMinifiedCSS={setMinifiedCSS} setIsModalOpen={setIsModalOpen} />
        <ResultDisplay minifiedCSS={minifiedCSS} />

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
      </motion.main>
      <Footer />
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
