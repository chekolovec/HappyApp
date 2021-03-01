import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import Slider from 'react-native-smooth-slider';

import styles from './styles';
import {bars, titles} from '../../constants';

interface IProps {
  title: string;
  onChange: (level: number) => void;
  value: number;
}

export const CustomSlider = ({title, onChange, value}: IProps) => {
  const renderBars = useCallback(() => {
    return (
      <View style={styles.barsContainer}>
        {bars.map(({color}, index) => (
          <View
            style={[
              styles.bar,
              index === 0 && styles.firstBar,
              index === bars.length - 1 && styles.lastBar,
              index < value && {borderColor: color},
            ]}
            key={color}
          />
        ))}
      </View>
    );
  }, [value]);

  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.levelText, {color: titles[value].color}]}>
        {titles[value].title}
      </Text>
      <View style={styles.backgroundContainer}>{renderBars()}</View>
      <View style={styles.thumbWrapper}>
        <Slider
          value={value}
          useNativeDriver={true}
          onValueChange={onChange}
          maximumValue={4}
          step={1}
          minimumTrackTintColor="transparent"
          maximumTrackTintColor="transparent"
          thumbTintColor="#0684F8"
        />
      </View>
    </View>
  );
};
