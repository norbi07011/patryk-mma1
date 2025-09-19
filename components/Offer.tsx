
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const OfferCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
);

const Offer: React.FC = () => {
    const { t } = useLanguage();

    const disciplines = ['Boks', 'Kickboxing', 'Wrestling', 'MMA', 'Grappling'];

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">{t('offer.title')}</h2>

            <div className="grid md:grid-cols-2 gap-8">
                <OfferCard title={t('offer.personal')} description={t('offer.personal_desc')} />
                <OfferCard title={t('offer.group')} description={t('offer.group_desc')} />
                <OfferCard title={t('offer.fight_prep')} description={t('offer.fight_prep_desc')} />
                <OfferCard title={t('offer.conditioning')} description={t('offer.conditioning_desc')} />
            </div>

            <div className="mt-16 text-center">
                <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">{t('offer.disciplines_title')}</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {disciplines.map(d => (
                        <span key={d} className="bg-neon-yellow/20 text-neon-yellow dark:bg-neon-yellow/20 dark:text-neon-yellow px-4 py-2 rounded-full font-semibold">{d}</span>
                    ))}
                </div>
            </div>

            <div className="mt-16 text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{t('offer.pricing_title')}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{t('offer.pricing_desc')}</p>
                 <Link
                    to="/forms"
                    className="inline-block px-8 py-3 bg-neon-yellow text-black font-bold rounded-lg shadow-lg shadow-neon-yellow/30 transform hover:scale-105 hover:shadow-xl hover:shadow-neon-yellow/50 transition-all duration-300"
                >
                    {t('offer.cta_register')}
                </Link>
            </div>
        </div>
    );
};

export default Offer;