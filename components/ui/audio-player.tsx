import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import { IconButton } from '@/components/ui/icon-button';
import { Play as PlayIcon } from '@/components/icons/play';
import { Pause as PauseIcon } from '@/components/icons/pause';
import { Text } from '@/components/ui/text';
import { RotateCcw as RotateCcwIcon } from '../icons/rotate-ccw';
import { RotateCw as RotateCwIcon } from '../icons/rotate-cw';

function formatTime(time: number) {
  if (!time) return '00:00';
  const position = time / 1000;
  const minutes = Math.floor(position / 60);
  const seconds = Math.floor(position % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

const DEFAULT_SLIDER_PROPS = {
  minimumValue: 0,
  step: 1,
  minimumTrackTintColor: '#3b82f6',
  maximumTrackTintColor: '#6c6c74',
  thumbTintColor: '#3b82f6',
};

const DEFAULT_SKIP_TIME = 10;

type AudioPlayerProps = {
  source: string;
  title?: string;
  mode?: 'classic' | 'mini';
  className?: string;
};

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  source,
  title = 'Sample Title',
  mode = 'mini',
  ...props
}) => {
  const [audio, setAudio] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const { style } = props as any;

  const play = async () => await audio.playAsync();
  const pause = async () => await audio.pauseAsync();

  const skipForward = async (seconds: number = DEFAULT_SKIP_TIME) => {
    const status: any = await audio.getStatusAsync();
    const newPosition = Math.min(
      status.positionMillis + seconds * 1000,
      status.durationMillis,
    );
    await audio.setPositionAsync(newPosition);
    setPosition(newPosition);
  };

  const skipBackward = async (seconds: number = DEFAULT_SKIP_TIME) => {
    const status = await audio.getStatusAsync();
    const newPosition = Math.max(status.positionMillis - seconds * 1000, 0);
    await audio.setPositionAsync(newPosition);
    setPosition(newPosition);
  };

  const seekToPosition = async (value: number) => {
    await audio.setPositionAsync(value);
    setPosition(value);
  };

  const resetAudio = async () => {
    await audio.stopAsync();
    await audio.setPositionAsync(0);
    setIsPlaying(false);
    setPosition(0);
  };

  useEffect(() => {
    if (!source) return;

    let removeAudio = new Audio.Sound();

    const loadAudio = async () => {
      try {
        const { sound, status }: any = await Audio.Sound.createAsync(
          { uri: source },
          { shouldPlay: false },
        );
        removeAudio = sound;
        setAudio(sound);
        setDuration(status.durationMillis);
      } catch (error) {
        console.error('[AUDIO_PLAYER][LOAD_AUDIO]', error);
      }
    };
    loadAudio();

    return () => {
      if (removeAudio) {
        removeAudio.stopAsync();
        removeAudio.unloadAsync();
      }
    };
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
        className="border border-zinc-600 rounded-md pl-4 pr-2 py-1"
        style={style}
      >
        <View className="flex flex-row items-center justify-between space-x-2">
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
        <Slider
          {...DEFAULT_SLIDER_PROPS}
          style={{
            marginLeft: -16,
            marginRight: -8,
            height: 26,
          }}
          maximumValue={duration}
          value={position}
          onValueChange={seekToPosition}
        />
      </View>
    );
  }

  return (
    <View className="w-full" style={style}>
      <View className="w-full">
        <Slider
          {...DEFAULT_SLIDER_PROPS}
          style={{
            marginLeft: -12,
            marginRight: -12,
          }}
          maximumValue={duration}
          value={position}
          onValueChange={seekToPosition}
        />
        <View className="flex flex-row justify-between px-1">
          <Text>{formatTime(position)}</Text>
          <View className="flex flex-row space-x-4 items-center">
            <IconButton
              isRounded
              color="transparent"
              variant="solid"
              icon={<RotateCcwIcon size="xs" />}
              onPress={() => skipBackward()}
            />
            <IconButton
              isRounded
              color="transparent"
              variant="solid"
              size="lg"
              icon={
                isPlaying ? <PauseIcon size="lg" /> : <PlayIcon size="lg" />
              }
              onPress={() => {
                isPlaying ? pause() : play();
                setIsPlaying(!isPlaying);
              }}
            />
            <IconButton
              isRounded
              color="transparent"
              variant="solid"
              icon={<RotateCwIcon size="xs" />}
              onPress={() => skipForward()}
            />
          </View>
          <Text>{formatTime(duration)}</Text>
        </View>
      </View>
    </View>
  );
};
