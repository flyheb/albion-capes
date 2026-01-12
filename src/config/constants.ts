// Constantes globais da aplicação

export const APP_NAME = 'Albion';
export const APP_VERSION = '0.1.0';

// Limites e validações
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

// Timeouts e delays
export const DEBOUNCE_DELAY = 300; // ms
export const TOAST_DURATION = 3000; // ms
export const LOADING_DELAY = 500; // ms

// Paginação
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

// Cache
export const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

// Storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_PREFERENCES: 'user_preferences',
  THEME: 'theme',
} as const;
