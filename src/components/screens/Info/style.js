import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

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
});
export default styles;
