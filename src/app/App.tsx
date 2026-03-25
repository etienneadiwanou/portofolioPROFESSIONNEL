import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Smartphone,
  Database,
  Shield,
  Mail,
  Github,
  Download,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Layers,
  Globe,
  Server,
  GitBranch,
  Layout,
  Zap,
  CheckCircle2,
} from 'lucide-react';

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const VP = { once: true, margin: '-80px' };

// ─── Component ────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const sectionLabels: Record<string, string> = {
    hero: 'Accueil',
    about: 'À propos',
    skills: 'Compétences',
    experience: 'Expériences',
    projects: 'Projets',
    contact: 'Contact',
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/30">

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/40 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">EA</span>
              </div>
              <span className="hidden sm:block text-gray-900 font-medium">Etienne ADIWANOU</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-1">
              {['hero', 'about', 'skills', 'experience', 'projects', 'contact'].map((section, i) => (
                <motion.button
                  key={section}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-xl transition-all ${
                    activeSection === section
                      ? 'bg-white/80 text-gray-900 shadow-lg'
                      : 'text-gray-600 hover:bg-white/50'
                  }`}
                >
                  {sectionLabels[section as keyof typeof sectionLabels]}
                </motion.button>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="mailto:etienneadiwanou12@gmail.com"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Contact
            </motion.a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp} custom={0}>
                <div className="inline-block px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg mb-6">
                  <span className="text-emerald-600 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Disponible pour de nouvelles opportunités
                  </span>
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-amber-900 bg-clip-text text-transparent"
              >
                Menouwesso Etienne
                <br />
                <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                  ADIWANOU
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="text-xl sm:text-2xl text-gray-700 mb-4">
                Monéticien | Développeur Web & Mobile
              </motion.p>

              <motion.p variants={fadeUp} custom={3} className="text-gray-600 mb-8 max-w-xl leading-relaxed">
                Monéticien spécialisé en développement web et mobile, capable de concevoir des
                solutions complètes du front-end au back-end. Passionné par la technologie et la
                sécurité des systèmes de paiement.
              </motion.p>

              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  Voir mes projets
                  <ChevronDown className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/20 text-gray-900 shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                >
                  Me contacter
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1760278041881-e64e501d009c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjbGVhbiUyMG1pbmltYWx8ZW58MXx8fHwxNzY5ODg4NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent"></div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Projets complétés</p>
                    <p className="text-2xl text-gray-900">10+</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-6 -right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-xl"
              >
                
                  
                
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-amber-900 bg-clip-text text-transparent">
              À propos de moi
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un professionnel polyvalent alliant expertise technique et vision stratégique
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Globe,
                title: 'Développement Web & Mobile',
                description: 'Expertise en React, Next.js, Flutter pour créer des applications modernes et performantes',
                gradient: 'from-blue-400 to-cyan-500',
              },
              {
                icon: Shield,
                title: 'Sécurité des Paiements',
                description: 'Spécialiste en monétique avec une compréhension approfondie des systèmes de paiement sécurisés',
                gradient: 'from-amber-400 to-yellow-500',
              },
              {
                icon: Zap,
                title: 'Transformation Numérique',
                description: "Accompagnement dans la digitalisation des processus métier et l'innovation technologique",
                gradient: 'from-emerald-400 to-green-500',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                custom={index}
                className="group relative"
              >
                <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-amber-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-amber-900 bg-clip-text text-transparent">
              Compétences Techniques
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un arsenal technologique complet pour vos projets
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: 'Front-end', icon: Layout, skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React', 'Next.js'], gradient: 'from-blue-400 to-cyan-500' },
              { title: 'Back-end', icon: Server, skills: ['Node.js', 'Prisma', 'Firebase', 'REST', 'SOAP'], gradient: 'from-emerald-400 to-green-500' },
              { title: 'Mobile', icon: Smartphone, skills: ['Flutter', 'FlutterFlow', 'React Native'], gradient: 'from-purple-400 to-pink-500' },
              { title: 'Base de données', icon: Database, skills: ['MySQL', 'PostgreSQL', 'Firebase'], gradient: 'from-orange-400 to-red-500' },
              { title: 'Méthodologies', icon: GitBranch, skills: ['UML', 'Design Patterns', 'Agile/Scrum'], gradient: 'from-amber-400 to-yellow-500' },
              { title: 'Outils', icon: Layers, skills: ['Git', 'GitHub', 'Trello', 'Postman', 'Figma'], gradient: 'from-indigo-400 to-blue-500' },
              { title: 'Automatisation', icon: Zap, skills: ['PowerShell', 'Python Scripts'], gradient: 'from-pink-400 to-rose-500' },
              { title: 'Sécurité', icon: Shield, skills: ['Monétique', 'Systèmes de paiement', 'Cryptographie'], gradient: 'from-teal-400 to-cyan-500' },
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index}
                className="group"
              >
                <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg text-gray-900">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-gray-50 text-gray-700 text-sm border border-gray-200">
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

      {/* ── Experience ── */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-amber-900 bg-clip-text text-transparent">
              Expériences Professionnelles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Mon parcours professionnel</p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-yellow-500 to-emerald-500"></div>

            {[
              {
                title: "Développeur Web Indépendant",
                period: "08/2025 – Aujourd'hui",
                location: 'Cotonou',
                achievements: [
                  "Développement d'une application web de gestion des factures (Next.js, React, Prisma)",
                  'Gestion des produits, création de factures, export PDF',
                  "Création d'un portfolio en HTML/CSS/JS",
                  "Prototypage d'une application mobile de gestion des prix du marché agricole",
                ],
                gradient: 'from-amber-400 to-yellow-500',
                side: 'left',
              },
              {
                title: "Stagiaire Technicien d'Exploitation Informatique",
                period: '04/2025 – 06/2025',
                location: 'Jericho, Cotonou',
                achievements: [
                  "Prototypage d'une application mobile agricole avec Figma",
                  "Front-end Flutter pour l'application GLECHE",
                  'Application de signalisation des urgences au Bénin (Flutter, Node.js, Firebase)',
                  'Mise en réseau des équipements informatiques',
                ],
                gradient: 'from-emerald-400 to-green-500',
                side: 'right',
              },
            ].map((exp, index) => (
              <motion.div
                key={index}
                variants={exp.side === 'left' ? fadeLeft : fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
                custom={index}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'} md:w-1/2`}
              >
                <div
                  className="hidden md:block absolute top-0 w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg"
                  style={{ [index % 2 === 0 ? 'right' : 'left']: '-12px' }}
                ></div>

                <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${exp.gradient} text-white shadow-lg mb-4`}>
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">{exp.title}</h3>
                  <p className="text-amber-600 mb-4">{exp.location}</p>
                  <ul className="space-y-2 text-gray-600">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            className="mt-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900">Formation</h3>
            </div>
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg"
            >
              <h4 className="text-xl mb-2 text-gray-900">Licence Professionnelle en Monétique</h4>
              <p className="text-amber-600 mb-2">Institut Supérieur Golden Académique – Cotonou</p>
              <p className="text-gray-600">2022 – 2025</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-amber-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-amber-900 bg-clip-text text-transparent">
              Mes Projets
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez quelques-unes de mes réalisations récentes
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'Application de Gestion de Factures',
                description: 'Application web complète pour la gestion des produits et la création de factures avec export PDF. Interface moderne et intuitive.',
                image: 'https://images.unsplash.com/photo-1625810765923-0814e674ed7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZvaWNlJTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Njk4ODg0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                tags: ['Next.js', 'React', 'Prisma', 'PDF'],
                gradient: 'from-blue-400 to-cyan-500',
              },
              {
                title: 'Application Mobile Agricole',
                description: 'Application de gestion des prix du marché agricole permettant aux agriculteurs de suivre les tendances du marché en temps réel.',
                image: 'https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMG1vYmlsZSUyMGFwcCUyMGZhcm1lcnN8ZW58MXx8fHwxNzY5ODg4NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
                tags: ['Flutter', 'Figma', 'Mobile'],
                gradient: 'from-emerald-400 to-green-500',
              },
              {
                title: 'Application de Signalisation des Urgences',
                description: 'Plateforme mobile pour la signalisation rapide des urgences au Bénin avec géolocalisation et notification en temps réel.',
                image: 'https://images.unsplash.com/photo-1726056652582-7c9d202d4018?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwYXltZW50JTIwdGVjaG5vbG9neSUyMGZpbnRlY2h8ZW58MXx8fHwxNzY5ODg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
                tags: ['Flutter', 'Node.js', 'Firebase'],
                gradient: 'from-red-400 to-orange-500',
              },
              {
                title: 'Portfolio Personnel',
                description: 'Site portfolio professionnel créé avec HTML, CSS et JavaScript pour présenter mes compétences et réalisations.',
                image: 'https://images.unsplash.com/photo-1760278041881-e64e501d009c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjbGVhbiUyMG1pbmltYWx8ZW58MXx8fHwxNzY5ODg4NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
                tags: ['HTML', 'CSS', 'JavaScript'],
                gradient: 'from-amber-400 to-yellow-500',
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeLeft : fadeRight}
                custom={index}
                className="group"
              >
                <div className="rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white shadow-lg text-sm`}>
                      Projet
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl mb-3 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-gray-50 text-gray-700 text-sm border border-gray-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-amber-900 bg-clip-text text-transparent">
              Travaillons Ensemble
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Je suis disponible pour des opportunités d'emploi, de stage ou de freelance
            </p>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 shadow-2xl text-white"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              className="grid md:grid-cols-2 gap-8 mb-12"
            >
              <motion.div variants={fadeLeft} className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-white/80 mb-1">Email</p>
                  <a href="mailto:etienneadiwanou12@gmail.com" className="text-lg hover:underline">
                    etienneadiwanou12@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeRight} className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center">
                  <Github className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-white/80 mb-1">GitHub</p>
                  <a href="#" className="text-lg hover:underline">@etienneadiwanou</a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a
                href="mailto:etienneadiwanou12@gmail.com"
                className="px-8 py-4 rounded-2xl bg-white text-amber-600 shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Envoyer un email
              </a>
              <a
                href="/ETIENNECV.pdf"
                download="ETIENNECV.pdf"
                className="px-8 py-4 rounded-2xl bg-white/20 backdrop-blur-xl text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 border border-white/20"
              >
                <Download className="w-5 h-5" />
                Télécharger CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <motion.footer
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VP}
        className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-amber-50/30 border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">© 2025 Menouwesso Etienne ADIWANOU. Tous droits réservés.</p>
          <p className="text-gray-500 text-sm mt-2">Conçu avec passion à Cotonou, Bénin 🇧🇯</p>
        </div>
      </motion.footer>
    </div>
  );
}