import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Logo from './logo'
import Anchor from '../../common/link'
import './index.scss'

const StudentChapterHeader = ({ location }) => {
  const [showFirstHeader, setShowFirstHeader] = useState(!location.hash && !location.search)

  useEffect(() => {
    setShowFirstHeader((!location.hash || location.hash === '#undefined') && !location.search)
  }, [location.hash])

  const secondHeaderClasses = classNames({
    isHidden: showFirstHeader,
  })
  return (
    <div className="studentChapter-header-box">
      <div className={`container flex items-center justify-between student-header-container ${secondHeaderClasses}`}>
        <div className="sm-col align-middle flex student-chapter-aime-log block">
          <Logo />
        </div>
        {location.pathname.indexOf('/fam-details') === -1 &&
          <div className="countDown-container countDown-container-inline">
            <li className="inline-block">
              <Anchor className="donate-nav-btn register-nav-btn" to="/hooded-scholar#register">SIGN ME UP</Anchor>
            </li>
          </div>
        }
      </div>
    </div>
  )
}

StudentChapterHeader.propTypes = {
  location: PropTypes.object.isRequired,
}

export default StudentChapterHeader
