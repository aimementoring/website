import React from 'react';
import Select, { Option } from 'rc-select';
import PropTypes from 'prop-types';
import ProgressBar from '../progressBar';
import ProgressBarWrapper from '../progressBar/progressBarWrapper';
import './index.scss';

const Trapezoid = ({ selectedCampaign, campaigns, onCampaignChange }) => {
  const getCampaignDescription = () => {
    const {
      profile: { description },
    } = selectedCampaign;
    if (description) {
      return description.length > 600
        ? `${description.substring(0, 600)}...`
        : description;
    }
    return 'No description for this campaign';
  };

  const handleCampaignChange = (selectedCampaignName) => {
    const campaignSelected = campaigns.find((campaign) => campaign.name === selectedCampaignName);
    if (onCampaignChange) onCampaignChange(campaignSelected);
  };

  return (
    <div className="absolute-left-center donations-trapezoid flex">
      <div className="trapezoid-left-column flex flex-column items-center" />
      <div className="trapezoid-right-column flex flex-column">
        <div className="want-to-donate-title-container flex flex-column justify-end">
          <h1 className="trapezoid-title regular c-white">I want to donate to:</h1>
        </div>
        <div>
          {campaigns.length > 0 && (
            <div className="select-donation-container">
              <Select
                placeholder="Select a donation campaign"
                onChange={handleCampaignChange}
                defaultValue={selectedCampaign.name}
              >
                {campaigns.map((campaign) => (
                  <Option
                    key={`donation-select-${campaign.name}`}
                    value={campaign.name}
                    filterProp={campaign.name}
                  >
                    {campaign.name}
                  </Option>
                ))}
              </Select>
              <div className="donations-divider border" />
              <h1 className="trapezoid-title regular c-white">{selectedCampaign.name}</h1>
              <div className="donations-colour-divider" />
              <span className="trapezoid-text regular h6 line-height-3 c-white">
                {getCampaignDescription()}
              </span>
              <div className="progress-bar-container mt3 mb2">
                <ProgressBarWrapper
                  key="progress-bar-wrapper"
                  tooltipId="index"
                  size="large"
                  total={selectedCampaign.total}
                  goal={selectedCampaign.goal}
                >
                  <ProgressBar
                    key={selectedCampaign.name}
                    value={selectedCampaign.total}
                    color="#f8b049"
                    min={0}
                    max={selectedCampaign.goal}
                    name={selectedCampaign.name}
                  />
                </ProgressBarWrapper>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Trapezoid.propTypes = {
  campaigns: PropTypes.arrayOf(PropTypes.shape({})),
  selectedCampaign: PropTypes.shape({
    profile: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    goal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  onCampaignChange: PropTypes.func,
};

Trapezoid.defaultProps = {
  campaigns: [],
  selectedCampaign: null,
  onCampaignChange: () => {},
};

export default Trapezoid;
