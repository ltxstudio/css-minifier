import { FaCompressAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FaCompressAlt size={32} />
          <h2 className="text-xl font-semibold">CSS Minifier Tool</h2>
        </div>
      </div>
    </header>
  );
}
