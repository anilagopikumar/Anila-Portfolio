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
          link="https://github.com/anilagopikumar/angular8crud.git"
          h3="Angular Project"
          p="CRUD Operations"
        />
        <ProjectCard
          src={SendEmail}
          link="https://github.com/anilagopikumar/SendEmail.git"
          h3="Node.js Project"
          p="Study case"
        />
        <ProjectCard
          src={Portfolio}
          link="https://github.com/anilagopikumar/Anila-Portfolio.git"
          h3="Anila's Portfolio"
          p="React.js & Vite.js Project"
        />
          <p className={styles.description}>
                  <center>With a passion for developing modern Web, Android and iOS applications for commercial
                  businesses. Venturing into every opportunity in both professional and personal aspects of life.. </center>
                </p>
      </div>
    </section>
  );
}

export default Projects;