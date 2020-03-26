import { GLOBAL_SET_DONATE_VISIBILITY, GLOBAL_TOGGLE_DONATE_VISIBILITY } from '../constants';

export const initialState = {
  donateModal: false,
};

const general = (state = initialState, { type, payload }) => {
  switch (type) {
  case GLOBAL_SET_DONATE_VISIBILITY:
    return {
      ...state,
      donateModal: payload,
    };
  case GLOBAL_TOGGLE_DONATE_VISIBILITY:
    return {
      ...state,
      donateModal: !state.donateModal,
    };
  default:
    return state;
  }
};

export default general;
