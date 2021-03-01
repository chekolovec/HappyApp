export const addMoodAction = 'ADD_MOOD';
export const addAnxietyAction = 'ADD_ANXIETY';
export const addStressAction = 'ADD_STRESS';

export const addMood = (index: number | null) => {
  return {type: addMoodAction, index};
};

export const addAnxiety = (level: number | null) => {
  return {type: addAnxietyAction, level};
};

export const addStress = (level: number | null) => {
  return {type: addStressAction, level};
};
