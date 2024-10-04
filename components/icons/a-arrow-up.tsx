import { Path } from 'react-native-svg';
import { IconProps, SVGIcon } from './svg-icon';

export const AArrowUp: React.FC<IconProps> = (props) => {
  return (
    <SVGIcon {...props}>
      <Path d="M3.5 13h6" />
      <Path d="m2 16 4.5-9 4.5 9" />
      <Path d="M18 16V7" />
      <Path d="m14 11 4-4 4 4" />
    </SVGIcon>
  );
};
