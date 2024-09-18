import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Text, View } from 'react-native';
import ThemeToggle from './components/ui/theme-toggle';
import { useThemeLoader } from './hooks/use-theme-loader';

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
    <View className="flex-1 items-center justify-center bg-neutral-100 dark:bg-zinc-900 px-6">
      <Text>Martes 17 de sep 2024</Text>
      <Text>Lectura BíBLICA DEL DÍA</Text>
      <Text className="text-2xl font-bold ">Styling just works! 🎉</Text>
      <ThemeToggle />
      <StatusBar style="auto" />
    </View>
  );
}
