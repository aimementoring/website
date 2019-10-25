import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TalentHeader from './talentHeader';
import GoingGlobalHeader from './goingGlobalHeader';
import { HEADER_MENU_ITEMS } from '../../constants';
import MenuItem from './menuItem';
import Logo from './logo';
import MobileMenu from '../mobileMenu';
import './index.scss';

class Header extends PureComponent {
  state = {
    headerState: `header-transparent ${(this.props.location.pathname.indexOf('/hooded-scholar') > -1) && 'do-not-display'}`,
    assetsUrl: '',
    countryOptions: [],
    isTalentPage: (this.props.location.pathname.indexOf('/seatontheplane') > -1),
    isStudentChapterPage: (this.props.location.pathname.indexOf('/hooded-scholar') > -1),
    isGoingGlobal: (this.props.location.pathname.indexOf('/going-global') > -1),
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        isTalentPage: (nextProps.location.pathname.indexOf('/seatontheplane') > -1),
        isStudentChapterPage: (nextProps.location.pathname.indexOf('/hooded-scholar') > -1),
        isGoingGlobal: (nextProps.location.pathname.indexOf('/going-global') > -1),
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getBeAMentorLink = () => {
    return '/be-a-mentor';
  }

  handleTalentItemClicked = (item) => {
    const { history, location } = this.props;
    const hashtag = item.replace(' ', '').toLowerCase();
    history.push(`/seatontheplane${location.search}#${hashtag}`);
  }

  handleScroll = () => {
    const { isStudentChapterPage } = this.state;
    const newClass = window.scrollY === 0 ? `header-transparent ${isStudentChapterPage && 'do-not-display'}` : 'header-filled';

    this.setState({ headerState: newClass });
  }

  handleStudentChapterItemClicked = (item) => {
    const { history, location } = this.props;
    const hashtag = item.replace(' ', '').toLowerCase();
    history.push(`/hooded-scholar${location.search}#${hashtag}`);
  }

  handleCountryChange = country => e => {
    e.preventDefault();
    this.changeCountrySelected(country);
  }

  changeCountrySelected = country => {
    this.setState({
      countrySelected: country.handle,
    });
    this.props.history.push(country.path);
  }

  render() {
    const {
      headerState,
      isTalentPage,
      isGoingGlobal
    } = this.state;
    return (
      <div>
        <header className={`${headerState} site-header`}>
          <div>
            {isTalentPage
              ? <TalentHeader
                location={this.props.location}
                handleTalentItemClicked={this.handleTalentItemClicked} />

              : isGoingGlobal ? (
                <GoingGlobalHeader />
              ) : (
                <div className="container clearfix p3 flex items-center">
                  <div className="sm-col align-middle flex">
                    <Logo />
                  </div>
                  <nav id="nav" className="nav menu-links sm-col-right ml-auto">
                    <ul className="list-reset">
                      {HEADER_MENU_ITEMS.map((item) => <MenuItem key={item.title.replace(/\s/g, "-")} {...item} />)}
                      <li className="inline-block relative header-link--with-submenu">
                        <Link className="nav-btn" to="/contact">Get in touch</Link>
                      </li>
                      <li className="inline-block">
                        <a className="nav-btn" target="_blank" rel="noopener noreferrer" href="https://shop.aimementoring.com/">Shop</a>
                      </li>
                      <li className="inline-block">
                        <Link className="nav-btn" to="/donate">Donate</Link>
                      </li>
                    </ul>
                  </nav>
                  <MobileMenu />
                </div>
              )
            }
          </div>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Header;
