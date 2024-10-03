import { useState, useEffect } from 'react';
import { useColorScheme } from 'nativewind';
import useStore from '@/hooks/use-store';

export const useThemeLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { setColorScheme } = useColorScheme();
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    setColorScheme(theme);
    setIsLoaded(true);
  }, [theme]);

  return isLoaded;
};
