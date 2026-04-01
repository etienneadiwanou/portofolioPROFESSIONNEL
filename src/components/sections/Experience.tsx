import { motion } from 'motion/react';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight, scaleIn, VP } from '../../lib/animations';
import { EXPERIENCES } from '../../constants/data';

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Titre */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-amber-900 bg-clip-text text-transparent">
            Expériences Professionnelles
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">Mon parcours professionnel</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne centrale — md+ uniquement */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-yellow-500 to-emerald-500 -translate-x-1/2"></div>

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              variants={exp.side === 'left' ? fadeLeft : fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              custom={index}
              className={`relative mb-8 sm:mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:ml-auto'
              }`}
            >
              {/* Point timeline — md+ uniquement */}
              <div
                className={`hidden md:block absolute top-6 w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg -translate-y-1/2 ${
                  index % 2 === 0 ? '-right-2' : '-left-2'
                }`}
              ></div>

              <div className="p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r ${exp.gradient} text-white shadow-lg mb-4`}>
                  <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{exp.period}</span>
                </div>
                <h3 className="text-base sm:text-xl mb-2 text-gray-900">{exp.title}</h3>
                <p className="text-amber-600 mb-4 text-sm sm:text-base">{exp.location}</p>
                <ul className="space-y-2 text-gray-600">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Formation */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} className="mt-16 sm:mt-20">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center shadow-lg flex-shrink-0">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl text-gray-900">Formation</h3>
          </div>
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            className="p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg"
          >
            <h4 className="text-lg sm:text-xl mb-2 text-gray-900">Licence Professionnelle en Monétique</h4>
            <p className="text-amber-600 mb-2 text-sm sm:text-base">Institut Supérieur Golden Académique – Cotonou</p>
            <p className="text-gray-600 text-sm sm:text-base">2022 – 2025</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
