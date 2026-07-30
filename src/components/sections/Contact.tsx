import { motion } from 'motion/react';
import { Mail, Github, Download } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, VP } from '../../lib/animations';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Titre */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-amber-900 bg-clip-text text-transparent">
            Travaillons Ensemble
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Je suis disponible pour des opportunités d'emploi, de stage ou de freelance
          </p>
        </motion.div>

        {/* Card contact */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="p-6 sm:p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 shadow-2xl text-white"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12"
          >
            {/* Email */}
            <motion.div variants={fadeLeft} className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-white/80 mb-1">Email</p>
                <a href="mailto:etienneadiwanou12@gmail.com" className="text-sm sm:text-lg hover:underline break-all">
                  etienneadiwanou12@gmail.com
                </a>
              </div>
            </motion.div>

            {/* GitHub */}
            <motion.div variants={fadeRight} className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center flex-shrink-0">
                <Github className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-white/80 mb-1">GitHub</p>
                <a href="https://github.com/etienneadiwanou" className="text-sm sm:text-lg hover:underline">
                  @etienneadiwanou
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Boutons d'action */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <a
              href="mailto:etienneadiwanou12@gmail.com"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white text-amber-600 shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Envoyer un email
            </a>
            <a
              href="/CV_etienneADIWANOU.pdf"
              download="CV_etienneADIWANOU.pdf"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white/20 backdrop-blur-xl text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 border border-white/20 text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Télécharger CV
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
