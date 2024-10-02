import { Path } from 'react-native-svg';
import { IconProps, SVGIcon } from './svg-icon';

export const Close: React.FC<IconProps> = (props) => {
  return (
    <SVGIcon {...props}>
      <Path d="M18 6 6 18" />
      <Path d="m6 6 12 12" />
    </SVGIcon>
  );
};
