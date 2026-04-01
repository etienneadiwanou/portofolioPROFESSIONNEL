import { motion } from 'motion/react';
import { fadeUp, staggerContainer, VP } from '../../lib/animations';
import { SKILLS } from '../../constants/data';

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto">

        {/* Titre */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-amber-900 bg-clip-text text-transparent">
            Compétences Techniques
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Un arsenal technologique complet pour vos projets
          </p>
        </motion.div>

        {/* Grille des compétences */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {SKILLS.map((category, index) => (
            <motion.div key={index} variants={fadeUp} custom={index} className="group">
              <div className="p-5 sm:p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg text-gray-900 leading-tight">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-2 sm:px-3 py-1 rounded-full bg-gray-50 text-gray-700 text-xs sm:text-sm border border-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
