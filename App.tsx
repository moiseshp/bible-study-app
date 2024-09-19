import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from 'react-native';
import { useThemeLoader } from '@/hooks/use-theme-loader';
import Text from '@/components/ui/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cn } from '@/libs/utils';
import Header from '@/views/home/Header';
import { BG_COLORS } from '@/components/theme';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const isLoading = useThemeLoader();
  const [loaded, error] = useFonts({
    'Afacad-Regular': require('./assets/fonts/Afacad/Afacad-Regular.ttf'),
    'Afacad-Medium': require('./assets/fonts/Afacad/Afacad-Medium.ttf'),
    'Afacad-SemiBold': require('./assets/fonts/Afacad/Afacad-SemiBold.ttf'),
    'Afacad-Bold': require('./assets/fonts/Afacad/Afacad-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (isLoading || (!loaded && !error)) {
    return (
      <View className="flex-1 items-center justify-center bg-neutral-100 dark:bg-zinc-900 px-6">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando datos...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className={cn('flex-1', BG_COLORS.base)}>
      <Header />
      <View className="px-6">
        <Text>Martes 17 de sep 2024</Text>
        <Text>Lectura BíBLICA DEL DÍA</Text>
        <Text>Afacad Bold</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
