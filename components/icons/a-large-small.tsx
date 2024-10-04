import { Path } from 'react-native-svg';
import { IconProps, SVGIcon } from './svg-icon';

export const ALargeSmall: React.FC<IconProps> = (props) => {
  return (
    <SVGIcon {...props}>
      <Path d="M21 14h-5" />
      <Path d="M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" />
      <Path d="M4.5 13h6" />
      <Path d="m3 16 4.5-9 4.5 9" />
    </SVGIcon>
  );
};
