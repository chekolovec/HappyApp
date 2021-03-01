import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useSelector} from 'react-redux';

import {Carousel, MoodButton} from '../../components';
import styles from './styles';
import {icons, titles} from '../../constants';
// @ts-ignore
import EditIcon from '../../assets/img/edit.svg';

interface IProps {
  navigation: {
    navigate: (route: string) => {};
  };
}

interface IStore {
  mood: number;
  anxiety: number;
  stress: number;
}

export const MainScreen = ({navigation}: IProps) => {
  const {mood, anxiety, stress} = useSelector(
    ({mood, anxiety, stress}: IStore) => ({
      mood,
      anxiety,
      stress,
    }),
  );

  const [moodIndex, setMoodIndex] = useState<number>(mood || -1);
  const [stressLevel, setStressLevel] = useState<number>(stress || -1);
  const [anxietyLevel, setAnxietyLevel] = useState<number>(anxiety || -1);

  React.useEffect(() => {
    setAnxietyLevel(anxiety);
    setMoodIndex(mood);
    setStressLevel(stress);
  }, [anxiety, mood, stress]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Настроение</Text>
      <View>
        {moodIndex !== -1 ? (
          <View style={styles.infoContainer}>
            <View style={styles.moodWrapper}>
              <MoodButton text={icons[moodIndex].text} isSelected isCurrent>
                {icons[moodIndex].Selected}
              </MoodButton>
            </View>
            <View style={styles.indicatorsWrapper}>
              <View style={styles.indicatorContainer}>
                <View
                  style={[
                    styles.indicatorPin,
                    anxietyLevel !== -1 && {
                      borderColor: titles[anxietyLevel].color,
                    },
                  ]}
                />
                <View>
                  <Text style={styles.scaleTitle}>Тревожность</Text>
                  <Text
                    style={[
                      styles.scaleStatus,
                      anxietyLevel !== -1 && styles.scaleBlack,
                    ]}>
                    {anxietyLevel === -1
                      ? 'отсутствует'
                      : titles[anxietyLevel].title}
                  </Text>
                </View>
              </View>
              <View style={styles.indicatorContainer}>
                <View
                  style={[
                    styles.indicatorPin,
                    stressLevel !== -1 && {
                      borderColor: titles[stressLevel].color,
                    },
                  ]}
                />
                <View>
                  <Text style={styles.scaleTitle}>Стресс</Text>
                  <Text
                    style={[
                      styles.scaleStatus,
                      stressLevel !== -1 && styles.scaleBlack,
                    ]}>
                    {stressLevel === -1
                      ? 'отсутствует'
                      : titles[stressLevel].title}
                  </Text>
                </View>
              </View>
            </View>
            <Pressable onPress={() => navigation.navigate('Settings')}>
              <EditIcon width={18} height={18} />
            </Pressable>
          </View>
        ) : (
          <Carousel
            onPress={() => navigation.navigate('Settings')}
            value={moodIndex}
          />
        )}
      </View>
    </View>
  );
};
