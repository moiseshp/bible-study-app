import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import { IconButton } from '@/components/ui/icon-button';
import { Play as PlayIcon } from '@/components/icons/play';
import { Pause as PauseIcon } from '@/components/icons/pause';
import { Text } from '@/components/ui/text';

function formatTime(time: number) {
  if (!time) return '00:00';
  const position = time / 1000;
  const minutes = Math.floor(position / 60);
  const seconds = Math.floor(position % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

type AudioPlayerProps = {
  source: string;
  title?: string;
  mode?: 'classic' | 'mini';
  className?: string;
};

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  source,
  title = 'Sample Audio',
  mode = 'mini',
  ...props
}) => {
  const [audio, setAudio] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const { style, ...rest } = props as any;

  const play = async () => await audio.playAsync();
  const pause = async () => await audio.pauseAsync();

  const skipForward = async (seconds: number) => {
    const status: any = await audio.getStatusAsync();
    const newPosition = Math.min(
      status.positionMillis + seconds * 1000,
      status.durationMillis,
    );
    await audio.setPositionAsync(newPosition);
  };

  const skipBackward = async (seconds: number) => {
    const status = await audio.getStatusAsync();
    const newPosition = Math.max(status.positionMillis - seconds * 1000, 0);
    await audio.setPositionAsync(newPosition);
  };

  const seekToPosition = async (value: number) => {
    await audio.setPositionAsync(value);
  };

  const resetAudio = async () => {
    await audio.stopAsync();
    await audio.setPositionAsync(0);
    setIsPlaying(false);
    setPosition(0);
  };

  useEffect(() => {
    if (!source) return;

    const loadAudio = async () => {
      try {
        const { sound, status }: any = await Audio.Sound.createAsync(
          { uri: source },
          { shouldPlay: false },
        );
        setAudio(sound);
        setDuration(status.durationMillis);
      } catch (error) {
        console.error('An error occurred: ', error);
      }
    };
    loadAudio();
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(async () => {
      const status = await audio.getStatusAsync();
      if (status.isLoaded) {
        setPosition(status.positionMillis);
        if (status.positionMillis >= duration) {
          resetAudio();
          clearInterval(interval);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (mode === 'mini') {
    return (
      <View
        className="flex flex-row items-center justify-between border border-zinc-600 rounded-md pl-4 pt-1 pr-1 pb-1 space-x-2"
        style={style}
      >
        <Text className="font-afacad-bold">{title}</Text>
        <Text>
          {formatTime(position)} / {formatTime(duration)}
        </Text>
        <IconButton
          variant="solid"
          icon={isPlaying ? <PauseIcon /> : <PlayIcon />}
          onPress={() => {
            isPlaying ? pause() : play();
            setIsPlaying(!isPlaying);
          }}
        />
      </View>
    );
  }

  return (
    <View>
      {/* <Button
         title={isPlaying ? 'Pause' : 'Play'}
         onPress={() => {
           isPlaying ? pause() : play();
           setIsPlaying(!isPlaying);
         }}
       />
       <Button title="Skip Forward 10s" onPress={() => skipForward(10)} />
       <Button title="Skip Backward 10s" onPress={() => skipBackward(10)} /> */}
      <Text>position: {formatTime(position / 1000)}</Text>
      <Text>Duration: {formatTime(duration / 1000)}</Text>

      <Slider
        minimumValue={0}
        maximumValue={duration}
        value={position}
        minimumTrackTintColor="#1EB1FC"
        maximumTrackTintColor="#8B8B8B"
        thumbTintColor="#1EB1FC"
        onValueChange={seekToPosition}
      />
    </View>
  );
};
