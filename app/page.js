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
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-grow container mx-auto p-6"
      >
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
          CSS Minifier & Compressor
        </h1>

        <CSSForm setMinifiedCSS={setMinifiedCSS} setIsModalOpen={setIsModalOpen} />
        <ResultDisplay minifiedCSS={minifiedCSS} />

        <Section
          title="About"
          description="Optimize your CSS files easily and improve performance."
          icon={<FaRocket className="text-blue-600" size={40} />}
        />
        <Section
          title="Features"
          description="Powerful features like instant compression and syntax highlighting."
          icon={<FaBolt className="text-yellow-500" size={40} />}
        />
        <Section
          title="FAQ"
          description="Learn how to use this tool effectively."
          icon={<FaQuestionCircle className="text-green-500" size={40} />}
        />
      </motion.main>
      <Footer />
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
