import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillsList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
    <br/>
    <h1 className="sectionTitle">Work History</h1>
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Senior Analyst - Cognizant, India" />
        <SkillList src={checkMarkIcon} skill="SDE - 1 - Prolifics, India" />
        <SkillList src={checkMarkIcon} skill="SDE - Edvenswa, India" /> 
    </div>  
    <hr />
    <br />      
    <br/>  
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Vue" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="Tailwind.css" />
        <SkillList src={checkMarkIcon} skill="SASS/SCSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="R Programming" />
        <SkillList src={checkMarkIcon} skill="Data Structures" />
        <SkillList src={checkMarkIcon} skill="Algorithms" />
        <SkillList src={checkMarkIcon} skill="Data Science" />
        <SkillList src={checkMarkIcon} skill="Artificial Intelligence" />
        <SkillList src={checkMarkIcon} skill="Machine Learning" />
        <SkillList src={checkMarkIcon} skill="Deep Learning" />
        <SkillList src={checkMarkIcon} skill="NLP/Reinforcemnt Learning" />
    </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
    </div>
    <hr/>      
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Postman - API Testing Platform" />
    </div>      
    <hr/>      
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="GCP" />
        <SkillList src={checkMarkIcon} skill="Azure" />
    </div>
    <hr/>      
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git/Github" />
        <SkillList src={checkMarkIcon} skill="Netlify" />
        <SkillList src={checkMarkIcon} skill="Heroku" /> 
    </div>      
    <hr />   
    <br />      
    <br/>
    <h1 className="sectionTitle">Eductaion</h1>
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="B.E - IT - SNU, India" />
        <SkillList src={checkMarkIcon} skill="12Th - BIE, India" />
        <SkillList src={checkMarkIcon} skill="10Th - BSET, India" /> 
      </div>
        <br />      
    <br/>
    <h1 className="sectionTitle">Interesting Activities</h1>
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Badminton" />
        <SkillList src={checkMarkIcon} skill="Trekking" />
        <SkillList src={checkMarkIcon} skill="Scuba Diving" /> 
        <SkillList src={checkMarkIcon} skill="Painting" /> 
        <SkillList src={checkMarkIcon} skill="Yoga" /> 
        <SkillList src={checkMarkIcon} skill="Cooking" /> 
        <SkillList src={checkMarkIcon} skill="Travelling" /> 
        <SkillList src={checkMarkIcon} skill="Reading Books" />
        <SkillList src={checkMarkIcon} skill="Coding" /> 
    </div>
    </section>
  );
}

export default Skills;
