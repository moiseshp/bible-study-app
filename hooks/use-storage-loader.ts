import { useState, useEffect } from 'react';
import { useColorScheme } from 'nativewind';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEY = 'BibleStudy_v0';

export const useStorageLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { setColorScheme } = useColorScheme();

  useEffect(() => {
    const loadStorage = async () => {
      try {
        const item = await AsyncStorage.getItem(STORAGE_KEY);
        const storage = item ? JSON.parse(item) : null;
        if (storage) {
          setColorScheme(storage.theme);
        }
      } catch (error) {
        console.error('[USE_STORAGE_LOADER]', error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadStorage();
  }, [setColorScheme]);

  return isLoaded;
};
