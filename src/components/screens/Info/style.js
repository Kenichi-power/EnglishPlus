import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {useAppSelector} from '../../../store';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66bf39e1',
  },
  lowContainer: {
    flex: 1,
    marginTop: 50,
    width: windowWidth,
    flexDirection: 'column',
  },
  sortButton: {
    width: 100,
    height: 50,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
