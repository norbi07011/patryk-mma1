import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ContactInfoCard: React.FC<{ icon: React.ReactNode, title: string, content: string, href?: string }> = ({ icon, title, content, href }) => (
    <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-neon-yellow/20 text-neon-yellow rounded-full flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h4>
            {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-neon-yellow transition-colors">{content}</a>
            ) : (
                <p className="text-gray-600 dark:text-gray-300">{content}</p>
            )}
        </div>
    </div>
);

const Contact: React.FC = () => {
    const { t } = useLanguage();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const nameInput = form.elements.namedItem('fullName') as HTMLInputElement;
        const phoneInput = form.elements.namedItem('phone') as HTMLInputElement;

        if (!nameInput?.value || !phoneInput?.value) {
            return;
        }

        const message = `${t('contact.quick_contact_title')}\n\n` +
                      `${t('forms.form_labels.fullName')}: ${nameInput.value}\n` +
                      `${t('forms.form_labels.phone')}: ${phoneInput.value}`;

        const whatsappNumber = "31624864914";
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
        form.reset();
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">{t('contact.title')}</h2>
            <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12">{t('contact.subtitle')}</p>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
                    <ContactInfoCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                        title={t('contact.phone')}
                        content="+31 6 24864914"
                        href="tel:+31624864914"
                    />
                     <ContactInfoCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                        title={t('contact.email')}
                        content="patryk.kulpa@email.com"
                        href="mailto:patryk.kulpa@email.com"
                    />
                     <ContactInfoCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                        title={t('contact.location')}
                        content={t('contact.location_area')}
                    />
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">{t('contact.social')}</h4>
                      <div className="flex space-x-4">
                        <a href="https://www.facebook.com/share/1CrTXMZoty/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-neon-yellow transition-colors">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </a>
                        <a href="https://www.instagram.com/patrykmma?igsh=MjYycTBma29wdnMx" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-neon-yellow transition-colors">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.06-1.004.048-1.625.211-2.126.41-1.054.423-1.828 1.197-2.252 2.252-.199.501-.362 1.122-.41 2.126-.049 1.023-.06 1.351-.06 3.807s.011 2.784.06 3.808c.048 1.004.211 1.625.41 2.126.423 1.054 1.197 1.828 2.252 2.252.501.199 1.122.362 2.126.41 1.023.049 1.351.06 3.807.06h.468c2.456 0 2.784-.011 3.808-.06 1.004-.048 1.625-.211 2.126-.41 1.054-.423 1.828-1.197 2.252-2.252.199-.501-.362-1.122-.41-2.126.049-1.023.06-1.351-.06-3.807s-.011-2.784-.06-3.808c-.048-1.004-.211-1.625-.41-2.126-.423-1.054-1.197-1.828-2.252-2.252-.501-.199-1.122-.362-2.126-.41-1.024-.049-1.351-.06-3.808-.06zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                        </a>
                        <a href="https://wa.me/31624864914" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-500 hover:text-neon-yellow transition-colors">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.61 15.35 3.48 16.82L2 22l5.33-1.48c1.43.83 3.06 1.28 4.71 1.28h.01c5.46 0 9.9-4.45 9.91-9.91c0-5.46-4.45-9.9-9.91-9.9zM17.22 15.3c-.22.22-.67.43-1.22.21c-.55-.22-1.22-.89-1.78-1.56c-.55-.67-.89-1.22-1.11-1.56c-.22-.33-.44-.44-.67-.44c-.22 0-.44.11-.67.22s-.67.89-.89 1.11c-.22.22-.44.22-.67.11c-.22-.11-.89-.33-1.56-.67c-.67-.33-1.22-.89-1.67-1.44c-.44-.55-.67-1.11-.78-1.44c-.11-.33 0-.55.11-.67c.11-.11.22-.22.33-.33c.11-.11.11-.22.22-.44c.11-.22.05-.44-.05-.67c-.11-.22-.67-1.56-.89-2.11c-.22-.55-.44-.44-.67-.44h-.22c-.22 0-.44.11-.67.33c-.22.22-.89.89-.89 2.11c0 1.22.89 2.45 1.11 2.67c.22.22 1.56 2.45 3.89 3.45c2.34 1 2.78.89 3.34.78c.55-.11.89-.44 1.11-.67c.22-.22.22-.44.11-.67c-.11-.22-.22-.33-.44-.55c-.22-.22-.44-.33-.55-.55c-.11-.22-.22-.44-.11-.67c.11-.22.22-.33.44-.55c.22-.22.33-.22.55-.11c.22.11.89.44 1.11.55c.22.11.33.11.44.22c.11.11.11.44-.11.89c-.22.44-.44.67-.67.89c-.22.22-.33.33-.55.55z" /></svg>
                        </a>
                      </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-bold mb-1 text-gray-800 dark:text-white">{t('contact.quick_contact_title')}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">{t('contact.quick_contact_desc')}</p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                             <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="quick_name">{t('forms.form_labels.fullName')}</label>
                                <input type="text" id="quick_name" name="fullName" required className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-yellow transition-all"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="quick_phone">{t('forms.form_labels.phone')}</label>
                                <input type="tel" id="quick_phone" name="phone" required className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-yellow transition-all"/>
                            </div>
                            <button type="submit" className="w-full px-8 py-3 bg-neon-yellow text-black font-bold rounded-lg shadow-lg shadow-neon-yellow/30 transform hover:scale-105 hover:shadow-xl hover:shadow-neon-yellow/50 transition-all duration-300">{t('contact.submit')}</button>
                        </form>
                    </div>
                     <div className="bg-gray-300 dark:bg-gray-700 h-64 rounded-lg shadow-xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82598.8166412035!2d4.281141416955566!3d51.89539281514798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c44c0f3a1f942d%3A0x83e254823871983!2sRotterdam!5e0!3m2!1sen!2snl!4v1716300000000!5m2!1sen!2snl"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={t('contact.location')}
                            aria-label={t('contact.location')}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;