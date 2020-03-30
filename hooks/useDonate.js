// useStore.js
import { useState, useEffect, useContext } from 'react';
import { ReactReduxContext } from 'react-redux';
import { toggleDonateModal } from '../store/donation/actions';

const useDonate = () => {
  const { store: { getState, dispatch, subscribe } } = useContext(ReactReduxContext);
  const [donateModalState, setDonateModalState] = useState(getState().donation.donateModal);

  // subscribe only once
  useEffect(() => subscribe(
    () => setDonateModalState(getState().donation.donateModal),
  ));

  return [donateModalState, () => dispatch(toggleDonateModal())];
};

export default useDonate;
