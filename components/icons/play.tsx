import { Polygon } from 'react-native-svg';
import { IconProps, SVGIcon } from './svg-icon';

export const Play: React.FC<IconProps> = (props) => {
  return (
    <SVGIcon {...props}>
      <Polygon points="6 3 20 12 6 21 6 3" />
    </SVGIcon>
  );
};
