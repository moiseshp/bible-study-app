import { AudioPlayer } from '@/components/ui/audio-player';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

type DevotionalCardProps = {
  data: any;
};

export const DevotionalCard: React.FC<DevotionalCardProps> = ({ data }) => {
  return (
    <View className="rounded-md bg-zinc-100 p-6 dark:bg-zinc-800">
      <View>
        <Text className="text-xl uppercase font-afacad-bold">Devocional</Text>
        <Text className="text-lg">{data.title}</Text>
        <Text>{data.verse}</Text>
        {data.audioSource && (
          <AudioPlayer
            source={data.audioSource}
            title={data.author}
            className="mt-3"
          />
        )}
      </View>
    </View>
  );
};
