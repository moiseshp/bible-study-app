import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useThemeLoader } from '@/hooks/use-theme-loader';
import Text from '@/components/ui/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Header from '@/views/home/header';
import BottomNavigation from '@/views/home/bottom-navigation';
import Signature from '@/components/ui/signature';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const isLoading = useThemeLoader();
  const [isLoaded] = useFonts({
    'Afacad-Regular': require('./assets/fonts/Afacad-Regular.ttf'),
    'Afacad-Medium': require('./assets/fonts/Afacad-Medium.ttf'),
    'Afacad-Semibold': require('./assets/fonts/Afacad-SemiBold.ttf'),
    'Afacad-Bold': require('./assets/fonts/Afacad-Bold.ttf'),
  });

  const handleLayout = useCallback(async () => {
    if (isLoaded && !isLoading) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) return null;

  return (
    <SafeAreaView className="flex-1 dark:bg-zinc-900" onLayout={handleLayout}>
      <View className="flex-1">
        <Header />
        <View className="px-6">
          <Text className="mb-4">Martes 17 de sep 2024</Text>
          <Text className="mb-4 border-b border-t border-zinc-700 py-3 text-xl uppercase">
            Lectura BíBLICA DEL DÍA
          </Text>
          <Text>Afacad Bold</Text>
          <StatusBar style="auto" />
          <View className="py-6 flex flex-row justify-center w-full">
            <Signature />
          </View>
        </View>
        <BottomNavigation date="" onDateChange={() => console.info('')} />
      </View>
    </SafeAreaView>
  );
}
