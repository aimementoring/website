// useStore.js
import { useState, useEffect, useContext } from 'react';
import { ReactReduxContext } from 'react-redux';
import { toggleDonateModal } from '../store/general/actions';

const useDonate = () => {
  const { store } = useContext(ReactReduxContext);
  const { getState, dispatch, subscribe } = store;
  const [storeState, setStoreState] = useState(getState());

  // subscribe only once
  useEffect(() => subscribe(
    () => setStoreState(getState()),
    [],
  ));

  return [storeState.general.donateModal, () => dispatch(toggleDonateModal())];
};

export default useDonate;
