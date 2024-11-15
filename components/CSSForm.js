import { useState } from 'react';
import csso from 'csso';
import { FaSpinner } from 'react-icons/fa';

export default function CSSForm({ setMinifiedCSS, setIsModalOpen }) {
  const [inputCSS, setInputCSS] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const minified = csso.minify(inputCSS).css;
      setMinifiedCSS(minified);
      setIsLoading(false);
      setIsModalOpen(true);
    }, 500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white shadow-md rounded-md p-6 md:p-8"
    >
      <textarea
        placeholder="Paste your CSS here..."
        value={inputCSS}
        onChange={(e) => setInputCSS(e.target.value)}
        className="w-full h-40 p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 resize-none"
      ></textarea>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md flex justify-center items-center transition"
      >
        {isLoading ? <FaSpinner className="animate-spin" /> : 'Minify CSS'}
      </button>
    </form>
  );
}
