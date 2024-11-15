import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

export default function Modal({ isOpen, setIsOpen }) {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0">
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50 px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-6 md:p-8 rounded-md shadow-lg max-w-md w-full"
        >
          <Dialog.Title className="text-lg md:text-xl font-bold">CSS Minified!</Dialog.Title>
          <Dialog.Description className="mt-2 text-gray-600">
            Your CSS was successfully minified. You can view or copy it below.
          </Dialog.Description>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
          >
            Close
          </button>
        </motion.div>
      </div>
    </Dialog>
  );
}
