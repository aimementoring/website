import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Logo from './logo';
import './index.scss';

class StudentChapterHeader extends PureComponent {
  state = {
    showFirstHeader: !this.props.location.hash && !this.props.location.search,
    hash: this.props.location.hash ? this.props.location.hash.toLowerCase() : '',
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.hash.toLowerCase() !== this.state.hash) {
      this.setState({
        showFirstHeader: (!nextProps.location.hash || nextProps.location.hash === '#undefined') && !nextProps.location.search,
        hash: this.props.location.hash ? this.props.location.hash.toLowerCase() : '',
      })
    }
  }

  handleStudentChapterItemClicked = (item) => (e) => {
    e.preventDefault();
    this.props.handleStudentChapterItemClicked(item);
  }

  renderCustomHeader = (secondHeaderClasses) => {
    return (
      <div className={`container flex items-center justify-between student-header-container ${secondHeaderClasses}`}>
        <div className="sm-col align-middle flex student-chapter-aime-log block">
          <Logo />
        </div>
        {this.props.location.pathname.indexOf('/fam-details') === -1 &&
          <div className="countDown-container countDown-container-inline">
            <li className="inline-block">
              <Link className="donate-nav-btn register-nav-btn" to="/hooded-scholar#register">SIGN ME UP</Link>
            </li>
          </div>
        }
      </div>
    );
  }

  render() {
    const { showFirstHeader } = this.state;
    const secondHeaderClasses = classNames({
      isHidden: showFirstHeader,
    });
    return (
      <div className="studentChapter-header-box">
        {this.renderCustomHeader(secondHeaderClasses)}
      </div>
    );
  }
}

StudentChapterHeader.propTypes = {
  location: PropTypes.object.isRequired,
  handleStudentChapterItemClicked: PropTypes.func.isRequired,
};

export default StudentChapterHeader;
