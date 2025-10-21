import React from 'react';
import { motion } from 'framer-motion';

const leafVariants = {
  hidden: { scale: 0, rotate: -45, opacity: 0 },
  visible: { scale: 1, rotate: 0, opacity: 1 },
};

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      {/* Stem */}
      <motion.div
        className="w-1 h-16 bg-green-700 rounded-full mb-2"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror' }}
      />

      {/* Leaves */}
      <div className="flex gap-2">
        <motion.div
          className="w-4 h-8 bg-green-500 rounded-full"
          variants={leafVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: 0.2,
          }}
        />
        <motion.div
          className="w-4 h-8 bg-green-500 rounded-full"
          variants={leafVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: 0.5,
          }}
        />
      </div>

      <motion.p
        className="mt-6 text-green-900 font-semibold"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Growing your GreenNest...
      </motion.p>
    </div>
  );
};

export default Loading;
