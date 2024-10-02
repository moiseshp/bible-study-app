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

type BibleBookStudyProps = {
  data: any;
};

export default function BibleBookStudy({ data }: BibleBookStudyProps) {
  const { top } = useSafeAreaInsets();
  const [isOpen, setIsOpen] = useState(false);

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
        // useNativeDriverForBackdrop
        // onBackdropPress={() => setIsOpen(false)}
        // onSwipeComplete={() => setIsOpen(false)}
        // backdropOpacity={0.3}
        // swipeDirection="down"
        // coverScreen
      >
        <View
          className="flex-1 bg-white dark:bg-zinc-900"
          style={{ paddingTop: top }}
        >
          <AppBar>
            <View>
              <ThemeToggle />
            </View>
            <View>
              <IconButton
                isRounded
                icon={<CloseIcon />}
                onPress={() => setIsOpen(false)}
              />
            </View>
          </AppBar>
          <ScrollView className="p-6" showsVerticalScrollIndicator={false}>
            {data.book && <BibleText data={data} />}
            <View className="h-40" />
          </ScrollView>
          {data.audioSource && (
            <>
              <GradientBox className="absolute bottom-0 w-full h-40 px-6 pb-6 flex flex-row items-end">
                <AudioPlayer source={data.audioSource} mode="classic" />
              </GradientBox>
            </>
          )}
        </View>
      </Modal>
    </>
  );
}
