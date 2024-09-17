// Icons based https://lucide.dev/icons
import { cn } from '@/libs/utils';
import { Svg, SvgProps } from 'react-native-svg';
import { ColorProps, TEXT_COLORS, SizeProps, SIZES } from '@/components/theme';

export type IconProps = ColorProps & SizeProps & SvgProps;

type SVGIconProps = {
  children: React.ReactNode;
} & IconProps;

export const SVGIcon: React.FC<SVGIconProps> = ({
  color,
  size = 'md',
  children,
  ...props
}) => {
  const getColor = () => {
    if (!color) {
      return 'text-zinc-900';
    }
    return TEXT_COLORS[color] || color;
  };

  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      stroke="currentColor"
      className={cn(SIZES.height[size], SIZES.width[size], getColor())}
      {...props}
    >
      {children}
    </Svg>
  );
};
