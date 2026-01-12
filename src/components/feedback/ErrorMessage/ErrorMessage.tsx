import styles from './ErrorMessage.module.css';

export interface ErrorMessageProps {
  message: string;
  variant?: 'inline' | 'block';
}

/**
 * Componente para exibir mensagens de erro
 *
 * Características:
 * - Ícone de alerta visual
 * - Accessibilidade com role="alert" e aria-live="polite"
 * - Duas variantes: inline (menor) e block (maior)
 * - Cores semânticas para erro
 *
 * @example
 * <ErrorMessage message="Valor inválido" variant="block" />
 */
function ErrorMessage({ message, variant = 'inline' }: ErrorMessageProps) {
  return (
    <div className={`${styles.container} ${styles[variant]}`} role="alert" aria-live="polite">
      <span className={styles.icon}>⚠️</span>
      <span className={styles.message}>{message}</span>
    </div>
  );
}

export default ErrorMessage;
