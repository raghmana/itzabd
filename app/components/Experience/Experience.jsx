import styles from './Experience.module.scss';

export default function Experience() {
  const experiences = [
    {
      title: 'Tech Lead (Part-Time)',
      company: 'Tamtree India Pvt Ltd',
      period: 'July 2023 – Present',
      responsibilities: [
        'Lead full-stack product development using MongoDB, Express.js, React.js, and Node.js',
        'Architected and deployed AI-driven automation systems for data workflows and customer support',
        'Managed a team of developers, promoting clean code practices, Agile sprints, and regular code reviews',
        'Integrated third-party APIs and implemented CI/CD pipelines for efficient deployments',
        'Collaborated with cross-functional teams to deliver business-driven technology solutions'
      ],
      projects: [
        'nutraley.com — Grocery eCommerce platform built for performance and scalability',
        'sindhuskitchen.com — Restaurant ordering website with optimized UX/UI'
      ]
    },
    {
      title: 'Member Technical Staff',
      company: 'HippoVideo',
      period: 'Nov 2016 – June 2023',
      responsibilities: [
        'Developed end-to-end SaaS web applications with HTML, CSS, and React.js',
        'Improved site performance by 40%, boosting conversion rates by 10%',
        'Collaborated with UI/UX teams to implement responsive, accessible, and engaging interfaces',
        'Enhanced mobile performance, resulting in a 30% increase in mobile engagement',
        'Mentored junior developers through code reviews and technical sessions'
      ]
    },
    {
      title: 'Senior Web Developer (AVP - Technology)',
      company: 'Gofar Corporate',
      period: 'May 2016 – Oct 2016',
      responsibilities: [
        'Spearheaded launch of company website and booking platform',
        'Delivered responsive frontend and backend features aligned with business goals',
        'Applied Agile methodologies ensuring timely and high-quality delivery'
      ]
    }
  ];

  return (
    <section className={`section ${styles.experience}`}>
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className={styles.experience__timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experience__item}>
              <div className={styles['experience__item-header']}>
                <h3>{exp.title}</h3>
                <div className={styles.company}>{exp.company}</div>
                <div className={styles.period}>{exp.period}</div>
              </div>
              <div className={styles['experience__item-content']}>
                <ul>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                  {exp.projects && exp.projects.map((project, i) => (
                    <li key={`project-${i}`}>{project}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}