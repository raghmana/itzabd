import styles from './Hero.module.scss';
import Link from 'next/link';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaBrain,
  FaPython, 
  FaSass,
  FaWordpress,
  FaShopify,
  FaFigma,
  FaGitAlt,
  FaAws
} from 'react-icons/fa';
import { 
  SiRedux,
  SiNextdotjs,
  SiMongodb,
  SiOpenai,
  SiHuggingface,
  SiLangchain
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { GiArtificialIntelligence, GiProcessor } from 'react-icons/gi';
import { VscGraphLine } from 'react-icons/vsc';

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
          <div className={styles.hero__tech}>
            <div className={styles.hero__tech_group}>
              <div className={styles.hero__tech_icons}>
                <FaHtml5 title="HTML5" />
                <FaCss3Alt title="CSS3" />
                <FaJs title="JavaScript" />
                <FaReact title="React" />
                <SiNextdotjs title="Next.js" />
                <FaSass title="Sass" />
                <SiRedux title="Redux" />
                <FaFigma title="Figma" />
                <FaBrain title="AI" />
                <SiOpenai title="OpenAI" />
                <GiArtificialIntelligence title="CrewAI" />
                <SiHuggingface title="Hugging Face" />
                <SiLangchain title="LangChain" />
                <GiProcessor title="AgentticAI" />
                <VscGraphLine title="RAG" />
                <FaPython title="Python" />
                <SiMongodb title="MongoDB" />
                <TbApi title="REST API" />
                <FaWordpress title="WordPress" />
                <FaShopify title="Shopify" />
                <FaGitAlt title="Git" />
                <FaAws title="AWS" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}