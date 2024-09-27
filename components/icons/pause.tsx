import { Rect } from 'react-native-svg';
import { IconProps, SVGIcon } from './svg-icon';

export const Pause: React.FC<IconProps> = (props) => {
  return (
    <SVGIcon {...props}>
      <Rect x="14" y="4" width="4" height="16" rx="1" />
      <Rect x="6" y="4" width="4" height="16" rx="1" />
    </SVGIcon>
  );
};
