// Constantes de paths para rotas

export const ROUTE_PATHS = {
  HOME: '/',
  ABOUT: '/about',
  NOT_FOUND: '*',
} as const;

export type RoutePathsType = typeof ROUTE_PATHS[keyof typeof ROUTE_PATHS];
