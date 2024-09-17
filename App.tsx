import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import ThemeToggle from './components/ui/theme-toggle';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-100 dark:bg-zinc-900 px-6">
      <Text>Martes 17 de sep 2024</Text>
      <Text>Lectura BíBLICA DEL DÍA</Text>
      <Text className="text-2xl font-bold ">
        Styling just works! 🎉
        <ThemeToggle />
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
