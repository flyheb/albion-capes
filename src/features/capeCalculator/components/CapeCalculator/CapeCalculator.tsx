import { useState, useMemo } from 'react';
import CapeCalculatorInput from '../CapeCalculatorInput';
import TierResultCard from '../TierResultCard';
import { calculateAllTiers } from '../../../../domain/calculations/calculateCapes';
import styles from './CapeCalculator.module.css';

/**
 * Componente principal da calculadora de capas de facção
 *
 * Responsabilidades (Container Component):
 * - Gerenciar estado: pontos de facção (useState)
 * - Calcular resultados com useMemo (otimização: só recalcula quando factionPoints muda)
 * - Renderizar componentes filhos
 * - Renderizar resultados condicionalmente (apenas quando há input válido)
 *
 * Fluxo:
 * 1. Usuário digita pontos no CapeCalculatorInput
 * 2. Validação acontece no input component
 * 3. Valor válido é propagado via callback
 * 4. useMemo calcula resultados automaticamente
 * 5. TierResultCards são renderizados em grid
 *
 * @example
 * <CapeCalculator />
 */
function CapeCalculator() {
  const [factionPoints, setFactionPoints] = useState<number | null>(null);

  // Memoizar cálculos - só recalcula quando factionPoints mudar
  // Isso evita recálculos desnecessários durante re-renders
  const calculationResult = useMemo(() => {
    if (factionPoints === null || factionPoints === 0) {
      return null;
    }
    return calculateAllTiers(factionPoints);
  }, [factionPoints]);

  const hasResults = calculationResult !== null && calculationResult.isValid;

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Calculadora de Capas de Facção</h2>
        <p className={styles.description}>
          Calcule quantas capas você pode comprar com seus pontos de facção.
          Cada tier é calculado independentemente com o total de pontos disponíveis.
        </p>
      </div>

      <div className={styles.inputSection}>
        <CapeCalculatorInput onPointsChange={setFactionPoints} />
      </div>

      {hasResults && (
        <div className={styles.resultsSection}>
          <h3 className={styles.resultsTitle}>Resultados por Tier</h3>

          <div className={styles.cardsGrid}>
            {calculationResult.tiers.map((tierResult) => (
              <TierResultCard key={tierResult.tier} result={tierResult} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default CapeCalculator;
