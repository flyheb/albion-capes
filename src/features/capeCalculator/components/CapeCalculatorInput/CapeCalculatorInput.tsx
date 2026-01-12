import { useState, ChangeEvent } from 'react';
import Input from '../../../../components/common/Input';
import { validateFactionPoints } from '../../../../domain/validators/factionPointsValidator';
import styles from './CapeCalculatorInput.module.css';

export interface CapeCalculatorInputProps {
  onPointsChange: (points: number | null) => void;
}

/**
 * Componente de input específico para a calculadora de capas
 *
 * Responsabilidades:
 * - Gerenciar input do usuário (state local)
 * - Validar entrada usando validators do domain
 * - Exibir mensagens de erro
 * - Propagar valor válido para parent via callback
 *
 * @example
 * <CapeCalculatorInput onPointsChange={(points) => setPoints(points)} />
 */
function CapeCalculatorInput({ onPointsChange }: CapeCalculatorInputProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string | undefined>(undefined);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    // Validar entrada
    const validation = validateFactionPoints(value);

    if (!validation.isValid) {
      setError(validation.errorMessage);
      onPointsChange(null);
      return;
    }

    // Limpar erro e propagar valor válido
    setError(undefined);
    onPointsChange(Number(value));
  };

  return (
    <div className={styles.container}>
      <Input
        type="number"
        label="Pontos de Facção Disponíveis"
        placeholder="Digite seus pontos de facção"
        value={inputValue}
        onChange={handleChange}
        error={error}
        helperText="Insira o total de pontos de facção que você possui"
        fullWidth
        min="0"
        step="1"
      />
    </div>
  );
}

export default CapeCalculatorInput;
