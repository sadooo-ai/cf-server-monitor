export const TIME = {
  ONLINE_THRESHOLD_MS: 300000,
  POLL_INTERVAL_MS: 60000,
  RECONNECT_INITIAL_DELAY_MS: 1000,
  RECONNECT_MAX_DELAY_MS: 30000,
  MAX_RECONNECT_ATTEMPTS: 10,
  CHART_DATA_RETENTION_MS: 3600000
}

export const CHART = {
  MAX_DATA_POINTS: 500,
  ANIMATION_DURATION: 300,
  MAX_TICKS: 8,
  MAX_TICKS_HOUR: 12
}

export const GAP_BREAK = {
  LESS_THAN_1_HOUR: 5 * 60 * 1000,
  LESS_THAN_6_HOURS: 10 * 60 * 1000,
  LESS_THAN_12_HOURS: 15 * 60 * 1000,
  LESS_THAN_24_HOURS: 20 * 60 * 1000,
  MORE_THAN_24_HOURS: 30 * 60 * 1000
}

export const PING = {
  GOOD_THRESHOLD: 100,
  WARNING_THRESHOLD: 200
}

export const STORAGE = {
  THEME_PREFERENCE: 'theme_preference',
  LANGUAGE_PREFERENCE: 'language_preference',
  VIEW_PREFERENCE: 'monitor_preferred_view',
  JWT_TOKEN: 'jwt_token',
  TURNSTILE_TOKEN: 'turnstile_token'
}

export const STATUS = {
  ONLINE: 'online',
  OFFLINE: 'offline'
}

export const COLORS = {
  ACCENT_GREEN: 'var(--accent-green)',
  ACCENT_RED: 'var(--accent-red)',
  ACCENT_CYAN: 'var(--accent-cyan)',
  ACCENT_PURPLE: 'var(--accent-purple)',
  ACCENT_YELLOW: 'var(--accent-yellow)',
  TEXT_MUTED: 'var(--text-muted)'
}

export default {
  TIME,
  CHART,
  GAP_BREAK,
  PING,
  STORAGE,
  STATUS,
  COLORS
}