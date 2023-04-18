import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffffd7',
  },
  mainText: {
    fontSize: 40,
    fontWeight: '900',
    marginTop: 300,
    color: COLORS.primary,
    fontFamily: 'Arial',
  },
  secondText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '800',
  },

  gradient: {
    borderRadius: 40,
    height: 60,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
    backgroundColor: COLORS.primary,
  },
});
export default styles;
