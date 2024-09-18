import { BG_COLORS } from '@/components/theme';
import { cn } from '@/libs/utils';
import { View as NativeView } from 'react-native';

type ViewProps = {
  className?: string;
  children: React.ReactNode;
};

const View: React.FC<ViewProps> = ({ className, children, ...props }) => {
  return (
    <NativeView className={cn(BG_COLORS.base, className)} {...props}>
      {children}
    </NativeView>
  );
};

export default View;
