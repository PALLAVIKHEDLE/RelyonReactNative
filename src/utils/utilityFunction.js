import {Dimensions} from 'react-native';
import Toast from 'react-native-root-toast';

// Base sizes are based on standard ~5" screen mobile device
const BASE_WIDTH = 350;
const BASE_HEIGHT = 680;

const {width, height} = Dimensions.get('window');

const ResponsiveWidth = size => (width / BASE_WIDTH) * size;

const ResponsiveHeight = size => (height / BASE_HEIGHT) * size;

const ResponsiveSize = (size, factor = 0.5) =>
  size + (ResponsiveWidth(size) - size) * factor;

export {ResponsiveWidth, ResponsiveHeight, ResponsiveSize};

export const showToast = (msg, backgroundColor) => {
  const toast = Toast.show(msg, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: backgroundColor,
  });
  return toast;
};
