import { useColorScheme } from 'nativewind';
import { IconButton } from '@/components/ui/icon-button';
import { Moon as MoonIcon } from '@/components/icons/moon';
import { Sun as SunIcon } from '@/components/icons/sun';
import { STORAGE_KEY } from '@/hooks/use-storage-loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const handleTheme = async () => {
    toggleColorScheme();
    const theme = colorScheme === 'dark' ? 'light' : 'dark';
    await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({ theme }));
  };

  return (
    <IconButton
      isRounded
      variant="solid"
      icon={colorScheme === 'dark' ? <MoonIcon /> : <SunIcon />}
      onPress={handleTheme}
    />
  );
};
