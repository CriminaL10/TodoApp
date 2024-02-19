import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
  titleContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyContainer: {
    flex: 10,
  },
  footerContainer: {
    flex: 2,
    backgroundColor: '#37474F',
    borderRadius: 10,
    margin: 10,
  },
  saveButtonContainer: {
    flex: 2,
  },
  saveText: {
    margin: 5,
    flex: 1,
    color: 'white',
    borderBottomWidth: 1,
    borderColor: '#78909C',
    fontSize: 15,
  },

  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFA500',
  },
});
