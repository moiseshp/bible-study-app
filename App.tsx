import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFontsLoader } from '@/hooks/use-fonts-loader';
import * as SplashScreen from 'expo-splash-screen';
import { useThemeLoader } from '@/hooks/use-theme-loader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useReactQueryDevTools } from '@dev-plugins/react-query';
import Home from '@/views/home';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function App() {
  useReactQueryDevTools(queryClient);
  const isThemeLoaded = useThemeLoader();
  const isFontsLoaded = useFontsLoader();
  const isAppReady = isThemeLoaded && isFontsLoaded;

  const handleLayout = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) return null;

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 dark:bg-zinc-900" onLayout={handleLayout}>
        <StatusBar style="auto" />
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
