import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

export default function Modal({ isOpen, setIsOpen }) {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0">
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-6 rounded-md shadow-lg max-w-md mx-auto"
        >
          <Dialog.Title className="text-lg font-bold">CSS Minified!</Dialog.Title>
          <Dialog.Description className="mt-2">
            Your CSS was successfully minified. Check it out below.
          </Dialog.Description>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
          >
            Close
          </button>
        </motion.div>
      </div>
    </Dialog>
  );
}
