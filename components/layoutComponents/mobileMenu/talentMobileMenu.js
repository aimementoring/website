import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Anchor from '../../common/link';
import { getAssetsBaseUrl } from '../../../services/craftAPI';
import { TALENT_HEADER_MENU_ITEMS } from '../../../constants';
import './index.scss';

class TalentMobileMenu extends React.Component {
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

  handleTalentItemClicked = (item) => (e) => {
    e.preventDefault();
    this.setState({ showNavMenu: false }, () => {
      this.props.handleTalentItemClicked(item);
    });
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
            <i id="mobileMenuClose" className="mobileMenuClose material-icons c-white cursor icon-close" onClick={this.handleMenu(false)}>close</i>
          </div>
          <ul className="overflow-scroll list-reset pl3 pb3 pt2 flex flex-column items-start flex-auto">
            {TALENT_HEADER_MENU_ITEMS.map(headerItem => {
              const item = headerItem.replace(' ', '');
              return (
                <li className="py2" onClick={this.handleTalentItemClicked(item)} key={item}>
                  {`#${item.toLowerCase()}` === this.props.hash
                    ? <Anchor className="text-decoration-none f-18 feature-font-family c-white active" to="/">{headerItem}</Anchor>
                    : <Anchor className="text-decoration-none f-18 feature-font-family c-white" to="/">{headerItem}</Anchor>}
                </li>
              )
            })}
            <li className="py2" onClick={this.handleTalentItemClicked('register')}>
              {`#register` === this.props.hash
                ? <Anchor className="text-decoration-none f-18 feature-font-family c-white active" to="/">Register</Anchor>
                : <Anchor className="text-decoration-none f-18 feature-font-family c-white" to="/">Register</Anchor>}
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

TalentMobileMenu.propTypes = {
  handleTalentItemClicked: PropTypes.func.isRequired,
  hash: PropTypes.string.isRequired,
};

export default TalentMobileMenu;
