import { cn } from '@/libs/utils';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Text } from '@/components/ui/text';

type ButtonProps = {
  variant?: 'text' | 'solid' | 'outlined';
  size?: 'xs' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  isFullWidth?: boolean;
  isRounded?: boolean;
  onPress?: () => void;
} & TouchableOpacityProps;

export const Button: React.FC<ButtonProps> = ({
  variant = 'text',
  size = 'md',
  isFullWidth = false,
  isRounded = false,
  children,
  onPress,
  ...props
}) => {
  const { style, disabled: isDisabled, ...rest } = props as any;

  const sizeStyles = {
    xs: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-2.5 text-md',
  };

  const variantStyles = {
    text: 'border-none',
    solid:
      'border-zinc-100 bg-zinc-100 dark:bg-zinc-800 dark:text-white dark:border-zinc-800',
    outlined: 'bg-transparent border-zinc-800 dark:border-white',
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        'flex items-center justify-center gap-x-2 rounded-md border font-semibold transition focus:outline-none',
        sizeStyles[size],
        variantStyles[variant],
        isFullWidth && '!w-full',
        isRounded && '!rounded-full',
      )}
      disabled={isDisabled}
      activeOpacity={0.7}
      style={style}
      {...rest}
    >
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};
