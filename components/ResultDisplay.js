import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { FaCopy, FaCheck } from 'react-icons/fa';

export default function ResultDisplay({ minifiedCSS }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold">Minified CSS:</h2>
      <SyntaxHighlighter language="css" style={docco} className="rounded-md border">
        {minifiedCSS || 'Your minified CSS will appear here...'}
      </SyntaxHighlighter>
      <CopyToClipboard text={minifiedCSS} onCopy={() => setCopied(true)}>
        <button className="bg-green-600 text-white py-2 px-4 mt-2 rounded-md flex items-center">
          {copied ? <FaCheck /> : <FaCopy />} {copied ? 'Copied' : 'Copy'}
        </button>
      </CopyToClipboard>
    </div>
  );
}
