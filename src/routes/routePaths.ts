// Constantes de paths para rotas

export const ROUTE_PATHS = {
  HOME: '/',
  NOT_FOUND: '*',
} as const;

export type RoutePathsType = typeof ROUTE_PATHS[keyof typeof ROUTE_PATHS];
