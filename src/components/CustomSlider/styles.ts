import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backgroundContainer: {
    paddingHorizontal: 10,
  },
  sliderContainer: {
    position: 'relative',
  },
  bar: {
    borderWidth: 2,
    borderColor: '#E5E5E5',
    flex: 1,
    height: 0,
    marginHorizontal: 4,
    borderRadius: 4,
  },
  firstBar: {
    marginLeft: 0,
  },
  lastBar: {
    marginRight: 0,
  },
  barsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  thumbWrapper: {
    marginTop: -22,
  },
  levelText: {
    paddingBottom: 23,
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    color: '#454A52',
  },
});
