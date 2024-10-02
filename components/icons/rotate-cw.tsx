import { Path } from 'react-native-svg';
import { IconProps, SVGIcon } from './svg-icon';

export const RotateCw: React.FC<IconProps> = (props) => {
  return (
    <SVGIcon {...props}>
      <Path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
      <Path d="M21 3v5h-5" />
    </SVGIcon>
  );
};
