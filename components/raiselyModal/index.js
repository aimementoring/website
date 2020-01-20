import React from 'react';
import PropTypes from 'prop-types';

const RaiselyModal = ({ campaign }) => (
  <div id="raiselyModal" className="raisely-modal">
    <div className="raisely-iframe">
      <i className="closeRaiselyModal material-icons raisely-iframe--desktop-close">close</i>
      <iframe
        title="raisely-iframe"
        src={`https://${campaign}.raisely.com/embed/`}
        width="480"
        height="512"
      />
      <span className="closeRaiselyModal raisely-iframe--mobile-close">No, thanks</span>
    </div>
  </div>
);

RaiselyModal.propTypes = {
  campaign: PropTypes.string,
};

RaiselyModal.defaultProps = {
  campaign: 'aimeforafricanaustraliankids',
};

export default RaiselyModal;
