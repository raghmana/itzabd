import styles from './Projects.module.scss';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Nutraley eCommerce',
      description: 'A high-performance grocery eCommerce platform with AI-powered recommendations.',
      image: '/projects/nutraley.webp',
      tags: ['Next.js', 'MongoDB', 'AI Integration', 'React', 'Shopify'],
      liveUrl: 'https://nutraley.com',
      githubUrl: '#',
      category: 'E-commerce'
    },
    {
      title: 'Sindhus Kitchen',
      description: 'Modern restaurant ordering system with real-time order tracking.',
      image: '/projects/sindhus.webp',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      liveUrl: 'https://sindhuskitchen.com',
      githubUrl: '#',
      category: 'Food Tech'
    },
    {
      title: 'HippoVideo SaaS',
      description: 'Video marketing platform with advanced analytics and AI features.',
      image: '/projects/hippo.webp',
      tags: ['React', 'BackboneJS', 'PUG', 'Python', 'AI', 'Analytics'],
      liveUrl: 'https://www.hippovideo.io/',
      githubUrl: '#',
      category: 'SaaS'
    }
  ];

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <p className="section-subtitle">Some of My Recent Work</p>
        
        <div className={styles.projects__grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projects__card}>
              <div className={styles.projects__image}>
                <div className={styles.image__overlay}>
                  <div className={styles.overlay__content}>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.overlay__link}>
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.overlay__link}>
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <span className={styles.project__category}>{project.category}</span>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={project.image}
                />
              </div>
              <div className={styles.projects__content}>
                <div className={styles.content__header}>
                  <h3>{project.title}</h3>
                  <div className={styles.projects__links}>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="View Live Site">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="View Code">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <p>{project.description}</p>
                <div className={styles.projects__tags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}