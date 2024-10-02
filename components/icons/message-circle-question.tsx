import { Path } from 'react-native-svg';
import { IconProps, SVGIcon } from './svg-icon';

export const MessageCircleQuestion: React.FC<IconProps> = (props) => {
  return (
    <SVGIcon {...props}>
      <Path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <Path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <Path d="M12 17h.01" />
    </SVGIcon>
  );
};
