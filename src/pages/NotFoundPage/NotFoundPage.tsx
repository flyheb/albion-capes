import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '../../routes/routePaths';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <h2>Página não encontrada</h2>
        <p className={styles.message}>
          A página que você está procurando não existe ou foi movida.
        </p>

        <nav className={styles.navigation}>
          <Link to={ROUTE_PATHS.HOME} className={styles.link}>
            Voltar para Home
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default NotFoundPage;
