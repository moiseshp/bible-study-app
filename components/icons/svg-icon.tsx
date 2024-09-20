// Icons based https://lucide.dev/icons
import { cn } from '@/libs/utils';
import { Svg, SvgProps } from 'react-native-svg';
import {
  ColorProps,
  TEXT_COLORS,
  SizeProps,
  isDarkTheme,
} from '@/components/theme';
import { useColorScheme } from 'nativewind';

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
  const { colorScheme } = useColorScheme();
  const SIZES = {
    xs: 18,
    md: 24,
    lg: 30,
    xl: 40,
  };

  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      stroke={isDarkTheme(colorScheme) ? 'rgb(244 244 245)' : 'rgb(24, 24, 27)'}
      height={SIZES[size]}
      width={SIZES[size]}
      {...props}
    >
      {children}
    </Svg>
  );
};
