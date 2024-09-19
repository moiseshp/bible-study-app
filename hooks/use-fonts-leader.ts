import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';

export const useFontsLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFontsLoaded] = useFonts({
    'Afacad-Regular': require('@/assets/fonts/Afacad-Regular.ttf'),
    'Afacad-Medium': require('@/assets/fonts/Afacad-Medium.ttf'),
    'Afacad-Semibold': require('@/assets/fonts/Afacad-SemiBold.ttf'),
    'Afacad-Bold': require('@/assets/fonts/Afacad-Bold.ttf'),
  });

  useEffect(() => {
    if (isFontsLoaded) {
      setIsLoaded(true);
    }
  }, [isFontsLoaded]);

  return isLoaded;
};
