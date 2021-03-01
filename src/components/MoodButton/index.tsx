import React from 'react';
import {Pressable, View, Text} from 'react-native';

import styles from './styles';
// @ts-ignore
import Check from '../../assets/img/check.svg';

interface IProps {
  onPress?: (index: number | undefined) => void;
  index?: number;
  isSelected?: boolean;
  isCurrent?: boolean;
  text: string;
  children?: React.ReactNode;
}

export const MoodButton = ({
  onPress,
  index,
  isSelected,
  children,
  text,
  isCurrent,
}: IProps) => {
  return (
    <View style={styles.optionWrapper}>
      <Pressable
        onPress={() => onPress?.(index)}
        style={[
          styles.optionContainer,
          isSelected && styles.optionContainerSelected,
        ]}>
        {children}
      </Pressable>
      {isCurrent && (
        <View style={styles.checkContainer}>
          <Check />
        </View>
      )}
      <Check />
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};
