import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from 'nativewind';
import { isDarkTheme } from '@/components/theme';

type GradientBoxProps = {
  className?: string;
  children?: React.ReactNode;
};

export const GradientBox: React.FC<GradientBoxProps> = ({
  children,
  ...props
}) => {
  const { colorScheme } = useColorScheme();
  const { style } = props as any;
  const colors = isDarkTheme(colorScheme)
    ? ['transparent', 'rgba(24, 24, 27, .85)', 'rgb(24, 24, 27)']
    : ['transparent', 'rgba(255, 255, 255, .85)', 'rgb(255, 255, 255)'];

  return (
    <LinearGradient colors={colors} style={style}>
      {children}
    </LinearGradient>
  );
};
