import { TEXT_COLORS } from '@/components/theme';
import { cn } from '@/libs/utils';
import { Text as NativeText } from 'react-native';

type TextProps = {
  className?: string;
  children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({ className, children, ...props }) => {
  return (
    <NativeText className={cn(TEXT_COLORS.base, className)} {...props}>
      {children}
    </NativeText>
  );
};

export default Text;
