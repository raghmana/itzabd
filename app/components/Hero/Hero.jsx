import styles from './Hero.module.scss';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__content}>
          <h1>
            Hi, I'm <span>Abdulraghman</span> 👋
            <br />
            I Build Digital Experiences
          </h1>
          <p>
            Senior Frontend Developer with 13+ years of experience crafting 
            elegant solutions and delivering exceptional user experiences
          </p>
          <div className={styles.hero__cta}>
            <Link href="#contact" className="btn btn-primary">
              Get In Touch
            </Link>
            <Link href="#projects" className="btn btn-secondary">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}