import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  optionContainer: {
    padding: 15,
    borderWidth: 2,
    borderColor: '#FF558B',
    borderRadius: 100,
  },
  optionContainerSelected: {
    backgroundColor: '#FF558B',
  },
  optionWrapper: {
    alignItems: 'center',
    width: 64,
    marginHorizontal: 15,
  },
  container: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  title: {
    color: 'black',
    fontSize: 10,
    textAlign: 'center',
    paddingTop: 5,
  },
  checkContainer: {
    backgroundColor: '#3FC27B',
    width: 18,
    height: 18,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 47,
  },
});
