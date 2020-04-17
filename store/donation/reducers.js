import { DONATION_SET_DONATE_VISIBILITY, DONATION_TOGGLE_DONATE_VISIBILITY } from '../constants';

export const initialState = {
  donateModal: false,
};

const donation = (state = initialState, { type, payload }) => {
  switch (type) {
  case DONATION_SET_DONATE_VISIBILITY:
    return {
      ...state,
      donateModal: payload,
    };
  case DONATION_TOGGLE_DONATE_VISIBILITY:
    return {
      ...state,
      donateModal: !state.donateModal,
    };
  default:
    return state;
  }
};

export default donation;
