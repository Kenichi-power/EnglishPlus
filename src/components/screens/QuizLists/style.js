import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

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
  backButton: {
    width: 60,
    height: 50,
    borderRadius: 12,
    backgroundColor: COLORS.error,

    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  mainContainer: {
    backgroundColor: COLORS.accent,

    borderRadius: 20,
    height: 75,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  dropdown: {
    width: (windowWidth - 150) / 2,
    height: 25,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
export default styles;
