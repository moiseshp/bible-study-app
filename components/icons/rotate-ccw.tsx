import { Path } from 'react-native-svg';
import { IconProps, SVGIcon } from './svg-icon';

export const RotateCcw: React.FC<IconProps> = (props) => {
  return (
    <SVGIcon {...props}>
      <Path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <Path d="M3 3v5h5" />
    </SVGIcon>
  );
};
