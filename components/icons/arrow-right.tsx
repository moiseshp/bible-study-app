import { Path } from 'react-native-svg';
import { IconProps, SVGIcon } from './svg-icon';

const ArrowRight: React.FC<IconProps> = (props) => {
  return (
    <SVGIcon {...props}>
      <Path d="M5 12h14" />
      <Path d="m12 5 7 7-7 7" />
    </SVGIcon>
  );
};

export default ArrowRight;
