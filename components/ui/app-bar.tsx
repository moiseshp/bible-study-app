import { View } from 'react-native';
import { cn } from '@/libs/utils';
import { SIZES } from '@/components/theme';

type AppBarProps = {
  height?: string;
  isFixed?: boolean;
  children: React.ReactNode;
};

export const AppBar: React.FC<AppBarProps> = ({
  height = SIZES.height.lg,
  isFixed = false,
  children,
}) => {
  return (
    <>
      <View
        className={cn(
          'flex flex-row justify-between px-3 items-center w-full',
          height,
          isFixed && 'absolute top-0',
        )}
      >
        {children}
      </View>
      {isFixed && <View className={SIZES.height.lg} />}
    </>
  );
};
