import { Fragment } from 'react';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';

type BibleTextProps = {
  data: any;
};

export const BibleText: React.FC<BibleTextProps> = ({ data }) => {
  return (
    <>
      <Text className="mb-1 text-2xl font-afacad-bold uppercase">
        {data.book}
      </Text>
      <Text className="text-6xl font-afacad-bold">{data.chapter}</Text>
      <Text className="text-lg">
        {data.verses.map((item: any) => (
          <Fragment key={item.number}>
            {item.study && (
              <Text className="font-afacad-bold">{item.study + '\n'}</Text>
            )}
            <Text>
              <Text className="text-zinc-500">
                {'\u00A0\u00A0' + item.number + '\u00A0\u00A0'}
              </Text>
              {item.verse}
            </Text>
          </Fragment>
        ))}
      </Text>
    </>
  );
};
