import { TEXT_COLORS } from '@/components/theme';
import { cn } from '@/libs/utils';
import { Text as NativeText, TextProps as NativeTextProps } from 'react-native';

type TextProps = {
  className?: string;
  children: React.ReactNode;
} & NativeTextProps;

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  const { style, ...rest } = props as any;
  return (
    <NativeText
      className={cn(TEXT_COLORS.base, 'font-afacad-regular')}
      style={style}
      {...rest}
    >
      {children}
    </NativeText>
  );
};
