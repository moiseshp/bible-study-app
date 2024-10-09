import { Text } from '@/components/ui/text';
import { View } from 'react-native';
import Constants from 'expo-constants';

export const Signature = () => {
  return (
    <View>
      <Text>
        {new Date().getFullYear()} &copy; Creado por {''}
        {/* <a
          href="https://x.com/moiseseduardohp"
          target="_blank"
          className="font-bold"
        > */}
        moiseshp
        {/* </a> */}
      </Text>
      <Text className="text-center">v{Constants.expoConfig?.version}</Text>
    </View>
  );
};
