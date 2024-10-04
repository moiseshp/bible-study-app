import { supabase } from '@/libs/supabase';
import { useQuery } from '@tanstack/react-query';
import camelcaseKeys from 'camelcase-keys';

export function useReadingPlan({ date }: { date: string }) {
  return useQuery({
    queryKey: ['READING_PLAN', date],
    queryFn: () => fetchReadingPlan(date),
    enabled: !!date,
  });
}

async function fetchReadingPlan(date: string) {
  const { data, error }: any = await supabase
    .rpc('get_reading_plan', {
      input_plan: 'la-biblia-cronologica',
      input_date: date,
    })
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  const response = camelcaseKeys(data);

  return {
    date: response?.date,
    biblicalOutline: response?.biblicalOutline,
    questions: response?.questions,
    planSlug: response?.planSlug,
    devotional: {
      title: response?.devotionalTitle,
      author: response?.devotionalAuthor,
      // audioSource: response?.devotionalAudioSource,
      audioSource:
        'https://file-examples.com/storage/fe36b23e6a66fc0679c1f86/2017/11/file_example_MP3_700KB.mp3',
      verse: response?.devotionalVerse,
      content: response?.devotionalContent,
    },
    chapter: {
      bookAbrev: response?.chapterBookAbrev,
      book: response?.chapterBook,
      verses: response?.chapterVerses,
      chapter: response?.chapterChapter,
      // audioSource: response?.chapterAudioSource,
      audioSource:
        'https://file-examples.com/storage/fe36b23e6a66fc0679c1f86/2017/11/file_example_MP3_700KB.mp3',
      version: response?.chapterVersion,
      numChapters: response?.chapterNumChapters,
    },
  };
}
