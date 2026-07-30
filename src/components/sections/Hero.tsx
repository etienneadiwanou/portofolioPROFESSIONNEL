import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { fadeUp, staggerContainer } from '../../lib/animations';
import ShatteredPortrait from './ShatteredPortrait';

interface HeroProps {
  onNavigate: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="pt-8 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-8 items-center">

          {/* Bloc texte : 2e sur mobile, 1ère colonne sur desktop */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Badge disponibilité */}
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-block px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg mb-6">
                <span className="text-emerald-600 flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"></span>
                  Disponible pour de nouvelles opportunités
                </span>
              </div>
            </motion.div>

            {/* Titre */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-amber-900 bg-clip-text text-transparent leading-tight"
            >
              Menouwesso Etienne
              <br />
              <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                ADIWANOU
              </span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p variants={fadeUp} custom={2} className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-4">
              Monéticien | Développeur Web & Mobile
            </motion.p>

            {/* Description */}
            <motion.p variants={fadeUp} custom={3} className="text-sm sm:text-base text-gray-600 mb-8 max-w-xl leading-relaxed">
              Monéticien spécialisé en développement web et mobile, capable de concevoir des
              solutions complètes du front-end au back-end. Passionné par la technologie et la
              sécurité des systèmes de paiement.
            </motion.p>

            {/* Boutons */}
            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 text-sm sm:text-base"
              >
                Voir mes projets
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/20 text-gray-900 shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                Me contacter
              </button>
            </motion.div>
          </motion.div>

          {/* Photo : 1ère sur mobile, 2e colonne sur desktop */}
          <motion.div className="order-1 lg:order-2 relative">
            <ShatteredPortrait />
          </motion.div>

        </div>
      </div>
    </section>
  );
}