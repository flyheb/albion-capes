import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '../../routes/routePaths';
import CapeCalculator from '../../features/capeCalculator';
import logo from '../../assets/images/logo_albion_capes.png';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          src={logo}
          alt="Albion Capes"
          className={styles.logo}
        />
      </header>

      <main className={styles.main}>
        <section className={styles.calculatorSection}>
          <CapeCalculator />
        </section>

        <nav className={styles.navigation}>
          <Link to={ROUTE_PATHS.ABOUT} className={styles.link}>
            Sobre o Projeto →
          </Link>
        </nav>
      </main>
    </div>
  );
}

export default HomePage;
