import styles from './About.module.scss';

export default function About() {
  const stats = [
    { number: '13+', text: 'Years Experience', icon: 'fas fa-code' },
    { number: '50+', text: 'Projects Completed', icon: 'fas fa-tasks' },
    { number: '100%', text: 'Client Satisfaction', icon: 'fas fa-star' },
    { number: '15+', text: 'AI Projects', icon: 'fas fa-brain' }
  ];

  const highlights = [
    { icon: 'fas fa-laptop-code', text: 'Frontend Development' },
    { icon: 'fas fa-robot', text: 'AI Integration' },
    { icon: 'fas fa-tachometer-alt', text: 'Performance Optimization' },
    { icon: 'fas fa-users', text: 'Team Leadership' }
  ];

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <p className="section-subtitle">Turning Ideas into Digital Reality</p>
        
        <div className={styles.about__content}>
          <div className={styles.about__text}>
            <div className={styles.text__main}>
              <p className={styles.text__intro}>
                I'm a passionate Senior Frontend Developer based in Chennai, India, with a strong
                focus on creating exceptional digital experiences. With over 13 years in the industry,
                I've had the privilege of working with cutting-edge technologies and amazing teams.
              </p>
              
              <div className={styles.highlights}>
                {highlights.map((item, index) => (
                  <div key={index} className={styles.highlight__item}>
                    <i className={`${item.icon} ${styles.highlight__icon}`}></i>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <p className={styles.text__description}>
                My expertise spans across modern web technologies, AI integration, and performance
                optimization. I'm particularly excited about the intersection of AI and web development,
                where I've successfully implemented various AI-driven solutions.
              </p>
            </div>
          </div>
          
          <div className={styles.about__stats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.about__stat}>
                <div className={styles.stat__icon}>
                  <i className={stat.icon}></i>
                </div>
                <h3>{stat.number}</h3>
                <p>{stat.text}</p>
                <div className={styles.stat__background}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}