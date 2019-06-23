import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Logo from './logo';
import TalentMobileMenu from '../mobileMenu/talentMobileMenu';
import { TALENT_HEADER_MENU_ITEMS } from '../../constants';
import './index.scss';

class TalentHeader extends PureComponent {
  state = {
    showFirstHeader: !this.props.location.hash && !this.props.location.search,
    hash: this.props.location.hash ? this.props.location.hash.toLowerCase() : '',
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.hash.toLowerCase() !== this.state.hash) {
      this.setState({
        showFirstHeader: (!nextProps.location.hash || nextProps.location.hash === '#undefined') && !nextProps.location.search,
        hash: this.props.location.hash ? this.props.location.hash.toLowerCase() : '',
      });
    }
  }

  handleTalentItemClicked = (item) => (e) => {
    e.preventDefault();
    this.props.handleTalentItemClicked(item);
  }

  renderCustomHeader = (secondHeaderClasses) => {
    const { handleTalentItemClicked } = this.props;
    return (
      <div className={`container clearfix flex items-center ${secondHeaderClasses}`}>
        <div className="sm-col align-middle flex">
          <Logo />
        </div>
        <nav id="nav-talent" className="nav-talent nav menu-links sm-col-right ml-auto">
          <ul className="list-reset">
            {TALENT_HEADER_MENU_ITEMS.map(headerItem => {
              const item = headerItem.replace(' ', '');
              return (
                <li className="inline-block relative" onClick={this.handleTalentItemClicked(item)} key={item}>
                  {`#${item.toLowerCase()}` === this.state.hash
                    ? <button className="nav-btn active-item link-button">{headerItem}</button>
                    : <button className="nav-btn link-button">{headerItem}</button>
                  }
                </li>
              )
            })}
            <li className="inline-block">
              <Link className="donate-nav-btn register-nav-btn" to="/seatontheplane#register" onClick={this.handleTalentItemClicked('register')}>Register</Link>
            </li>
          </ul>
        </nav>
        <TalentMobileMenu
          handleTalentItemClicked={handleTalentItemClicked}
          hash={this.state.hash} />
      </div>
    );
  }

  render() {
    const { showFirstHeader } = this.state;
    const firstHeaderClasses = classNames({
      isHidden: !showFirstHeader,
    });
    const secondHeaderClasses = classNames({
      isHidden: showFirstHeader,
    });
    return (
      <div className="talent-header-box">
        <div className={`flex flex-column items-center py2 ${firstHeaderClasses}`} />
        {this.renderCustomHeader(secondHeaderClasses)}
      </div>
    );
  }
}

TalentHeader.propTypes = {
  location: PropTypes.object.isRequired,
  handleTalentItemClicked: PropTypes.func.isRequired,
};

export default TalentHeader;
