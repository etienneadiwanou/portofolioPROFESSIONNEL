import {
  Globe,
  Shield,
  Zap,
  Layout,
  Server,
  Smartphone,
  Database,
  GitBranch,
  Layers,
} from 'lucide-react';

export const SECTION_LABELS: Record<string, string> = {
  hero: 'Accueil',
  about: 'À propos',
  skills: 'Compétences',
  experience: 'Expériences',
  projects: 'Projets',
  contact: 'Contact',
};

export const SECTIONS = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];

export const ABOUT_CARDS = [
  {
    icon: Globe,
    title: 'Développement Web & Mobile',
    description: 'Expertise en React, Next.js, Vue.js et Flutter pour créer des applications modernes et performantes',
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
];

export const SKILLS = [
  { title: 'Front-end', icon: Layout, skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Vue.js', 'React', 'Next.js'], gradient: 'from-blue-400 to-cyan-500' },
  { title: 'Back-end', icon: Server, skills: ['Laravel', 'PHP', 'Node.js', 'Prisma', 'Firebase', 'REST', 'SOAP'], gradient: 'from-emerald-400 to-green-500' },
  { title: 'Mobile', icon: Smartphone, skills: ['Flutter', 'FlutterFlow', 'Kotlin', 'Jetpack Compose', 'Android natif', 'MVVM'], gradient: 'from-purple-400 to-pink-500' },
  { title: 'Base de données', icon: Database, skills: ['MySQL', 'PostgreSQL', 'Firebase'], gradient: 'from-orange-400 to-red-500' },
  { title: 'Méthodologies', icon: GitBranch, skills: ['UML', 'Design Patterns', 'Agile/Scrum'], gradient: 'from-amber-400 to-yellow-500' },
  { title: 'Outils', icon: Layers, skills: ['Git', 'GitHub', 'Trello', 'Postman', 'Figma'], gradient: 'from-indigo-400 to-blue-500' },
  { title: 'Automatisation', icon: Zap, skills: ['PowerShell', 'Python Scripts'], gradient: 'from-pink-400 to-rose-500' },
  { title: 'Monétique & Paiements', icon: Shield, skills: ['Monétique', 'EMV', 'ISO 8583', 'PCI DSS', 'FedaPay', 'PawaPay', 'AfriBaPay', 'PayPal', 'Mobile Money'], gradient: 'from-teal-400 to-cyan-500' },
];

export const EXPERIENCES = [
  {
    title: 'Développeur Informatique',
    period: "02/2026 – Aujourd'hui",
    location: 'DigiWeb-SARL, Cotonou',
    achievements: [
      'Développement de Loydef, plateforme de services juridiques web (Vue.js) et mobile (Flutter), backend Laravel & PostgreSQL',
      'Intégration et tests de 4 moyens de paiement : FedaPay, PawaPay, AfriBaPay et PayPal',
      "Diagnostic d'intégrations API : analyse des requêtes HTTP, payloads JSON, statuts d'opérations et messages d'erreur avec Postman",
      'Suivi des flux de transactions et investigation des anomalies liées aux intégrations de paiement',
      "Résolution de problématiques d'authentification, de gestion des sessions, de contrôle d'accès et d'incidents de sécurité",
      'Travail en méthodologie Agile avec les équipes produit et design',
    ],
    gradient: 'from-blue-400 to-indigo-500',
    side: 'left',
  },
  {
    title: 'Développeur Web Indépendant',
    period: '08/2025 – 01/2026',
    location: 'Missions freelance, Cotonou',
    achievements: [
      "Développement d'une application web de gestion des factures (Next.js, React, Prisma) : produits, facturation, génération de PDF",
      'AdminFlow : gestion des demandes administratives (rôles et permissions, workflow, validation/rejet, historique), déployé sur AlwaysData',
      'Solutions full-stack : Laravel, Vue.js, TypeScript, Tailwind CSS, PostgreSQL, API REST',
    ],
    gradient: 'from-amber-400 to-yellow-500',
    side: 'right',
  },
  {
    title: "Stagiaire Technicien d'Exploitation Informatique",
    period: '04/2025 – 06/2025',
    location: 'Mont D\'or SARL, Cotonou',
    achievements: [
      "Conception du front-end de l'application agricole Gleche (Flutter)",
      'Conception d\'une application de signalisation des urgences au Bénin (Flutter, Node.js, Firebase)',
      'Mise en réseau des équipements informatiques et dépannage technique',
    ],
    gradient: 'from-emerald-400 to-green-500',
    side: 'left',
  },
  {
    title: 'Stagiaire Technicien Informatique',
    period: '06/2023 – 08/2023',
    location: 'CNHU, Cotonou',
    achievements: [
      "Gestion de l'infrastructure informatique et administration réseau",
    ],
    gradient: 'from-purple-400 to-pink-500',
    side: 'right',
  },
];

export const PROJECTS = [
  {
    title: 'Loydef - Plateforme de Services Juridiques',
    description: "Plateforme de services juridiques web (Vue.js) et mobile (Flutter), backend Laravel & PostgreSQL. Gestion sécurisée, traduction multilingue, intégration de 4 moyens de paiement (FedaPay, PawaPay, AfriBaPay, PayPal) et fiabilisation des flux de données sensibles.",
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Flutter', 'Vue.js', 'Laravel', 'PostgreSQL', 'FedaPay', 'PawaPay', 'PayPal'],
    gradient: 'from-blue-500 to-indigo-600',
    link: 'https://loydef.com',
    linkLabel: 'Voir le site',
  },
  {
    title: 'DigiWallet - Portefeuille Électronique Mobile',
    description: "Application mobile Android native simulant les principales fonctionnalités d'un portefeuille électronique : authentification, tableau de bord utilisateur, gestion de solde fictif, simulation de transferts entre utilisateurs et consultation de l'historique des transactions.",
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Kotlin', 'Jetpack Compose', 'Android', 'MVVM', 'Firebase'],
    gradient: 'from-purple-500 to-pink-500',
    link: 'https://github.com/etienneadiwanou',
    linkLabel: 'GitHub',
  },
  {
    title: 'Gleche - Application Agricole Mobile',
    description: "Front-end mobile de l'application agricole Gleche, conçu avec Flutter. Permet aux agriculteurs de suivre les activités agricoles et les informations liées à leurs exploitations.",
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Flutter', 'Mobile', 'Figma'],
    gradient: 'from-green-500 to-teal-500',
    link: '',
    linkLabel: 'GitHub',
  },
  {
    title: 'AdminFlow - Gestion Administrative',
    description: "Plateforme web de centralisation et suivi des demandes administratives d'une organisation : gestion des utilisateurs, rôles et permissions, workflow de traitement, documents, affectations, validation/rejet et historique.",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Laravel', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'REST API'],
    gradient: 'from-indigo-400 to-blue-500',
    link: 'https://adminflow.alwaysdata.net/',
    linkLabel: 'Voir le site',
  },
  {
    title: 'Application de Gestion de Factures',
    description: 'Application web complète pour la gestion des produits et la création de factures avec export PDF. Interface moderne et intuitive.',
    image: 'https://images.unsplash.com/photo-1625810765923-0814e674ed7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZvaWNlJTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Njk4ODg0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'React', 'Prisma', 'PDF'],
    gradient: 'from-blue-400 to-cyan-500',
    link: 'https://github.com/etienneadiwanou/gestion-des-factures-',
    linkLabel: 'GitHub',
  },
  {
    title: 'Application Mobile Agricole',
    description: 'Application de gestion des prix du marché agricole permettant aux agriculteurs de suivre les tendances du marché en temps réel.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjA4NTh8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGFwcHxlbnwwfHx8fDE3NzA0Nzc2MTQ&ixlib=rb-4.0.3&q=80&w=1080',
    tags: ['Flutter', 'Figma', 'Mobile'],
    gradient: 'from-emerald-400 to-green-500',
    link: '',
    linkLabel: 'GitHub',
  },
  {
    title: 'Application de Signalisation des Urgences',
    description: 'Plateforme mobile pour la signalisation rapide des urgences au Bénin avec géolocalisation et notification en temps réel.',
    image: 'https://images.unsplash.com/photo-1726056652582-7c9d202d4018?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwYXltZW50JTIwdGVjaG5vbG9neSUyMGZpbnRlY2h8ZW58MXx8fHwxNzY5ODg4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Flutter', 'Node.js', 'Firebase'],
    gradient: 'from-red-400 to-orange-500',
    link: 'https://github.com/etienneadiwanou/OHSECOURS',
    linkLabel: 'GitHub',
  },
  {
    title: 'Portfolio Personnel',
    description: 'Site portfolio professionnel créé avec HTML, CSS et JavaScript pour présenter mes compétences et réalisations.',
    image: 'https://images.unsplash.com/photo-1760278041881-e64e501d009c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjbGVhbiUyMG1pbmltYWx8ZW58MXx8fHwxNzY5ODg4NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-amber-400 to-yellow-500',
    link: 'https://etienneadiwanou.netlify.app',
    linkLabel: 'Voir le site',
  },
];