import { useColorScheme } from 'nativewind';
import { IconButton } from '@/components/ui/icon-button';
import { Moon as MoonIcon } from '@/components/icons/moon';
import { Sun as SunIcon } from '@/components/icons/sun';
import useStore from '@/hooks/use-store';

export const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const setTheme = useStore((state) => state.setTheme);

  const handleTheme = async () => {
    toggleColorScheme();
    setTheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <IconButton
      isRounded
      variant="solid"
      icon={colorScheme === 'dark' ? <SunIcon /> : <MoonIcon />}
      onPress={handleTheme}
    />
  );
};
