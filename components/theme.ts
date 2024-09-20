export const SIZES = {
  height: {
    xs: 'h-5',
    md: 'h-10',
    lg: 'h-16',
  },
  width: {
    xs: 'w-5',
    md: 'w-10',
    lg: 'w-16',
  },
};

export const TEXT_COLORS = {
  base: 'text-zinc-900 dark:text-zinc-100',
  primary: 'text-red-400',
  secondary: 'text-red-900',
};

export const BG_COLORS = {
  base: 'bg-zinc-100 dark:bg-zinc-800',
  primary: 'bg-red-400',
  secondary: 'bg-red-900',
};

export type ColorProps = {
  color?: 'base' | 'primary' | 'secondary';
};

export type SizeProps = {
  size?: 'xs' | 'md' | 'lg';
};

export type VariantProps = {
  variant?: 'solid' | 'outlined';
};

export function isDarkTheme(colorScheme: string) {
  return colorScheme === 'dark';
}

export function isLightTheme(colorScheme: string) {
  return colorScheme === 'light';
}
