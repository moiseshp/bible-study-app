import { Path } from 'react-native-svg';
import { IconProps, SVGIcon } from './svg-icon';

const ArrowLeft: React.FC<IconProps> = (props) => {
  return (
    <SVGIcon {...props}>
      <Path d="m12 19-7-7 7-7" />
      <Path d="M19 12H5" />
    </SVGIcon>
  );
};

export default ArrowLeft;
