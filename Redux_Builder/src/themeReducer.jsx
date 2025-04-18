import { SWITCH_THEME } from './action';

const initialState = 'light';

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
