import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { getAssetsBaseUrl } from '../../services/craftAPI';
import './index.scss';

class MobileMenu extends React.Component {
  state = {
    showNavMenu: false,
    assetsUrl: '',
  }

  componentDidMount() {
    this.setState({ assetsUrl: getAssetsBaseUrl() });
  }

  handleMenu = (newValue) => () => {
    this.setState({ showNavMenu: newValue })
  }

  render() {
    const { showNavMenu } = this.state;
    const mobileHeaderClasses = classNames({
      'mobile-header': true,
      active: showNavMenu,
    });

    return (
      <React.Fragment>
        <div className="sm-col-right ml-auto flex mobile-menu">
          <i id="mobileMenu" className="material-icons cursor mobile-menu-icon" onClick={this.handleMenu(true)}>menu</i>
        </div>
        <nav id="mobileHeader" className={mobileHeaderClasses}>
          <div className="flex justify-between items-center pt2 px3 pb0 sm-col-12" style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <div className="flex flex-column items-start" />
            <i id="mobileMenuClose" className="mobileMenuClose material-icons c-white cursor icon-close" onClick={this.handleMenu(false)}>close</i>
          </div>
          <ul className="overflow-scroll list-reset pl3 pb3 pt2 flex flex-column items-start flex-auto">
            <li className="py2">
              <Link
                className="text-decoration-none f-18 feature-font-family c-white active"
                onClick={this.handleMenu(false)}
                to="/">
                Home
              </Link>
            </li>
            <li className="py2">
              <Link
                className="text-decoration-none f-18 feature-font-family c-white"
                onClick={this.handleMenu(false)}
                to="/about">
                About
              </Link>
            </li>
            <li className="py2">
              <Link
                className="text-decoration-none f-18 feature-font-family c-white"
                onClick={this.handleMenu(false)}
                to="/stories">
                Stories
              </Link>
            </li>
            <li className="py2">
              <Link
                className="text-decoration-none f-18 feature-font-family c-white"
                onClick={this.handleMenu(false)}
                to="/be-a-mentor">
                Mentor
              </Link>
            </li>
            <li className="py2">
              <Link
                className="text-decoration-none f-18 feature-font-family c-white"
                onClick={this.handleMenu(false)}
                to="/contact">
                Contact
              </Link>
            </li>
            <li className="py2">
              <Link
                to="/donate"
                onClick={this.handleMenu(false)}
                className="text-decoration-none f-18 feature-font-family c-white toggleRaiselyModal">
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default MobileMenu;
