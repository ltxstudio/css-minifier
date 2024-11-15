import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { FaCopy, FaCheck, FaTrash } from 'react-icons/fa';

export default function ResultDisplay({ minifiedCSS, setMinifiedCSS }) {
  const [copied, setCopied] = useState(false);

  // Reset the copied state after 2 seconds
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  // Handle clear button to reset the minifiedCSS
  const handleClear = () => {
    setMinifiedCSS(''); // Clear the minified CSS
  };

  return (
    <div className="mt-8 bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Minified CSS:</h2>

      {/* Display the minified CSS with syntax highlighting */}
      <SyntaxHighlighter language="css" style={docco} className="rounded-md border p-4">
        {minifiedCSS || 'Your minified CSS will appear here...'}
      </SyntaxHighlighter>

      <div className="flex justify-between mt-4">
        {/* Copy button */}
        <CopyToClipboard text={minifiedCSS} onCopy={handleCopy}>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center transition">
            {copied ? <FaCheck className="mr-2" /> : <FaCopy className="mr-2" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </CopyToClipboard>

        {/* Clear button */}
        <button
          onClick={handleClear}
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md flex items-center transition"
        >
          <FaTrash className="mr-2" />
          Clear
        </button>
      </div>
    </div>
  );
}
