import React, {useCallback, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Carousel, CustomButton, CustomSlider} from '../../components';
import {addAnxiety, addMood, addStress} from '../../redux/actions';
import styles from './styles';

interface IStore {
  mood: number;
  anxiety: number;
  stress: number;
}

interface IProps {
  navigation: {
    navigate: (route: string) => void;
  };
}

export const SettingsScreen = ({navigation}: IProps) => {
  const {mood, anxiety, stress} = useSelector(
    ({mood, anxiety, stress}: IStore) => ({
      mood,
      anxiety,
      stress,
    }),
  );
  const [moodIndex, setMoodIndex] = useState<number>(mood || -1);
  const [stressLevel, setStressLevel] = useState<number>(stress || 1);
  const [anxietyLevel, setAnxietyLevel] = useState<number>(anxiety || 1);
  const [isChanged, setIsChanged] = useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (
      moodIndex !== mood ||
      stressLevel !== stress ||
      anxietyLevel !== anxiety
    ) {
      setIsChanged(true);
      return;
    }
    setIsChanged(false);
  }, [anxiety, anxietyLevel, mood, moodIndex, stress, stressLevel]);

  const handleSave = useCallback(() => {
    dispatch(addMood(moodIndex));
    dispatch(addAnxiety(anxietyLevel));
    dispatch(addStress(stressLevel));
    navigation.navigate('Main');
  }, [anxietyLevel, dispatch, moodIndex, navigation, stressLevel]);

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <Text style={styles.title}>Настроение</Text>
        <View>
          <Carousel
            onPress={setMoodIndex}
            value={moodIndex}
            currentIndex={mood}
          />
        </View>
        <View style={styles.sliderContainer}>
          <CustomSlider
            title="Уровень тревожности"
            onChange={setAnxietyLevel}
            value={anxietyLevel}
          />
        </View>
        <View style={styles.sliderContainer}>
          <CustomSlider
            title="Уровень стресса"
            onChange={setStressLevel}
            value={stressLevel}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Сохранить"
          onPress={handleSave}
          disabled={!isChanged}
        />
      </View>
      <SafeAreaView />
    </View>
  );
};
