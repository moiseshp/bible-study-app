import { IconButton } from '@/components/ui/icon-button';
import { ArrowRight as ArrowRightIcon } from '@/components/icons/arrow-right';
import { ArrowLeft as ArrowLeftIcon } from '@/components/icons/arrow-left';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import {
  addSkippingSunday,
  getDateFromString,
  subtractSkippingSunday,
} from '@/libs/dates';

type BottomNavigationProps = {
  date: string;
  onDateChange: (date: string) => void;
};

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  date,
  onDateChange,
}) => {
  return (
    <>
      <View className="h-20" />
      <View className="absolute bottom-0 flex flex-row h-20 items-center bg-white px-6 shadow-xl shadow-zinc-900 dark:bg-zinc-900 dark:shadow-xl dark:shadow-zinc-100 ">
        <View className="flex flex-row h-12 justify-between items-center w-full rounded-3xl bg-zinc-100 dark:bg-zinc-800">
          <IconButton
            isRounded
            icon={<ArrowLeftIcon />}
            className="px-8 h-full bg-transparent"
            onPress={() =>
              onDateChange(
                subtractSkippingSunday(date, 1, 'day').format('YYYY-MM-DD'),
              )
            }
          />
          <View className="flex flex-1  items-center justify-center text-xl font-bold">
            <Text className="">
              {getDateFromString(date).format('ddd DD [de] MMM')}
            </Text>
          </View>
          <IconButton
            isRounded
            icon={<ArrowRightIcon />}
            className="px-8 h-full bg-transparent"
            onPress={() =>
              onDateChange(
                addSkippingSunday(date, 1, 'day').format('YYYY-MM-DD'),
              )
            }
          />
        </View>
      </View>
    </>
  );
};

export { BottomNavigation };
