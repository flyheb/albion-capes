import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

/**
 * Props do componente Input
 * Estende os atributos padrão do HTMLInput com suporte a label, error e helperText
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

/**
 * Componente Input reutilizável
 *
 * Características:
 * - Label associado corretamente com htmlFor/id
 * - Mensagem de erro visível com ARIA alerts
 * - Helper text para instruções
 * - Acessibilidade completa (aria-invalid, aria-describedby)
 * - Estados visuais para erro e disabled
 *
 * @example
 * <Input
 *   label="Pontos de Facção"
 *   type="number"
 *   placeholder="Digite um número"
 *   error={error}
 *   helperText="Insira apenas números inteiros"
 * />
 */
function Input({
  label,
  error,
  helperText,
  fullWidth = false,
  className = '',
  id,
  ...rest
}: InputProps) {
  // Gerar ID se não fornecido
  const inputId = id || `input-${label?.replace(/\s+/g, '-').toLowerCase()}`;
  const hasError = Boolean(error);

  return (
    <div className={`${styles.container} ${fullWidth ? styles.fullWidth : ''} ${className}`}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={`${styles.input} ${hasError ? styles.inputError : ''}`}
        aria-invalid={hasError}
        aria-describedby={
          error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
        }
        {...rest}
      />

      {error && (
        <span id={`${inputId}-error`} className={styles.errorText} role="alert">
          {error}
        </span>
      )}

      {!error && helperText && (
        <span id={`${inputId}-helper`} className={styles.helperText}>
          {helperText}
        </span>
      )}
    </div>
  );
}

export default Input;
