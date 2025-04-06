import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    hero: {
      title: 'Alaa Ben Chouikhaa',
      subtitle: 'Full Stack Developer & AI Specialist',
      description: 'Passionate about creating innovative solutions using cutting-edge technologies',
      button: 'Get in Touch'
    },
    about: {
      title: 'About Me',
      description: 'Hello! I\'m Alaa Ben Chouikhaa, a passionate software developer and AI specialist with a keen interest in creating elegant solutions to complex problems. I am currently pursuing my Bachelor\'s in Information and Communication Technology at the Faculty of Sciences of Tunis, where I\'ve developed a strong foundation in both web development and artificial intelligence.',
      skills: 'Skills & Technologies',
      experience: 'Experience'
    },
    skills: {
      title: 'Technical Skills',
      description: 'A comprehensive overview of my technical expertise and the tools I work with',
      categories: {
        ai: 'AI & Machine Learning',
        web: 'Web Development',
        backend: 'Backend Development',
        security: 'Security'
      }
    },
    projects: {
      title: 'Featured Projects',
      description: 'Some of my recent work and personal projects',
      categories: {
        all: 'All Projects',
        ai: 'AI & Machine Learning',
        web: 'Web Development'
      },
      viewCode: 'View Code',
      liveDemo: 'Live Demo',
      navigate: 'Swipe or use arrow keys to navigate'
    },
    contact: {
      title: 'Let\'s Work Together',
      description: 'Have a project in mind? Let\'s discuss how I can help bring your ideas to life.',
      getInTouch: 'Get in Touch',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      emailMe: 'Email Me',
      location: 'Tunis, Tunisia',
      availability: 'I\'m available for freelance projects, consulting, and full-time opportunities. Whether you need a complete solution or assistance with a specific aspect of your project, I\'m here to help.'
    }
  },
  fr: {
    hero: {
      title: 'Alaa Ben Chouikhaa',
      subtitle: 'Développeur Full Stack & Spécialiste IA',
      description: 'Passionné par la création de solutions innovantes utilisant des technologies de pointe',
      button: 'Contactez-moi'
    },
    about: {
      title: 'À Propos',
      description: 'Bonjour ! Je suis Alaa Ben Chouikhaa, un développeur passionné et spécialiste en IA avec un vif intérêt pour la création de solutions élégantes à des problèmes complexes. Je poursuis actuellement mon Bachelor en Technologies de l\'Information et de la Communication à la Faculté des Sciences de Tunis, où j\'ai développé une solide base en développement web et en intelligence artificielle.',
      skills: 'Compétences & Technologies',
      experience: 'Expérience'
    },
    skills: {
      title: 'Compétences Techniques',
      description: 'Un aperçu complet de mon expertise technique et des outils avec lesquels je travaille',
      categories: {
        ai: 'IA & Apprentissage Automatique',
        web: 'Développement Web',
        backend: 'Développement Backend',
        security: 'Sécurité'
      }
    },
    projects: {
      title: 'Projets en Vedette',
      description: 'Quelques-uns de mes travaux récents et projets personnels',
      categories: {
        all: 'Tous les Projets',
        ai: 'IA & Apprentissage Automatique',
        web: 'Développement Web'
      },
      viewCode: 'Voir le Code',
      liveDemo: 'Démo en Direct',
      navigate: 'Glissez ou utilisez les flèches pour naviguer'
    },
    contact: {
      title: 'Travaillons Ensemble',
      description: 'Vous avez un projet en tête ? Discutons de la façon dont je peux vous aider à concrétiser vos idées.',
      getInTouch: 'Contactez-moi',
      name: 'Nom',
      email: 'Email',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer le Message',
      emailMe: 'Envoyez-moi un Email',
      location: 'Tunis, Tunisie',
      availability: 'Je suis disponible pour des projets freelance, du conseil et des opportunités à temps plein. Que vous ayez besoin d\'une solution complète ou d\'une assistance sur un aspect spécifique de votre projet, je suis là pour vous aider.'
    }
  }
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const value = {
    language,
    translations,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
}; 