import React from 'react';
import {Pressable, Text} from 'react-native';

import styles from './styles';

interface IProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export const CustomButton = ({title, onPress, disabled}: IProps) => (
  <Pressable
    disabled={disabled}
    onPress={onPress}
    style={[styles.container, styles.active, disabled && styles.inactive]}>
    <Text style={styles.title}>{title}</Text>
  </Pressable>
);
