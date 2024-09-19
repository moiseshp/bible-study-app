// import PlayIcon from '@/components/icons/Play';
// import AudioPlayer from '@/components/ui/audio-player';
// import Button from '@/components/ui/button';

import { Text } from '@/components/ui/text';
import { View } from 'react-native';

type DevotionalCardProps = {
  data: any;
};

const DevotionalCard: React.FC<DevotionalCardProps> = ({ data }) => {
  return (
    <View className="rounded-md bg-zinc-100 p-6 dark:bg-zinc-800">
      <View>
        <Text className="text-xl uppercase font-afacad-bold">Devocional</Text>
        <Text className="text-lg">{data.title}</Text>
        <Text>{data.verse}</Text>
      </View>
      {/* {data.audioSource && (
        <AudioPlayer
          src={data.audioSource}
          title={data.author}
          mode="track"
          className="mt-5"
        />
      )} */}
    </View>
  );
};

export default DevotionalCard;
