import { StatusBar } from 'expo-status-bar';
import { styled, useColorScheme } from 'nativewind';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';

const StyledPressable = styled(Pressable);

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const backgroundStyle = 'bg-neutral-100 dark:bg-zinc-900';
  return (
    <SafeAreaView className={backgroundStyle}>
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}
      > */}
      <View className="h-full flex items-center justify-center p-6">
        <StyledPressable onPress={toggleColorScheme}>
          <Text
            selectable={false}
            className="text-2xl font-bold dark:text-white"
          >
            {`Try clicking me! ${colorScheme === 'dark' ? '🌙' : '🌞'}`}
          </Text>
        </StyledPressable>
        <StatusBar style="auto" />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
