import { AArrowDown as AArrowDownIcon } from '@/components/icons/a-arrow-down';
import { AArrowUp as AArrowUpIcon } from '@/components/icons/a-arrow-up';
import { ALargeSmall as ALargeSmallIcon } from '@/components/icons/a-large-small';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Text } from '@/components/ui/text';
import useStore from '@/hooks/use-store';
import { useState } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

export default function FontSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const incrementFontSize = useStore((state) => state.incrementFontSize);
  const decrementFontSize = useStore((state) => state.decrementFontSize);

  return (
    <>
      <IconButton
        isRounded
        variant="solid"
        icon={<ALargeSmallIcon size="xs" />}
        onPress={() => setIsOpen(true)}
      />
      <Modal
        isVisible={isOpen}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        statusBarTranslucent
        className="m-0"
        useNativeDriverForBackdrop
        onBackdropPress={() => setIsOpen(false)}
        onSwipeComplete={() => setIsOpen(false)}
        backdropOpacity={0.3}
        swipeDirection="down"
        coverScreen
      >
        <View className="h-auto bottom-0 absolute left-0 right-0 bg-white dark:bg-zinc-950 rounded-t-lg p-6">
          <Text className="font-afacad-bold mb-2">
            Modificar tamaño del texto
          </Text>
          <View className="flex flex-row space-x-4">
            <Button
              variant="solid"
              className="flex-1"
              onPress={decrementFontSize}
            >
              <AArrowDownIcon />
            </Button>
            <Button
              variant="solid"
              className="flex-1"
              onPress={incrementFontSize}
            >
              <AArrowUpIcon />
            </Button>
          </View>
        </View>
      </Modal>
    </>
  );
}
