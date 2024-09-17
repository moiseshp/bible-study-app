import { useColorScheme } from 'nativewind';
import IconButton from '../icon-button';
import MoonIcon from '@/components/icons/moon';
import SunIcon from '@/components/icons/sun';

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <IconButton
      icon={colorScheme === 'dark' ? <MoonIcon /> : <SunIcon />}
      onPress={toggleColorScheme}
    />
  );
};

export default ThemeToggle;
