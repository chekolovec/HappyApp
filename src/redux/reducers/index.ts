import {addAnxietyAction, addStressAction, addMoodAction} from '../actions';

const initialState = {
  mood: -1,
  stress: 1,
  anxiety: 1,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case addMoodAction:
      return {
        ...state,
        mood: action.index,
      };
    case addStressAction:
      return {
        ...state,
        stress: action.level,
      };
    case addAnxietyAction:
      return {
        ...state,
        anxiety: action.level,
      };
    default:
      return state;
  }
};
