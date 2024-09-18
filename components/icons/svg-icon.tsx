// Icons based https://lucide.dev/icons
import { cn } from '@/libs/utils';
import { Svg, SvgProps } from 'react-native-svg';
import { ColorProps, TEXT_COLORS, SizeProps } from '@/components/theme';
import View from '../ui/view';
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
  // const getColor = () => {
  //   if (!color) {
  //     return 'dark:text-zinc-100 text-zinc-900';
  //   }
  //   return TEXT_COLORS[color] || color;
  // };

  return (
    <View className="dark:text-zinc-100 text-zinc-900">
      <Svg
        viewBox="0 0 24 24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        stroke={colorScheme === 'dark' ? 'white' : 'black'}
        height={SIZES[size]}
        width={SIZES[size]}
        // className={cn(SIZES[size], SIZES[size])}
        {...props}
      >
        {children}
      </Svg>
    </View>
  );
};
