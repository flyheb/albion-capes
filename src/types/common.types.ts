// Tipos compartilhados comuns
export type ID = string | number;

export interface BaseEntity {
  id: ID;
  createdAt: Date;
  updatedAt: Date;
}

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
