import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetsBaseUrl } from '../../services/craftAPI';
import './index.scss';


export default class IntroPanelHomepage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      assetsUrl: '',
    }
    this.sectionRefs = {};
  }

  componentDidMount() {
    this.setState({ assetsUrl: getAssetsBaseUrl() });
  }

  render() {
    const { assetsUrl } = this.state;

    return (
      <div className="full-width-wrap content-panel home-intro-panel">
        <div className="scratch-overlay-wrapper top-scratch" />
        <div className="lg-wrap sm-col-12 md-col-10 mx-auto">
          <div className="home-intro-panel--inner">
            <div className="sm-col-12 sm-col-6 pr2">
              <h1 className="intro-subheading mb3">
                <span className="highlight-text highlight-text-straight highlight-text--second-panel c-black">
                  <em className="c-brand-primary">
                    Imagine this
                  </em>
                </span>
              </h1>
              <div className="intro-sub-text">
                <p className="f-16 light c-black">
                  Imagine a day when you heard from kids whom society had silenced. Imagine a day when you heard from a movement of youngsters rising up in classrooms across the world to defy the stereotypes that hold them back. Imagine a day when there was a seat at the world’s table for them to speak and be heard. <strong>Imagine AIME Hoodie Day, July 12th, 2019.</strong>
                </p>
                <p><Link to="/positions/recAGh59K1mJLt4Xl/Hoodie-Day-Apparel-Ambassador" className="basic-btn bold bg-brand-primary c-white my3">Find out how you can get involved</Link></p>
              </div>
            </div>
            <div className="sm-col-12 sm-col-6">
              <img alt="" className="center mx-auto mt2" src={`${assetsUrl}/assets/images/hoodie_day/installation_art.png`} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
