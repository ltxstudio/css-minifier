import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { FaCopy, FaCheck } from 'react-icons/fa';

export default function ResultDisplay({ minifiedCSS }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="mt-8 bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Minified CSS:</h2>
      <SyntaxHighlighter language="css" style={docco} className="rounded-md border">
        {minifiedCSS || 'Your minified CSS will appear here...'}
      </SyntaxHighlighter>
      <div className="flex justify-end mt-4">
        <CopyToClipboard text={minifiedCSS} onCopy={() => setCopied(true)}>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center transition">
            {copied ? <FaCheck className="mr-2" /> : <FaCopy className="mr-2" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
