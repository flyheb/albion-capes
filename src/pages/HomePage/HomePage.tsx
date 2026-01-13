import CapeCalculator from '../../features/capeCalculator';
import Footer from '../../components/layout/Footer';
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
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
