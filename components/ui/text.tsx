import { TEXT_COLORS } from '@/components/theme';
import { cn } from '@/libs/utils';
import { Text as NativeText, TextProps as NativeTextProps } from 'react-native';

type TextProps = {
  className?: string;
  children: React.ReactNode;
} & NativeTextProps;

export const Text: React.FC<TextProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <NativeText
      className={cn(TEXT_COLORS.base, 'font-afacad-regular', className)}
      {...props}
    >
      {children}
    </NativeText>
  );
};
