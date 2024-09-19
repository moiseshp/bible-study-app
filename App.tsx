import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useStorageLoader } from '@/hooks/use-storage-loader';
import { Text } from '@/components/ui/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomNavigation } from '@/views/home/bottom-navigation';
import { Signature } from '@/components/ui/signature';
import { useFontsLoader } from './hooks/use-fonts-leader';
import { AppBar } from '@/components/ui/app-bar';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Album as AlbumIcon } from '@/components/icons/album';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const isStorageLoaded = useStorageLoader();
  const isFontsLoaded = useFontsLoader();
  const data = true;
  const isAppReady = isStorageLoaded && isFontsLoaded && data;

  const handleLayout = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) return null;

  return (
    <SafeAreaView className="flex-1 dark:bg-zinc-900" onLayout={handleLayout}>
      <View className="flex-1">
        <AppBar isFixed>
          <View className="flex flex-row gap-x-3">
            <AlbumIcon size="lg" />
            <Text className="text-xl uppercase font-afacad-bold">
              LA BIBLIA CRONOLÓGICA
            </Text>
          </View>
          <ThemeToggle />
        </AppBar>
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
