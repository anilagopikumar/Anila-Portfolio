import styles from './ProjectsStyles.module.css';
import CRUD from '../../assets/CRUD.jpg';
import SendEmail from '../../assets/SendEmail.png'; 
import ProjectCard from '../../common/ProjectCard';
import Portfolio from '../../assets/Portfolio.jpg'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={CRUD}
          link="https://github.com/anilagopikumar/angular8crud"
          h3="Angular Project"
          p="CRUD Operations"
        />
        <ProjectCard
          src={SendEmail}
          link="https://github.com/anilagopikumar/SendEmail"
          h3="Node.js Project"
          p="Study case"
        />
        <ProjectCard
          src={Portfolio}
          link="https://github.com/anilagopikumar/Anila-Portfolio"
          h3="Anila's Portfolio"
          p="React.js & Vite.js Project"
        />
      </div>
    </section>
  );
}

export default Projects;