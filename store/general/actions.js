/* eslint-disable import/prefer-default-export */
import { GLOBAL_SET_DONATE_VISIBILITY, GLOBAL_TOGGLE_DONATE_VISIBILITY } from '../constants';

export const showDonateModal = (visible) => (dispatch) => {
  dispatch({
    type: GLOBAL_SET_DONATE_VISIBILITY,
    payload: visible,
  });
};

export const hideDonateModal = (visible) => (dispatch) => {
  dispatch({
    type: GLOBAL_SET_DONATE_VISIBILITY,
    payload: visible,
  });
};

export const toggleDonateModal = () => (dispatch) => {
  dispatch({
    type: GLOBAL_TOGGLE_DONATE_VISIBILITY,
  });
};
