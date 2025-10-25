'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Nav.module.scss'

const menuItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
]

const socialLinks = [
  { href: 'https://github.com/raghmana', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/abdulraghmana/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'mailto:raghman.gem@gmail.com', icon: 'fas fa-envelope', label: 'Email' }
]

const SocialIcons = () => {
  return (
    <>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          <i className={link.icon} />
        </a>
      ))}
    </>
  )
}

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.nav__container}>
        <Link href="/" className={styles.nav__logo}>
          <span className={styles.logo__text}>
            <span className={styles.logo__symbol}>&lt;</span>
            Abdulraghman
            <span className={styles.logo__symbol}>/&gt;</span>
          </span>
        </Link>

        

        <button
          className={`${styles.nav__toggle} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.toggle__bar} />
          <span className={styles.toggle__bar} />
          <span className={styles.toggle__bar} />
        </button>
        

        <div className={`${styles.nav__menu_container} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.nav__menu}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles.nav__item}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={styles.nav__link}
                >
                  {item.label}
                  <span className={styles.nav__link_highlight} />
                </a>
              </li>
            ))}
          </ul>
          
          <div className={styles.nav__social_mobile}>
            <SocialIcons />
          </div>
        </div>
        <div className={styles.nav__social_desktop}>
          <SocialIcons />
        </div>
      </div>
    </nav>
  )
}

export default Nav