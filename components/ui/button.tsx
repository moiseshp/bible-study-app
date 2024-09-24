import { cn } from '@/libs/utils';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Text } from '@/components/ui/text';

type ButtonProps = {
  variant?: 'text' | 'solid' | 'outlined';
  size?: 'xs' | 'md' | 'lg';
  className?: string;
  isFullWidth?: boolean;
  isRounded?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onPress?: () => void;
  children: React.ReactNode;
} & TouchableOpacityProps;

export const Button: React.FC<ButtonProps> = ({
  variant = 'text',
  size = 'md',
  isFullWidth = false,
  isRounded = false,
  iconLeft,
  iconRight,
  children,
  onPress,
  ...props
}) => {
  const { style, disabled: isDisabled, ...rest } = props as any;

  const sizeStyles = {
    xs: 'px-3 h-8 text-xs',
    md: 'px-4 h-10 text-md',
    lg: 'px-5 h-14 text-md',
  };

  const variants = {
    text: 'border-none',
    solid:
      'border border-zinc-100 bg-zinc-100 dark:bg-zinc-800 dark:text-white dark:border-zinc-800',
    outlined: 'border bg-transparent border-zinc-800 dark:border-white',
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        'flex flex-row items-center justify-center rounded-md transition',
        sizeStyles[size],
        variants[variant],
        isFullWidth && 'w-full',
        isRounded && 'rounded-full',
        (iconLeft || iconRight) && 'space-x-2',
      )}
      disabled={isDisabled}
      activeOpacity={0.7}
      style={style}
      {...rest}
    >
      {iconLeft && iconLeft}
      <Text>{children}</Text>
      {iconRight && iconRight}
    </TouchableOpacity>
  );
};
