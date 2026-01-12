import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '../../routes/routePaths';
import styles from './AboutPage.module.css';

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Sobre o Projeto Albion</h1>

        <section className={styles.section}>
          <h2>Estrutura do Projeto</h2>
          <p>
            Este projeto foi estruturado seguindo as melhores práticas de desenvolvimento React moderno,
            com foco em escalabilidade, manutenibilidade e type-safety.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Tecnologias Utilizadas</h2>
          <ul className={styles.techList}>
            <li>
              <strong>React 19.2.1+</strong> - Biblioteca JavaScript para construção de interfaces
            </li>
            <li>
              <strong>TypeScript</strong> - Superset tipado de JavaScript com strict mode
            </li>
            <li>
              <strong>React Router</strong> - Navegação entre páginas
            </li>
            <li>
              <strong>CSS Modules</strong> - Estilos com escopo local
            </li>
            <li>
              <strong>CSS Variables</strong> - Design tokens para consistência visual
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Organização de Pastas</h2>
          <ul className={styles.folderList}>
            <li><code>/components</code> - Componentes reutilizáveis de UI</li>
            <li><code>/features</code> - Módulos organizados por domínio</li>
            <li><code>/pages</code> - Componentes de página (rotas)</li>
            <li><code>/domain</code> - Lógica de negócio pura</li>
            <li><code>/services</code> - Comunicação com APIs externas</li>
            <li><code>/utils</code> - Funções utilitárias genéricas</li>
            <li><code>/hooks</code> - Custom hooks reutilizáveis</li>
            <li><code>/types</code> - Definições de tipos TypeScript</li>
          </ul>
        </section>

        <nav className={styles.navigation}>
          <Link to={ROUTE_PATHS.HOME} className={styles.link}>
            ← Voltar para Home
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default AboutPage;
