import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className={styles.header__name}>Abdulraghman A</h1>
        <h2 className={styles.header__title}>Senior Frontend Developer</h2>
        <div className={styles.header__contact}>
          <a href="mailto:raghman.gem@gmail.com">raghman.gem@gmail.com</a>
          <a href="tel:+919840538976">+91 9840538976</a>
          <a href="https://linkedin.com/in/abdulraghmana" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span>Chennai, India</span>
        </div>
      </div>
    </header>
  );
}