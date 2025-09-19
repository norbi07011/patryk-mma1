import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import RotatingImageCarousel from './RotatingImageCarousel';

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const FireIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
  </svg>
);

const icons: { [key: string]: React.ReactNode } = {
  target: <TargetIcon />,
  shield: <ShieldIcon />,
  fire: <FireIcon />,
};

const Home: React.FC = () => {
  const { t } = useLanguage();
  
  const carouselImages = [
    '/images/hero-main.jpg',
    '/images/hero-1.jpg',
    '/images/hero-2.jpg',
    '/images/hero-3.jpg',
    '/images/hero-4.jpg',
  ];
  
  const disciplines = ['Boks', 'Kickboxing', 'Wrestling', 'MMA', 'Grappling'];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[calc(100vh-5rem)] flex items-center justify-center text-white text-center p-4 overflow-hidden">
        <RotatingImageCarousel images={carouselImages} />
        <div className="relative z-10 max-w-4xl animate-fade-in-up bg-black/50 md:bg-transparent p-6 md:p-0 rounded-xl backdrop-blur-xs md:backdrop-blur-none">
          <h1 className="text-4xl md:text-6xl font-hooligan uppercase tracking-wider text-shadow-glow">
            {t('home.slogan')}
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            {t('home.intro')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/forms"
              className="w-full sm:w-auto px-8 py-3 bg-neon-yellow text-black font-bold rounded-lg shadow-lg shadow-neon-yellow/30 transform hover:scale-105 hover:shadow-xl hover:shadow-neon-yellow/50 transition-all duration-300"
            >
              {t('home.cta_register')}
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg shadow-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300"
            >
              {t('home.cta_contact')}
            </Link>
          </div>
        </div>
      </div>

      {/* Why Train Section */}
      <section className="py-16 bg-gray-100 dark:bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white">{t('home.why_train_title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t('home.why_train_items').map((item: { icon: string, title: string, description: string }) => (
              <div key={item.title} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-center items-center mb-4 text-neon-yellow">{icons[item.icon]}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Specializations Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">{t('home.specializations_title')}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {disciplines.map(d => (
                <Link to="/offer" key={d} className="bg-neon-yellow/20 text-neon-yellow dark:bg-neon-yellow/20 dark:text-neon-yellow px-6 py-3 rounded-full font-semibold transform hover:scale-110 hover:shadow-lg hover:shadow-neon-yellow/20 transition-all duration-300">{d}</Link>
              ))}
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 dark:bg-black">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">{t('home.testimonials_title')}</h2>
           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             {t('home.testimonials').map((testimonial: { quote: string, name: string, achievement: string }) => (
                <div key={testimonial.name} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl relative">
                  <svg className="absolute top-4 left-4 w-8 h-8 text-neon-yellow/30" fill="currentColor" viewBox="0 0 32 32"><path d="M9.333 22.667h-4c-1.473 0-2.667-1.194-2.667-2.667v-8c0-1.473 1.194-2.667 2.667-2.667h6.667v8c0 2.947-2.387 5.333-5.333 5.333zM26.667 22.667h-4c-1.473 0-2.667-1.194-2.667-2.667v-8c0-1.473 1.194-2.667 2.667-2.667h6.667v8c0 2.947-2.387 5.333-5.333 5.333z"></path></svg>
                  <p className="text-gray-600 dark:text-gray-300 italic z-10 relative">"{testimonial.quote}"</p>
                  <div className="mt-4 text-right">
                    <p className="font-bold text-gray-800 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-neon-yellow">{testimonial.achievement}</p>
                  </div>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">{t('home.about_summary_title')}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{t('home.about_summary_content')}</p>
              <Link to="/about" className="inline-block px-6 py-3 border-2 border-neon-yellow text-neon-yellow font-bold rounded-lg shadow-lg shadow-neon-yellow/10 transform hover:scale-105 hover:bg-neon-yellow hover:text-black transition-all duration-300">
                {t('home.about_summary_cta')}
              </Link>
            </div>
            <div>
              <img src="/images/poznaj-mnie.jpg" alt="Patryk Kulpa" className="rounded-lg w-full max-w-sm mx-auto shadow-2xl transform md:hover:scale-105 transition-transform duration-300"/>
            </div>
          </div>
        </div>
      </section>

       {/* Final CTA Section */}
      <section className="py-20 bg-gray-800 dark:bg-gray-900 text-white text-center bg-dark-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-hooligan uppercase tracking-wider mb-4 text-shadow-simple">{t('home.final_cta_title')}</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">{t('home.final_cta_desc')}</p>
          <Link
            to="/forms"
            className="inline-block px-10 py-4 bg-neon-yellow text-black font-bold rounded-lg shadow-lg shadow-neon-yellow/30 transform hover:scale-105 hover:shadow-2xl hover:shadow-neon-yellow/50 transition-all duration-300"
          >
            {t('home.cta_register')}
          </Link>
        </div>
      </section>

    </>
  );
};

export default Home;