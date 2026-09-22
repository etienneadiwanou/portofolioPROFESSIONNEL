import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, VP } from '../../lib/animations';
import { PROJECTS } from '../../constants/data';

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-amber-50/30">
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
            Mes Projets
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-unes de mes réalisations récentes
          </p>
        </motion.div>

        {/* Grille projets */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="grid sm:grid-cols-2 gap-6 sm:gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? fadeLeft : fadeRight}
              custom={index}
              className="group"
            >
              <div className="rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-4 right-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white shadow-lg text-xs sm:text-sm`}>
                    Projet
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-xl mb-2 sm:mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 sm:px-3 py-1 rounded-full bg-gray-50 text-gray-700 text-xs sm:text-sm border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Lien vers le repo ou le site déployé */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs sm:text-sm shadow-md hover:shadow-lg hover:opacity-90 transition-all`}
                    >
                      {project.linkLabel === 'GitHub' ? (
                        <Github className="w-4 h-4" />
                      ) : (
                        <ExternalLink className="w-4 h-4" />
                      )}
                      {project.linkLabel}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}