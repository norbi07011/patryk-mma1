
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-200 dark:bg-gray-900 shadow-inner">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    &copy; {currentYear} Patryk Kulpa. {t('footer.rights')}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
