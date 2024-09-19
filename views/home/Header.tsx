import AlbumIcon from '@/components/icons/album';
import { SIZES } from '@/components/theme';
import Text from '@/components/ui/text';
import ThemeToggle from '@/components/ui/theme-toggle';
import { cn } from '@/libs/utils';
import { View } from 'react-native';

const Header = () => {
  return (
    <>
      <View
        className={cn(
          'absolute top-0 flex flex-row justify-between px-3 items-center w-full',
          SIZES.height.lg,
        )}
      >
        <View className="flex flex-row gap-x-3">
          <AlbumIcon size="lg" />
          <Text className="text-xl uppercase font-afacad-bold">
            LA BIBLIA CRONOLÓGICA
          </Text>
        </View>
        <ThemeToggle />
      </View>
      <View className={SIZES.height.lg} />
    </>
  );
};

export default Header;
