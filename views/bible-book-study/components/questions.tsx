import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { AppBar } from '@/components/ui/app-bar';
import { IconButton } from '@/components/ui/icon-button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Close as CloseIcon } from '@/components/icons/close';
import Modal from 'react-native-modal';
import { Text } from '@/components/ui/text';
import { MessageCircleQuestion as MessageCircleQuestionIcon } from '@/components/icons/message-circle-question';
import HTMLView from 'react-native-htmlview';
import { isDarkTheme } from '@/components/theme';
import { useColorScheme } from 'nativewind';
import useStore from '@/hooks/use-store';

type QuestionsProps = {
  data: any;
};

export default function Questions({ data }: QuestionsProps) {
  const { top } = useSafeAreaInsets();
  const [isOpen, setIsOpen] = useState(false);
  const fontSize = useStore((state) => state.fontSize);
  const { colorScheme } = useColorScheme();
  const textColor = isDarkTheme(colorScheme) ? 'white' : 'black';

  return (
    <>
      <Button
        variant="solid"
        iconLeft={<MessageCircleQuestionIcon size="xs" />}
        onPress={() => setIsOpen(true)}
      >
        Preguntas
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
            <Text className="font-afacad-bold text-xl ml-1">Preguntas</Text>
            <View>
              <IconButton
                isRounded
                icon={<CloseIcon />}
                onPress={() => setIsOpen(false)}
              />
            </View>
          </AppBar>
          <ScrollView
            className="px-6 py-0"
            showsVerticalScrollIndicator={false}
          >
            <HTMLView
              value={data.replace(/(\n|\t)/g, ' ').replace(/\s{2,}/g, ' ')}
              stylesheet={{
                ol: {
                  margin: 0,
                  padding: 0,
                  fontFamily: 'Afacad-Regular',
                  fontSize,
                  color: textColor,
                },
                li: {
                  padding: 0,
                  margin: 0,
                },
                h5: {
                  margin: 0,
                  padding: 0,
                  fontFamily: 'Afacad-Bold',
                },
                p: {
                  margin: 0,
                  padding: 0,
                },
              }}
            />
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}
