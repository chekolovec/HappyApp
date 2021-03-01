import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    padding: 15,
    paddingTop: 25,
    fontSize: 16,
    color: '#454A52',
    fontWeight: '500',
  },
  sliderContainer: {
    paddingHorizontal: 15,
  },
  moodWrapper: {
    borderRightWidth: 1,
    borderRightColor: '#EEEEEE',
  },
  infoContainer: {
    flexDirection: 'row',
    paddingRight: 15,
  },
  indicatorsWrapper: {
    paddingLeft: 18,
    flex: 1,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 10,
  },
  indicatorPin: {
    borderWidth: 3,
    borderRadius: 10,
    marginRight: 8,
    marginTop: 7,
  },
  scaleTitle: {
    color: '#454A52',
    fontSize: 14,
  },
  scaleStatus: {
    fontSize: 10,
    paddingTop: 5,
    color: '#A1A9B5',
  },
  scaleBlack: {
    color: '#000',
  },
});
