import { Polyline, Rect } from 'react-native-svg';
import { IconProps, SVGIcon } from './svg-icon';

export const Album: React.FC<IconProps> = (props) => {
  return (
    <SVGIcon {...props}>
      <Rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <Polyline points="11 3 11 11 14 8 17 11 17 3" />
    </SVGIcon>
  );
};
