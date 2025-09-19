import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Rotating3dImageCarousel from './Rotating3dImageCarousel';
import Rotating3dVideoCarousel from './Rotating3dVideoCarousel';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  const images = [
      '/images/galeria.jpg',
      '/images/galeria1.jpg',
      '/images/galeria2.jpg',
      '/images/galeria3.jpg',
      '/images/galeria4.jpg',
      '/images/galeria5.jpg',
      '/images/galeria6.jpg',
  ];
  
  const certificates = [
      '/images/certyfikat.jpg',
      '/images/certyfikat1.jpg',
      '/images/certyfikat2.jpg',
      '/images/certyfikat3.jpg',
  ];
  
  const videoIds = [
      '2Xvg_k_Ua-A',
      'rokGy0huYEA',
      '3JZ_D3ELwOQ',
      'Y-64s_j5R7w',
      'M7lc1UVf-VE',
  ];
  
  const videoPaths = [
      '/videos/Wideo.mp4',
      '/videos/Wideo1.mp4',
      '/videos/Wideo2.mp4',
      '/videos/Wideo3.mp4',
      '/videos/Wideo4.mp4',
      '/videos/Wideo5.mp4',
      '/videos/Wideo6.mp4',
      '/videos/Wideo7.mp4',
      '/videos/Wideo8.mp4',
  ];

  const backgroundImage = 'https://picsum.photos/seed/dojo/1920/1080';

  return (
    <div className="relative isolate overflow-hidden py-12">
        <img src={backgroundImage} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover blur-md brightness-50" />
        
        <div className="relative">
            <div className="container mx-auto px-4 mb-20">
                <div className="max-w-3xl mx-auto bg-white/10 dark:bg-black/20 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
                  <img src="/images/Zdjęcie profilowe .jpg" alt="Patryk Kulpa" className="rounded-full w-40 h-40 mx-auto mb-6 border-4 border-neon-yellow shadow-lg shadow-neon-yellow/20"/>
                  <h3 className="text-3xl font-bold text-center text-white">{t('about.bio_title')}</h3>
                  <p className="text-center text-neon-yellow mb-4">{t('about.bio_subtitle')}</p>
                  <p className="text-gray-200 text-justify">
                    {t('about.bio_content')}
                  </p>
                  <p className="mt-6 text-center text-lg italic font-semibold text-gray-100">"{t('about.passion_slogan')}"</p>
                </div>
            </div>

            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-2 text-white" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>{t('about.gallery_title')}</h2>
              <p className="text-center text-lg text-gray-300 mb-10">{t('about.gallery_subtitle')}</p>
              <Rotating3dImageCarousel images={images} />
              
              <h2 className="text-4xl font-bold text-center mt-20 mb-2 text-white" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>Certyfikaty</h2>
              <p className="text-center text-lg text-gray-300 mb-10">Moje kwalifikacje i osiągnięcia w sporcie.</p>
              <Rotating3dImageCarousel images={certificates} />
              
              <h2 className="text-4xl font-bold text-center mt-20 mb-2 text-white" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>{t('about.video_gallery_title')}</h2>
              <p className="text-center text-lg text-gray-300 mb-10">{t('about.video_gallery_subtitle')}</p>
              <Rotating3dVideoCarousel videoPaths={videoPaths} />
            </div>
        </div>
    </div>
  );
};

export default About;