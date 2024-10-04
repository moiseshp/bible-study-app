import { AppBar } from '@/components/ui/app-bar';
import { BibleText } from '@/components/ui/bible-text';
import { GradientBox } from '@/components/ui/gradient-box';
import { Text } from '@/components/ui/text';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { getDateFromString } from '@/libs/dates';
import { useReadingPlan } from '@/services/getReadingPlan';
import { useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import BibleBookStudy from '../bible-book-study';
import { DevotionalCard } from './components/devotional-card';
import { Signature } from '@/components/ui/signature';
import { BottomNavigation } from './components/bottom-navigation';
import { Album as AlbumIcon } from '@/components/icons/album';

export default function Home() {
  const [currentDate, setCurrentDate] = useState(
    getDateFromString().format('YYYY-MM-DD'),
  );
  const { data, error, isLoading } = useReadingPlan({
    date: currentDate,
  });

  if (isLoading) {
    return <ActivityIndicator size="large" color="red" />;
  }

  if (error) {
    return <Text>Lo sentimos hubo un error :(</Text>;
  }

  return (
    <View className="flex-1">
      <AppBar isFixed>
        <View className="flex flex-row gap-x-3">
          <AlbumIcon size="lg" />
          <Text className="text-xl uppercase font-afacad-bold">
            Devocionales Lince
          </Text>
        </View>
        <ThemeToggle />
      </AppBar>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-6">
          <Text className="mb-4">
            {getDateFromString(currentDate).format('dddd DD [de] MMM YYYY')}
          </Text>
          <View className="mb-8">
            <Text className="mb-4 border-b border-t border-zinc-700 py-3 text-xl uppercase">
              Lectura BÍBLICA DEL DÍA
            </Text>
            {data?.chapter.chapter && (
              <>
                <View className="max-h-96 overflow-hidden">
                  <BibleText data={data.chapter} />
                </View>
                <GradientBox className="flex h-32 -mt-32 flex-row items-end">
                  <BibleBookStudy data={data} />
                </GradientBox>
              </>
            )}
          </View>

          {data?.devotional.title && <DevotionalCard data={data.devotional} />}
          <View className="my-6 flex flex-row justify-center w-full">
            <Signature />
          </View>
        </View>
      </ScrollView>
      <BottomNavigation date={currentDate} onDateChange={setCurrentDate} />
    </View>
  );
}
