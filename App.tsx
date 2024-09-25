import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import { useStorageLoader } from '@/hooks/use-storage-loader';
import { Text } from '@/components/ui/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomNavigation } from '@/views/home/bottom-navigation';
import { Signature } from '@/components/ui/signature';
import { useFontsLoader } from './hooks/use-fonts-loader';
import { AppBar } from '@/components/ui/app-bar';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Album as AlbumIcon } from '@/components/icons/album';
import { DevotionalCard } from '@/views/home/devotional-card';
import * as SplashScreen from 'expo-splash-screen';
import { BibleText } from '@/components/ui/bible-text';
import { GradientBox } from '@/components/ui/gradient-box';
import readingPlan from '@/data/reading-plan.json';
import { Button } from '@/components/ui/button';
import { ArrowRight as ArrowRightIcon } from '@/components/icons/arrow-right';
import { AudioPlayer } from '@/components/ui/audio-player';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const isStorageLoaded = useStorageLoader();
  const isFontsLoaded = useFontsLoader();
  const data = readingPlan.data;
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
              Devocionales Lince
            </Text>
          </View>
          <ThemeToggle />
        </AppBar>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="px-6">
            <Text className="mb-4">Martes 17 de sep 2024</Text>
            <View className="mb-8">
              <Text className="mb-4 border-b border-t border-zinc-700 py-3 text-xl uppercase">
                Lectura BÍBLICA DEL DÍA
              </Text>
              <AudioPlayer />
              <View className="max-h-96 overflow-hidden">
                {data.chapter.chapter && <BibleText data={data.chapter} />}
              </View>
              <GradientBox className="flex h-32 -mt-32 flex-row items-end">
                <Button
                  variant="outlined"
                  iconRight={<ArrowRightIcon size="xs" />}
                >
                  Leer el texto completo
                </Button>
              </GradientBox>
            </View>

            {data.devotional.title && <DevotionalCard data={data.devotional} />}
            <View className="my-6 flex flex-row justify-center w-full">
              <Signature />
            </View>
          </View>
        </ScrollView>
        <BottomNavigation date="" onDateChange={() => console.info('')} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
