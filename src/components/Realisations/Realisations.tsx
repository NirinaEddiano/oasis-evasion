'use client'; // Indique que c'est un composant client

import React from 'react';
import Image from 'next/image';
import styles from './Realisations.module.css';
import { FaEye, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Ajout de FaArrowLeft et FaArrowRight

// Import des modules Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import des styles Swiper
import 'swiper/css';
import 'swiper/css/navigation';

const realisationsData = [
  {
    imageSrc: '/realisations/piscine-moderne-01.jpg',
    title: 'Piscine Miroir & Terrasse Bois',
    subtitle: 'Design contemporain à Marrakech',
  },
  {
    imageSrc: '/realisations/piscine-debordement-02.jpg',
    title: 'Couloir de Nage Ciel Ouvert',
    subtitle: 'Intégration paysagère à Essaouira',
  },
  {

    imageSrc: '/realisations/piscine-zen-03.jpg',
    title: 'Bassin Naturel & Aménagement Zen',
    subtitle: 'Retraite aquatique à Agadir',
  },
  {
    imageSrc: '/realisations/piscine-familiale-04.jpg',
    title: 'Espace Familial avec Cascade',
    subtitle: 'Conception personnalisée à Rabat',
  },
  {
    imageSrc: '/realisations/piscine-urbaine-05.jpg',
    title: 'Piscine Urbaine & Pool House',
    subtitle: 'Optimisation d&apos;espace à Casablanca', // Corrigé ici
  },
  {
    imageSrc: '/realisations/piscine-interieur-06.jpg',
    title: 'Bassin Intérieur Élégant',
    subtitle: 'Luxe et bien-être à Fès',
  },
];

const Realisations = () => {
  return (
    <section id="realisations" className={styles.realisationsSection}>
      <div className={styles.realisationsTitleContainer}>
        <h2 className={styles.sectionTitle}>
          Nos <span className={styles.highlight}>Réalisations</span> d&apos;exception. {/* Corrigé ici */}
        </h2>
        <p className={styles.sectionDescription}>
          Découvrez une galerie de nos projets les plus emblématiques, où chaque piscine raconte une histoire de design et d&apos;innovation. {/* Corrigé ici */}
        </p>
      </div>

      <div className={styles.carouselContainer}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={60}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className={styles.realisationsSwiper}
        >
          {realisationsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.realisationCard}>
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                  className={styles.cardImage}
                />
                <div className={styles.cardTextOverlay}>
                  <div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardSubtitle}>{item.subtitle}</p>
                  </div>
                  <div className={styles.eyeIcon}>
                    <FaEye />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Flèches de navigation personnalisées */}
        <div className={`${styles.swiperButtonPrev} swiper-button-prev-custom`}>
          <FaArrowLeft />
        </div>
        <div className={`${styles.swiperButtonNext} swiper-button-next-custom`}>
          <FaArrowRight />
        </div>
      </div>

      <a href="/realisations" className={styles.allRealisationsButton}>
        <FaArrowRight size={16} />
        <span>Voir toutes les réalisations</span>
      </a>
    </section>
  );
};

export default Realisations;
