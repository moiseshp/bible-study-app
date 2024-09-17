import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function App() {
  const backgroundStyle = 'bg-neutral-100 dark:bg-slate-900';
  return (
    <SafeAreaView className={backgroundStyle}>
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}
      > */}
      <View className="h-full flex items-center justify-center p-6">
        <Text className="text-2xl font-bold dark:text-white">
          Open up App.tsx to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
