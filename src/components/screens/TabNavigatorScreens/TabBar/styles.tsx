import {StyleSheet} from 'react-native';
//spaces
import {spaces} from '../../../spaces';

const styles = StyleSheet.create({
  containerWindow: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffffa2',
    borderColor: 'rgba(71, 120, 75, 0.292)',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
    borderTopWidth: 1,
    paddingHorizontal: 5,
  },
  TabBarTextStyle: {
    fontSize: 13,
    marginTop: 3,
    letterSpacing: 0.16,
    lineHeight: 13,
  },
  tab: {
    width: spaces.windowWidth / 5.25,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 35,
  },
});

export default styles;
