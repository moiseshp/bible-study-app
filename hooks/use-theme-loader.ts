import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'nativewind';
import { ColorSchemeSystem } from 'nativewind/dist/style-sheet/color-scheme';

export const KEY_THEME = 'theme-v1';

export const useThemeLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setColorScheme } = useColorScheme();

  useEffect(() => {
    const loadThemeFromStorage = async () => {
      try {
        const theme = (await AsyncStorage.getItem(
          KEY_THEME,
        )) as ColorSchemeSystem;
        if (theme) {
          setColorScheme(theme);
        }
      } catch (error) {
        console.error('Error al obtener el tema:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadThemeFromStorage();
  }, [setColorScheme]);

  return isLoading;
};
