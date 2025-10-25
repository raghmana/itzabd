import styles from './Skills.module.scss';

export default function Skills() {
  const skillCategories = {
    'Frontend': [
      'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 
      'GatsbyJS', 'jQuery', 'PUG', 'SASS', 'LESS'
    ],
    'Backend & Tools': [
      'Node.js', 'Express.js', 'MongoDB', 'Python', 'RESTful APIs',
      'Webpack', 'Gulp'
    ],
    'AI Skills': [
      'Python', 'OpenAI', 'Prompting', 'crewAI', 'Huggingface',
      'Langchain', 'Agentic AI', 'RAG'
    ],
    'CMS & Design': [
      'WordPress', 'HubSpot', 'Contentful', 'Webflow', 'Figma', 'Adobe XD'
    ],
    'DevOps & Tools': [
      'GitHub', 'Bitbucket', 'Jira', 'AWS', 'Vercel',
      'Agile/Scrum', 'PWA Development'
    ]
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Frontend':
        return 'fas fa-laptop-code';
      case 'Backend & Tools':
        return 'fas fa-server';
      case 'AI Skills':
        return 'fas fa-brain';
      case 'CMS & Design':
        return 'fas fa-paint-brush';
      case 'DevOps & Tools':
        return 'fas fa-tools';
      default:
        return 'fas fa-code';
    }
  };

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <p className={styles.skills__intro}>A comprehensive overview of my technical expertise and tools I work with</p>
        <div className={styles.skills__grid}>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className={styles.skills__category}>
              <div className={styles.skills__header}>
                <i className={`${getCategoryIcon(category)} ${styles.category__icon}`}></i>
                <h3>{category}</h3>
              </div>
              <ul>
                {skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}