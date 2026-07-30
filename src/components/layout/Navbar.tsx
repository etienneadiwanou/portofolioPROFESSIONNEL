import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { SECTIONS, SECTION_LABELS } from '../../constants/data';

interface NavbarProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  onNavigate: (id: string) => void;
  onToggleMenu: () => void;
}

export default function Navbar({ activeSection, mobileMenuOpen, onNavigate, onToggleMenu }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/40 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center space-x-2"
          >
           
            <span className="hidden sm:block text-gray-900 font-medium truncate">Etienne ADIWANOU</span>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {SECTIONS.map((section, i) => (
              <motion.button
                key={section}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => onNavigate(section)}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeSection === section
                    ? 'bg-white/80 text-gray-900 shadow-lg'
                    : 'text-gray-600 hover:bg-white/50'
                }`}
              >
                {SECTION_LABELS[section]}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Contact button */}
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="mailto:etienneadiwanou12@gmail.com"
              className="hidden sm:flex px-6 py-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Contact
            </motion.a>

            {/* Hamburger (mobile only) */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              onClick={onToggleMenu}
              className="md:hidden p-2 rounded-xl bg-white/60 text-gray-700 hover:bg-white/80 transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-white/20 bg-white/80 backdrop-blur-2xl"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {SECTIONS.map((section) => (
                <button
                  key={section}
                  onClick={() => onNavigate(section)}
                  className={`text-left px-4 py-3 rounded-xl transition-all ${
                    activeSection === section
                      ? 'bg-white text-gray-900 shadow-md'
                      : 'text-gray-600 hover:bg-white/60'
                  }`}
                >
                  {SECTION_LABELS[section]}
                </button>
              ))}
              <a
                href="mailto:etienneadiwanou12@gmail.com"
                className="mt-2 px-4 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-center shadow-lg"
                onClick={() => onNavigate('contact')}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
