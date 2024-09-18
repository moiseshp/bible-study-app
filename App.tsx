import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from 'react-native';
import { useThemeLoader } from '@/hooks/use-theme-loader';
import Text from '@/components/ui/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cn } from '@/libs/utils';
import Header from '@/views/home/components/Header';
import { BG_COLORS } from '@/components/theme';

export default function App() {
  const isLoading = useThemeLoader();

  if (isLoading) {
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
        {/* <Text></Text> */}
        {/* 
      <Text className="text-2xl font-bold ">Styling just works! 🎉</Text> */}
        {/* <ThemeToggle /> */}
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
