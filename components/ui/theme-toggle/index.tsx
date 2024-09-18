import { useColorScheme } from 'nativewind';
import IconButton from '../icon-button';
import MoonIcon from '@/components/icons/moon';
import SunIcon from '@/components/icons/sun';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_THEME } from '@/hooks/use-theme-loader';

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const handleTheme = async () => {
    toggleColorScheme();
    const theme = colorScheme === 'dark' ? 'light' : 'dark';
    await AsyncStorage.setItem(KEY_THEME, theme);
  };

  return (
    <IconButton
      icon={colorScheme === 'dark' ? <MoonIcon /> : <SunIcon />}
      onPress={handleTheme}
    />
  );
};

export default ThemeToggle;
