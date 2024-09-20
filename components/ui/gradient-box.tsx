import { LinearGradient } from 'expo-linear-gradient';

type GradientBoxProps = {
  className?: string;
  children?: React.ReactNode;
};

export const GradientBox: React.FC<GradientBoxProps> = ({
  children,
  ...props
}) => {
  const { style } = props as any;
  return (
    <LinearGradient
      colors={['transparent', 'rgba(24, 24, 27, .85)', 'rgb(24, 24, 27)']}
      style={style}
    >
      {children}
    </LinearGradient>
  );
};
