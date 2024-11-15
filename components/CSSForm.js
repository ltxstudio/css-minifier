import { useState } from 'react';
import csso from 'csso';
import { FaSpinner } from 'react-icons/fa';

export default function CSSForm({ setMinifiedCSS, setIsModalOpen }) {
  const [inputCSS, setInputCSS] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(''); // Reset error message
    setSuccessMessage(''); // Reset success message

    try {
      const minified = csso.minify(inputCSS).css;
      setMinifiedCSS(minified);
      setSuccessMessage('CSS minified successfully!');
      setInputCSS(''); // Clear the textarea after successful minification
      setIsModalOpen(true);
    } catch (error) {
      // Log the error for debugging
      console.error('Minification error:', error);
      
      // Show a more specific error message
      const errorMsg = error.message || 'An error occurred during minification. Please check your CSS.';
      setErrorMessage(errorMsg);
    } finally {
      setIsLoading(false);
    }
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

      {/* Display success or error message */}
      {successMessage && (
        <div className="text-green-600 bg-green-100 p-3 rounded-md">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="text-red-600 bg-red-100 p-3 rounded-md">
          {errorMessage}
        </div>
      )}

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
