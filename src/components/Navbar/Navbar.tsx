'use client'; // Indique que c'est un composant client pour pouvoir utiliser les hooks

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import des icônes

const Navbar = () => {
  // État pour suivre si la page a été défilée
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Effet pour ajouter et retirer l'écouteur d'événement de défilement
  useEffect(() => {
    const handleScroll = () => {
      // Si on a défilé de plus de 10 pixels, on met `scrolled` à true
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Ajoute l'écouteur quand le composant est monté
    window.addEventListener('scroll', handleScroll);

    // Retire l'écouteur quand le composant est démonté pour éviter les fuites de mémoire
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `${styles.header} ${scrolled ? styles.scrolled : styles.transparent}`;

  return (
    // La classe du header change dynamiquement en fonction de l'état `scrolled`
    <header className={headerClasses}>
      <nav className={styles.nav}>
        {/* Logo à gauche */}
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src="/oasis-evasion-logo.png" alt="Oasis Évasion Logo" width={56} height={65}  className={`${styles.logo}`} />
          </Link>
        </div>

        {/* Menu au centre */}
        <ul className={styles.menu}>
          <li><Link href="/" className={pathname === '/' ? styles.activeLink : ''}>Accueil</Link></li>
          <li><Link href="/a-propos" className={pathname === '/a-propos' ? styles.activeLink : ''} >À propos</Link></li>
          <li><Link href="/services" className={pathname === '/services' ? styles.activeLink : ''}>Services</Link></li>
          <li><Link href="/equipement" className={pathname === '/equipement' ? styles.activeLink : ''}>Équipement</Link></li>
          <li><Link href="/realisations" className={pathname === '/realisations' ? styles.activeLink : ''}>Réalisations</Link></li>
          <li><Link href="/contact" className={pathname === '/contact' ? styles.activeLink : ''}>Contact</Link></li>
        </ul>

        {/* Boutons à droite */}
        <div className={styles.actions}>
          <button className={`${styles.button} ${styles.quoteButton}`}>
            <FaEnvelope size={16} /> {/* Icône pour le devis */}
            <span>Demander un devis</span>
          </button>
          <a href="tel:+212123456789" className={`${styles.button} ${styles.callButton}`}>
            <FaPhoneAlt size={16} /> {/* Icône pour l'appel */}
            <span>Appeler Maintenant</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;