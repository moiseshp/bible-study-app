export const SIZES = {
  height: {
    xs: 'h-9',
    md: 'h-14',
    lg: 'h-16',
  },
  width: {
    xs: 'w-9',
    md: 'w-14',
    lg: 'w-16',
  },
};

export const TEXT_COLORS = {
  base: 'text-red-900 dark:text-red-100',
  primary: 'text-red-400',
  secondary: 'text-red-900',
};

export const BG_COLORS = {
  base: 'bg-red-100',
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
