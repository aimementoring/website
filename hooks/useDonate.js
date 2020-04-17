import { useDispatch, useSelector } from 'react-redux';
import { toggleDonateModal } from '../store/donation/actions';

const useDonate = () => {
  const donateModalState = useSelector((state) => state.donation.donateModal);
  const dispatch = useDispatch();

  return [donateModalState, () => dispatch(toggleDonateModal())];
};

export default useDonate;
