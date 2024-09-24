import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';

function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export const AudioPlayer = () => {
  const [audio, setAudio] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  const loadAudio = async () => {
    try {
      const { sound, status }: any = await Audio.Sound.createAsync(
        {
          uri: 'https://samplelib.com/lib/preview/mp3/sample-12s.mp3',
        },
        { shouldPlay: false },
      );
      setAudio(sound);
      setDuration(status.durationMillis);
    } catch (error) {
      console.error('An error occurred: ', error);
    }
  };

  const play = async () => {
    await audio.playAsync();
    setIsPlaying(true);

    // const interval = setInterval(async () => {
    //   const status = await audio.getStatusAsync();
    //   console.info(status.positionMillis);
    //   if (status.isLoaded) {
    //     setPosition(status.positionMillis);
    //     console.info({ didJustFinish: status.didJustFinish });
    //     if (status.didJustFinish) {
    //       resetAudio();
    //       clearInterval(interval);
    //     }
    //   }
    // }, 1000);
    // return () => clearInterval(interval);
  };

  const pause = async () => {
    await audio.pauseAsync();
    setIsPlaying(false);
  };

  const skipForward = async (seconds: number) => {
    const status = await audio.getStatusAsync();
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
    console.info('resetAudio');
    await audio.stopAsync(); // Detener el audio
    await audio.setPositionAsync(0); // Reiniciar al inicio (posición 0)
    setIsPlaying(false); // Actualizar el estado a "no está reproduciendo"
    setPosition(0); // Reiniciar la posición en el estado del slider
  };

  useEffect(() => {
    loadAudio();
    return () => {
      loadAudio();
    };
  }, []);

  useEffect(() => {
    if (!audio) return;
    audio.setOnPlaybackStatusUpdate((status: any) => {
      if (status.isLoaded) {
        console.info({ isLoaded: status.isLoaded });
        setPosition(status.positionMillis);
        console.info({ didJustFinish: status.didJustFinish });
        if (status.didJustFinish) {
          resetAudio(); // Hacer reset cuando el audio termine
        }
      }
    });
  }, [position]);

  // useEffect(() => {
  //   return audio ? () => audio.unloadAsync() : undefined;
  // }, [audio]);

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         sound.unloadAsync();
  //         setAudio(null);
  //       }
  //     : undefined;
  // }, [sound]);

  return (
    <View>
      <Button
        title={isPlaying ? 'Pause' : 'Play'}
        onPress={isPlaying ? pause : play}
      />
      <Button title="Skip Forward 10s" onPress={() => skipForward(10)} />
      <Button title="Skip Backward 10s" onPress={() => skipBackward(10)} />
      <Text>position: {formatTime(position / 1000)}</Text>
      <Text>Duration: {formatTime(duration / 1000)}</Text>

      <Slider
        // style={{ width: 300, height: 40 }}
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
