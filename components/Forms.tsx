
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const commonInputClass = "w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-yellow transition-all";
const commonLabelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";
const commonCheckboxLabelClass = "ml-2 text-sm text-gray-700 dark:text-gray-300";

const RegistrationForm: React.FC<{onSubmit: (e: React.FormEvent) => void}> = ({ onSubmit }) => {
    const { t, language } = useLanguage();

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className={commonLabelClass} htmlFor="fullName">{t('forms.form_labels.fullName')}</label>
                    <input type="text" id="fullName" name="fullName" required className={commonInputClass} />
                </div>
                <div>
                    <label className={commonLabelClass} htmlFor="dob">{t('forms.form_labels.dob')}</label>
                    <input type="date" id="dob" name="dob" required className={commonInputClass} />
                </div>
                 <div>
                    <label className={commonLabelClass} htmlFor="phone">{t('forms.form_labels.phone')}</label>
                    <input type="tel" id="phone" name="phone" required className={commonInputClass} />
                </div>
                 <div>
                    <label className={commonLabelClass} htmlFor="email">{t('forms.form_labels.email')}</label>
                    <input type="email" id="email" name="email" required className={commonInputClass} />
                </div>
                <div>
                    <label className={commonLabelClass} htmlFor="contactLang">{t('forms.form_labels.contactLang')}</label>
                    <select id="contactLang" name="contactLang" defaultValue={language} className={commonInputClass}>
                        <option value="pl">Polski</option>
                        <option value="en">English</option>
                        <option value="nl">Nederlands</option>
                    </select>
                </div>
                <div>
                    <label className={commonLabelClass} htmlFor="trainingGoal">{t('forms.form_labels.trainingGoal')}</label>
                    <select id="trainingGoal" name="trainingGoal" required className={commonInputClass}>
                        {t('forms.goal_options').map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                </div>
                <div>
                    <label className={commonLabelClass} htmlFor="currentWeight">{t('forms.form_labels.currentWeight')}</label>
                    <input type="number" id="currentWeight" name="currentWeight" required className={commonInputClass} />
                </div>
                <div>
                    <label className={commonLabelClass} htmlFor="targetWeight">{t('forms.form_labels.targetWeight')}</label>
                    <input type="number" id="targetWeight" name="targetWeight" required className={commonInputClass} />
                </div>
                <div>
                    <label className={commonLabelClass} htmlFor="frequency">{t('forms.form_labels.frequency')}</label>
                    <select id="frequency" name="frequency" required className={commonInputClass}>
                         {t('forms.freq_options').map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                </div>
                 <div>
                    <label className={commonLabelClass} htmlFor="experience">{t('forms.form_labels.experience')}</label>
                    <select id="experience" name="experience" required className={commonInputClass}>
                         {t('forms.exp_options').map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                </div>
            </div>

            <div>
                <label className={commonLabelClass} htmlFor="illnesses">{t('forms.form_labels.illnesses')}</label>
                <input type="text" id="illnesses" name="illnesses" className={commonInputClass} />
            </div>
             <div>
                <label className={commonLabelClass} htmlFor="injuries">{t('forms.form_labels.injuries')}</label>
                <input type="text" id="injuries" name="injuries" className={commonInputClass} />
            </div>
            <div>
                <label className={commonLabelClass} htmlFor="habits">{t('forms.form_labels.habits')}</label>
                <input type="text" id="habits" name="habits" className={commonInputClass} />
            </div>

             <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className={commonLabelClass}>{t('forms.form_labels.medicalCert')}</label>
                    <div className="flex items-center space-x-4">
                        <label><input type="radio" name="medicalCert" value="yes" className="mr-1 accent-neon-yellow" /> {t('forms.form_labels.yes')}</label>
                        <label><input type="radio" name="medicalCert" value="no" className="mr-1 accent-neon-yellow" /> {t('forms.form_labels.no')}</label>
                    </div>
                </div>
                <div>
                    <label className={commonLabelClass}>{t('forms.form_labels.equipment')}</label>
                    <select id="equipment" name="equipment" required className={commonInputClass}>
                         {t('forms.equip_options').map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                </div>
                <div>
                    <label className={commonLabelClass} htmlFor="preferredTime">{t('forms.form_labels.preferredTime')}</label>
                    <select id="preferredTime" name="preferredTime" required className={commonInputClass}>
                         {t('forms.time_options').map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                </div>
                <div>
                    <label className={commonLabelClass} htmlFor="trainingType">{t('forms.form_labels.trainingType')}</label>
                    <select id="trainingType" name="trainingType" required className={commonInputClass}>
                         {t('forms.type_options').map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                </div>
             </div>

             <div>
                <label className={commonLabelClass} htmlFor="file_upload">{t('forms.form_labels.file_upload')}</label>
                <input type="file" id="file_upload" name="file_upload" className={`${commonInputClass} p-0 file:mr-4 file:py-2 file:px-4 file:rounded-l-lg file:border-0 file:bg-gray-300 dark:file:bg-gray-600 file:text-gray-800 dark:file:text-gray-200 hover:file:bg-gray-400 dark:hover:file:bg-gray-500`}/>
            </div>
            <div>
                <label className={commonLabelClass} htmlFor="message">{t('forms.form_labels.message')}</label>
                <textarea id="message" name="message" rows={4} className={commonInputClass}></textarea>
            </div>
            
            <div className="space-y-4">
                <div className="flex items-center">
                    <input id="gdpr" name="gdpr" type="checkbox" required className="h-4 w-4 accent-neon-yellow rounded" />
                    <label htmlFor="gdpr" className={commonCheckboxLabelClass}>{t('forms.form_labels.gdpr')}</label>
                </div>
                 <div className="flex items-center">
                    <input id="pricing_agreement" name="pricing_agreement" type="checkbox" required className="h-4 w-4 accent-neon-yellow rounded" />
                    <label htmlFor="pricing_agreement" className={commonCheckboxLabelClass}>{t('forms.form_labels.pricing_agreement')}</label>
                </div>
            </div>

            <button type="submit" className="w-full px-8 py-3 bg-neon-yellow text-black font-bold rounded-lg shadow-lg shadow-neon-yellow/30 transform hover:scale-105 hover:shadow-xl hover:shadow-neon-yellow/50 transition-all duration-300">
                {t('forms.form_labels.submit')}
            </button>
        </form>
    );
};

const ContactForm: React.FC<{onSubmit: (e: React.FormEvent) => void}> = ({ onSubmit }) => {
    const { t } = useLanguage();
    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <div>
                <label className={commonLabelClass} htmlFor="contactFullName">{t('forms.form_labels.fullName')}</label>
                <input type="text" id="contactFullName" name="fullName" required className={commonInputClass} />
            </div>
            <div>
                <label className={commonLabelClass} htmlFor="contactEmail">{t('forms.form_labels.email')}</label>
                <input type="email" id="contactEmail" name="email" required className={commonInputClass} />
            </div>
            <div>
                <label className={commonLabelClass} htmlFor="contactPhone">{t('forms.form_labels.phone')}</label>
                <input type="tel" id="contactPhone" name="phone" required className={commonInputClass} />
            </div>
             <div>
                <label className={commonLabelClass} htmlFor="contactMessage">{t('forms.form_labels.message')}</label>
                <textarea id="contactMessage" name="message" rows={4} required className={commonInputClass}></textarea>
            </div>
            <button type="submit" className="w-full px-8 py-3 bg-neon-yellow text-black font-bold rounded-lg shadow-lg shadow-neon-yellow/30 transform hover:scale-105 hover:shadow-xl hover:shadow-neon-yellow/50 transition-all duration-300">
                {t('forms.form_labels.submit')}
            </button>
        </form>
    )
}

const CompetitionForm: React.FC<{onSubmit: (e: React.FormEvent) => void}> = ({ onSubmit }) => {
    const { t } = useLanguage();
    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className={commonLabelClass} htmlFor="compFullName">{t('forms.form_labels.fullName')}</label>
                    <input type="text" id="compFullName" name="fullName" required className={commonInputClass} />
                </div>
                <div>
                    <label className={commonLabelClass} htmlFor="compEmail">{t('forms.form_labels.email')}</label>
                    <input type="email" id="compEmail" name="email" required className={commonInputClass} />
                </div>
                <div>
                    <label className={commonLabelClass} htmlFor="compWeight">{t('forms.form_labels.currentWeight')}</label>
                    <input type="number" id="compWeight" name="currentWeight" required className={commonInputClass} />
                </div>
                <div>
                    <label className={commonLabelClass} htmlFor="compWeightClass">{t('forms.form_labels.weight_class')}</label>
                    <input type="text" id="compWeightClass" name="weight_class" required className={commonInputClass} />
                </div>
            </div>
            <div>
                <label className={commonLabelClass} htmlFor="compAchievements">{t('forms.form_labels.achievements')}</label>
                <textarea id="compAchievements" name="achievements" rows={4} required className={commonInputClass}></textarea>
            </div>
            <div>
                <label className={commonLabelClass} htmlFor="compFileUpload">{t('forms.form_labels.file_upload')}</label>
                <input type="file" id="compFileUpload" name="file_upload" className={`${commonInputClass} p-0 file:mr-4 file:py-2 file:px-4 file:rounded-l-lg file:border-0 file:bg-gray-300 dark:file:bg-gray-600 file:text-gray-800 dark:file:text-gray-200 hover:file:bg-gray-400 dark:hover:file:bg-gray-500`}/>
            </div>
            <button type="submit" className="w-full px-8 py-3 bg-neon-yellow text-black font-bold rounded-lg shadow-lg shadow-neon-yellow/30 transform hover:scale-105 hover:shadow-xl hover:shadow-neon-yellow/50 transition-all duration-300">
                {t('forms.form_labels.submit')}
            </button>
        </form>
    )
}

const Forms: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('registration');

  const handleFormSubmitToWhatsapp = (e: React.FormEvent, formTitleKey: string) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    let message = `${t(formTitleKey)}\n\n`;

    formData.forEach((value, key) => {
        if (value instanceof File && value.size > 0) {
            message += `${t(`forms.form_labels.${key}`)}: ${value.name}\n`;
        } else if (typeof value === 'string' && value.trim() !== '') {
            const label = t(`forms.form_labels.${key}`);
            const displayKey = label.startsWith('forms.form_labels.') ? key : label;
            message += `${displayKey}: ${value}\n`;
        }
    });

    const whatsappNumber = "31624864914";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const tabs = [
      { id: 'registration', label: t('forms.registration_form') },
      { id: 'contact', label: t('forms.contact_form') },
      { id: 'competition', label: t('forms.competition_form') },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">{t('forms.title')}</h2>
        
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                            activeTab === tab.id
                                ? 'border-neon-yellow text-neon-yellow'
                                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl">
            {activeTab === 'registration' && <RegistrationForm onSubmit={(e) => handleFormSubmitToWhatsapp(e, 'forms.registration_form')} />}
            {activeTab === 'contact' && <ContactForm onSubmit={(e) => handleFormSubmitToWhatsapp(e, 'forms.contact_form')} />}
            {activeTab === 'competition' && <CompetitionForm onSubmit={(e) => handleFormSubmitToWhatsapp(e, 'forms.competition_form')} />}
        </div>
      </div>
    </div>
  );
};

export default Forms;
