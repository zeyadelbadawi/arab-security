// Frontend-only configuration (no backend, no API)

// Config type
type AppConfig = {
  API_BASE_URL: string;
};

// Static config (no runtime loading needed)
const config: AppConfig = {
  API_BASE_URL: '', // empty لأن مفيش API
};

// No-op لأن مفيش backend config
export async function loadRuntimeConfig(): Promise<void> {
  // Do nothing (frontend-only project)
}

// Return config مباشرة
export function getConfig(): AppConfig {
  return config;
}

// Always يرجّع empty string
export function getAPIBaseURL(): string {
  return '';
}

// Getter (for compatibility مع باقي الكود)
export const appConfig = {
  get API_BASE_URL() {
    return getAPIBaseURL();
  },
};