import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.credits}>
        Made by <span className={styles.author}>flyheb "Gustavo Oestreich"</span>
      </p>
    </footer>
  );
}

export default Footer;
