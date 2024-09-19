import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { cn } from '@/libs/utils';
import {
  ColorProps,
  BG_COLORS,
  SizeProps,
  SIZES,
  VariantProps,
} from '@/components/theme';

type IconButtonProps = {
  icon: React.ReactNode;
  isRounded?: boolean;
  onPress: () => void;
} & TouchableOpacityProps &
  SizeProps &
  ColorProps &
  VariantProps;

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  size = 'md',
  color = 'base',
  variant = 'solid',
  isRounded = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        'flex items-center justify-center',
        isRounded && 'rounded-full',
        SIZES.height[size],
        SIZES.width[size],
        BG_COLORS[color],
      )}
      activeOpacity={0.7}
      {...props}
    >
      {icon}
    </TouchableOpacity>
  );
};
