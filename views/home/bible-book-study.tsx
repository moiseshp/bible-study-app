import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { AppBar } from '@/components/ui/app-bar';
import { IconButton } from '@/components/ui/icon-button';
import { ArrowRight as ArrowRightIcon } from '@/components/icons/arrow-right';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Close as CloseIcon } from '@/components/icons/close';
import { BibleText } from '@/components/ui/bible-text';
import { AudioPlayer } from '@/components/ui/audio-player';
import { GradientBox } from '@/components/ui/gradient-box';
import Modal from 'react-native-modal';
import useStore from '@/hooks/use-store';
import Questions from './questions';
import FontSettings from './font-settings';

type BibleBookStudyProps = {
  data: any;
};

export default function BibleBookStudy({ data }: BibleBookStudyProps) {
  const { top } = useSafeAreaInsets();
  const [isOpen, setIsOpen] = useState(false);
  const { questions, chapter } = data;
  const fontSize = useStore((state) => state.fontSize);

  return (
    <>
      <Button
        variant="outlined"
        iconRight={<ArrowRightIcon size="xs" />}
        onPress={() => setIsOpen(true)}
      >
        Leer el texto completo
      </Button>
      <Modal
        isVisible={isOpen}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        statusBarTranslucent
        className="m-0"
      >
        <View
          className="flex-1 bg-white dark:bg-zinc-900"
          style={{ paddingTop: top }}
        >
          <AppBar>
            <View className="flex flex-row space-x-2 items-center">
              <ThemeToggle />
              {questions && (
                <View>
                  <Questions data={questions} />
                </View>
              )}
              <View>
                <FontSettings />
              </View>
            </View>
            <IconButton
              isRounded
              icon={<CloseIcon />}
              onPress={() => setIsOpen(false)}
            />
          </AppBar>
          <ScrollView className="p-6" showsVerticalScrollIndicator={false}>
            {chapter.book && (
              <>
                <BibleText data={chapter} styles={{ fontSize }} />
                <View className="h-40" />
              </>
            )}
          </ScrollView>
          {chapter.audioSource && (
            <GradientBox className="absolute bottom-0 w-full h-40 px-6 pb-6 flex flex-row items-end">
              <AudioPlayer source={chapter.audioSource} mode="classic" />
            </GradientBox>
          )}
        </View>
      </Modal>
    </>
  );
}
