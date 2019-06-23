import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../index';
import VideoButton from '../../videoButton';
import { getAssetsBaseUrl } from '../../../services/craftAPI';
import './index.scss';


export default class AimeVideos extends React.PureComponent {
  state = {
    assetsUrl: '',
  }

  static propTypes = {
    settings: PropTypes.object.isRequired,
    elements: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.setState({ assetsUrl: getAssetsBaseUrl() });
  }

  render() {
    const { assetsUrl } = this.state;
    const { settings, elements, title } = this.props;
    return (
      <div className="aimeVideos">
        <div className="xs-px2 sm-px3 md-px4 lg-px4">

          <h1 className="center block">
            <span className="highlight-text highlight-text-straight aimeVideos-highlight-text">
              {title}
            </span>
          </h1>

          <div className="carousel relative xs-px3 sm-px2 md-px3 lg-px3">
            <Carousel type="aimeVideos" settings={settings}>
              {elements.map((element) => (
                <div
                  key={element.bannerImage}
                  className="flex-center flex-wrap">
                  <div className="sm-col sm-col-12 md-col-6 lg-col-6">
                    <div className="video-button grid-tile">

                      <VideoButton
                        video={element.video} />

                      <div
                        className="video-banner mt1 mb0 py2 flex items-center video-button rounded"
                        style={{ backgroundImage: `url('${assetsUrl}${element.backgroundImage}`, backgroundPosition: '0 25%', width: '100%', height: '16vh', backgroundSize: 'cover', margin: '0' }}>
                        {assetsUrl !== '' &&
                        <div className="video-banner-overlay center">
                          <img alt="" className="center mx-auto" style={{ width: '70px' }} src={`${assetsUrl}${element.bannerImage}`} />
                        </div>}
                      </div>
                    </div>
                  </div>

                  <div className="sm-col sm-col-12 md-col-6 lg-col-6">
                    <div className="pt2 sm-pl0 md-pl2 lg-pl2 xs-text-wrap">
                      <h3 className="aimeVideos-title light inline-block white f-24">{element.title}</h3>
                      <p className="f-16 light c-white block pt0 md-pt1 lg-pt1">
                        {element.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}
