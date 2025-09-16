import React from 'react';
import Image from 'next/image';
import styles from './Services.module.css';
import { FaDraftingCompass, FaSyncAlt, FaPalette,FaInfoCircle, FaUserTie, FaCheck, FaEnvelope } from 'react-icons/fa'; // Ajout de FaEnvelope

// Données des services pour Oasis Évasion
const oasisServicesData = [
  {
    icon: <FaDraftingCompass size={24} />, // Icône pour l'overlay
    title: 'Conception & Construction',
    imageSrc: '/images/service-conception.jpg', // Image suggérée
    features: [
      'Étude personnalisée de vos besoins et du terrain.',
      'Design architectural unique et intégration paysagère.',
      'Sélection de matériaux premium pour durabilité et esthétique.',
      'Maîtrise d\'œuvre complète du début à la fin du projet.',
    ],
  },
  {
    icon: <FaSyncAlt size={24} />,
    title: 'Rénovation & Transformation',
    imageSrc: '/images/service-renovation.jpg', // Image suggérée
    features: [
      'Diagnostic approfondi de votre bassin existant.',
      'Modernisation esthétique et fonctionnelle pour un nouveau look.',
      'Mise aux normes de sécurité et d\'hygiène en vigueur.',
      'Optimisation des systèmes pour une meilleure performance énergétique.',
    ],
  },
  {
    icon: <FaPalette size={24} />,
    title: 'Aménagements Extérieurs',
    imageSrc: '/images/service-amenagement.jpg', // Image suggérée
    features: [
      'Conception paysagère intégrée autour de votre piscine.',
      'Création de terrasses, plages de piscine et espaces détente.',
      'Installation d\'éclairages ambiants pour une atmosphère magique.',
      'Sélection et intégration de mobilier et d\'éléments décoratifs.',
    ],
  },
  {
    icon: <FaUserTie size={24} />,
    title: 'Accompagnement Personnalisé',
    imageSrc: '/images/service-accompagnement.jpg', // Image suggérée
    features: [
      'Conseil expert à chaque étape de votre projet piscine.',
      'Suivi de projet dédié par un interlocuteur unique.',
      'Support technique et maintenance pour la pérennité de votre installation.',
      'Garantie de satisfaction et engagement sur la qualité de nos réalisations.',
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      {/* Conteneur pour le titre et la description de la section */}
      <div className={styles.servicesTitleContainer}>
        <h2 className={styles.sectionTitle}>
          Nos services d&apos;exception.
        </h2>
        <p className={styles.sectionDescription}>
          Découvrez notre approche unique pour créer des espaces aquatiques qui transcendent l&apos;ordinaire.
        </p>
      </div>

      {/* Conteneur principal pour les cartes de service (grid 2x2) */}
      <div className={styles.servicesGridContainer}>
        {oasisServicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceImageWrapper}>
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.serviceImage}
              />
              <div className={styles.serviceOverlayIcon}>
                {service.icon} {/* L'icône du service dans le cercle blanc */}
              </div>
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceCardTitle}>
                {service.title} {/* Le titre sans icône ici */}
              </h3>
              <ul className={styles.serviceFeatures}>
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className={styles.featureItem}>
                    <span className={styles.checkIcon}><FaCheck size={16} /></span>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
              <div className={styles.aboutActions}>
                        <a href="/about" className={`${styles.button} ${styles.callButton}`}>
                          <FaInfoCircle size={16} />
                          <span>Plus de details</span>
                        </a>
                        <a href="/contact" className={styles.quoteButtonBottom}>
        <FaEnvelope size={16} />
        <span>Demander un devis</span>
      </a>
                      </div>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;