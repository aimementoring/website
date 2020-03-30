import { DONATION_SET_DONATE_VISIBILITY, DONATION_TOGGLE_DONATE_VISIBILITY } from '../constants';

export const showDonateModal = (visible) => (dispatch) => {
  dispatch({
    type: DONATION_SET_DONATE_VISIBILITY,
    payload: visible,
  });
};

export const hideDonateModal = (visible) => (dispatch) => {
  dispatch({
    type: DONATION_SET_DONATE_VISIBILITY,
    payload: visible,
  });
};

export const toggleDonateModal = () => (dispatch) => {
  dispatch({
    type: DONATION_TOGGLE_DONATE_VISIBILITY,
  });
};
