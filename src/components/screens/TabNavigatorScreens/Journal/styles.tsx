import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },
  calendar: {
    height: 60,
    justifyContent: 'center',
  },
  dateItem: {
    padding: 11.5,
    borderRadius: 20,
    marginHorizontal: 5,
    justifyContent: 'center',
  },

  dateText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  selectedDateText: {
    color: 'red',
  },
})
export default styles
