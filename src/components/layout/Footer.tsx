import { motion } from 'motion/react';
import { fadeUp, VP } from '../../lib/animations';

export default function Footer() {
  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VP}
      className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-amber-50/30 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm sm:text-base text-gray-600">© 2025 Menouwesso Etienne ADIWANOU. Tous droits réservés.</p>
        <p className="text-gray-500 text-xs sm:text-sm mt-2">Conçu avec passion à Cotonou, Bénin 🇧🇯</p>
      </div>
    </motion.footer>
  );
}
