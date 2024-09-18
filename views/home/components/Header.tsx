import AlbumIcon from '@/components/icons/album';
import { SIZES } from '@/components/theme';
import Text from '@/components/ui/text';
import ThemeToggle from '@/components/ui/theme-toggle';
import { cn } from '@/libs/utils';
import { View } from 'react-native';

const Header = () => {
  return (
    <View
      className={cn(
        'sticky top-0 flex flex-row justify-between px-3 items-center',
        SIZES.height.lg,
      )}
    >
      <View className="flex flex-row space-x-3">
        <AlbumIcon size="lg" />
        <Text className="text-xl font-bold uppercase">
          LA BIBLIA CRONOLÓGICA
        </Text>
      </View>
      <ThemeToggle />
    </View>
  );
};

export default Header;
