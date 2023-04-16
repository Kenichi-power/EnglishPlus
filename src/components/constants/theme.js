import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#66BF39',
  secondary: '#FFFFFF',
  accent: '#3498db',

  success: '#1E90FF',
  error: '#ff4444',

  black: '#171717',
  white: '#FFFFFF',
  background: '#66BF39',
};

export const SIZES = {
  base: 10,
  width,
  height,
};
