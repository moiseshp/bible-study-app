import { StatusBar } from 'expo-status-bar';
// import { styled, useColorScheme } from 'nativewind';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
// import { cn } from '@/libs/utils';
// import ThemeToggle from '@/components/ui/theme-toggle';

export default function App() {
  const backgroundStyle = 'bg-neutral-100 dark:bg-zinc-900';
  return (
    <SafeAreaView className={backgroundStyle}>
      {/* <ScrollView
       contentInsetAdjustmentBehavior="automatic"
       className={cn(backgroundStyle)}
     > */}
      <View className="h-full flex items-center justify-center p-6">
        {/* <ThemeToggle /> */}
        {/* <Text
            selectable={false}
            className="text-2xl font-bold dark:text-white"
          >
            {`Try clicking me! ${colorScheme === 'dark' ? '🌙' : '🌞'}`}
          </Text> */}

        <StatusBar style="auto" />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
