import { Path } from 'react-native-svg';
import { IconProps, SVGIcon } from './svg-icon';

export const Moon: React.FC<IconProps> = (props) => {
  return (
    <SVGIcon {...props}>
      <Path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </SVGIcon>
  );
};
