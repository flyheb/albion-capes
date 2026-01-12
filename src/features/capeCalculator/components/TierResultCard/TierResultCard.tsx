import { TierCalculationResult, CapeTier } from '../../../../domain/models/capeCalculator';
import { formatPoints } from '../../../../domain/calculations/calculateCapes';
import t4Cape from '../../../../assets/images/capas/bridge/T4_BRIDGEWATCH.png';
import t5Cape from '../../../../assets/images/capas/bridge/T5_BRIDGEWATCH.png';
import t6Cape from '../../../../assets/images/capas/bridge/T6_BRIDGEWATCH.png';
import t7Cape from '../../../../assets/images/capas/bridge/T7_BRIDGEWATCH.png';
import t8Cape from '../../../../assets/images/capas/bridge/T8_BRIDGEWATCH.png';
import styles from './TierResultCard.module.css';

// Mapeamento de tier para imagem da capa
const CAPE_IMAGES: Record<CapeTier, string> = {
  4: t4Cape,
  5: t5Cape,
  6: t6Cape,
  7: t7Cape,
  8: t8Cape,
};

export interface TierResultCardProps {
  result: TierCalculationResult;
}

/**
 * Card de apresentação visual do resultado de cálculo para um tier específico
 *
 * Responsabilidades:
 * - Apresentação pura (recebe resultado como prop)
 * - Exibir informações de forma legível e visualmente atraente
 * - Sem lógica de cálculo
 *
 * Informações exibidas:
 * - Tier e nome
 * - Quantidade máxima de capas
 * - Ornamentos necessários
 * - Corações necessários
 * - Custo por capa
 * - Pontos restantes (destaque em verde)
 *
 * @example
 * <TierResultCard result={tierResult} />
 */
function TierResultCard({ result }: TierResultCardProps) {
  const {
    tier,
    tierName,
    maxCapes,
    totalOrnaments,
    totalHearts,
    remainingPoints,
    totalCostPerCape,
  } = result;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.tierName}>Tier {tier}</h3>
        <span className={styles.subtitle}>{tierName}</span>
      </div>

      <div className={styles.mainResult}>
        <img
          src={CAPE_IMAGES[tier]}
          alt={`Capa ${tierName} - Tier ${tier}`}
          className={styles.capeImage}
          loading="lazy"
        />
        <span className={styles.capesLabel}>Capas Máximos</span>
        <span className={styles.capesCount}>{maxCapes}</span>
      </div>

      <div className={styles.divider} />

      <div className={styles.details}>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Ornamentos necessários:</span>
          <span className={styles.detailValue}>{totalOrnaments}</span>
        </div>

        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Corações necessários:</span>
          <span className={styles.detailValue}>{totalHearts}</span>
        </div>

        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Custo por capa:</span>
          <span className={styles.detailValue}>{formatPoints(totalCostPerCape)}</span>
        </div>

        <div className={`${styles.detailRow} ${styles.remainingRow}`}>
          <span className={styles.detailLabel}>Pontos restantes:</span>
          <span className={styles.remainingValue}>{formatPoints(remainingPoints)}</span>
        </div>
      </div>
    </div>
  );
}

export default TierResultCard;
