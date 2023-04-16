import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowContainer: {
    flex: 1,
    marginTop: 50,
    width: windowWidth,
    flexDirection: 'column',
    gap: 20,
  },
  backButton: {
    width: 60,
    height: 50,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.secondary + '40',
    backgroundColor: '#66bf39e1',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  mainContainer: {
    borderWidth: 3,
    borderColor: COLORS.secondary + '40',
    backgroundColor: '#66bf39e1',
    borderRadius: 20,
    height: 75,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
