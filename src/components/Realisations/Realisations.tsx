'use client'; // Indique que c'est un composant client

import React from 'react';
import Image from 'next/image';
import styles from './Realisations.module.css';
import { FaEye, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Ajout de FaArrowLeft et FaArrowRight

// Import des modules Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// REMPLACEZ CETTE LIGNE
// import { Navigation, Autoplay, Loop } from 'swiper/modules';
// PAR CELLE-CI :
import { Navigation, Autoplay } from 'swiper/modules'; // Supprimez 'Loop' car ce n'est pas un module exporté explicitement

// Import des styles Swiper
import 'swiper/css';
import 'swiper/css/navigation';
// Optionnel si vous voulez la pagination: import 'swiper/css/pagination';

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
    subtitle: 'Optimisation d\'espace à Casablanca',
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
          Nos <span className={styles.highlight}>Réalisations</span> d'exception.
        </h2>
        <p className={styles.sectionDescription}>
          Découvrez une galerie de nos projets les plus emblématiques, où chaque piscine raconte une histoire de design et d'innovation.
        </p>
      </div>

      <div className={styles.carouselContainer}> {/* Nouveau conteneur pour le carrousel et les flèches */}
        <Swiper
          // REMPLACEZ CETTE LIGNE
          // modules={[Navigation, Autoplay, Loop]}
          // PAR CELLE-CI :
          modules={[Navigation, Autoplay]} // Supprimez 'Loop' du tableau des modules
          spaceBetween={60} // Espacement entre les slides
          slidesPerView={1} // Par défaut pour mobile
          loop={true} // La propriété 'loop' gère la boucle directement sur le composant Swiper
          centeredSlides={true} // Centre la slide active
          autoplay={{
            delay: 4000, // Défilement automatique toutes les 4 secondes
            disableOnInteraction: false, // Ne pas arrêter l'autoplay lors de l'interaction
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
              slidesPerView: 3, // 3 slides visibles pour desktop
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