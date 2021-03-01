import React, {useCallback} from 'react';
import {ScrollView} from 'react-native';

import styles from './styles';
import {icons} from '../../constants';
import {MoodButton} from '../';

interface IProps {
  onPress: (index: number) => void;
  value: number | null;
  currentIndex?: number;
}

export const Carousel = ({onPress, value, currentIndex}: IProps) => {
  const handlePress = useCallback(
    (index: number) => {
      onPress(index);
    },
    [onPress],
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {icons.map(({Unselected, Selected, text}, index) => {
        const isSelected = value === index;
        return (
          <MoodButton
            onPress={() => handlePress(index)}
            text={text}
            key={text}
            isCurrent={index === currentIndex}
            isSelected={isSelected}>
            {isSelected ? <Selected /> : <Unselected />}
          </MoodButton>
        );
      })}
    </ScrollView>
  );
};
