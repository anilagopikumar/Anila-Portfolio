import styles from './ContactStyles.module.css';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import instagramDark from '../../assets/instagram-dark.svg'
import instagramLight from '../../assets/instagram-light.svg'
import { useTheme } from '../../common/ThemeContext';

function Contact() {
  const { theme } = useTheme();

  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;

return (
    <section id="hero" className={styles.container}>
      <div className={styles.info}>
        <h1>Connect At:</h1>
        <span>
          <a href="https://x.com/deshaanila?s=11&t=pl-K8pWp12ZwfDGyg8ji2A" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/anilagopikumar" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/anila-gopikumar" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://www.instagram.com/anila_gopikumar" target="_blank">
            <img src={instagramIcon} alt="Linkedin icon" />
        </a>
        
      </span>
  </div>
  </section>
  );
}

export default Contact;