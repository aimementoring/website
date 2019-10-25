import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Logo from './logo'
import TalentMobileMenu from '../mobileMenu/talentMobileMenu'
import Anchor from '../../common/link'
import { TALENT_HEADER_MENU_ITEMS } from '../../../constants'
import './index.scss'

const TalentHeader = ({ location, handleTalentItemClicked }) => {
  const [showFirstHeader, setShowFirstHeader] = useState(!location.hash && !location.search)

  useEffect(() => {
    setShowFirstHeader((!location.hash || location.hash === '#undefined') && !location.search)
  }, [location.hash])

  const handleTalentItemAction = (item) => (e) => {
    e.preventDefault()
    handleTalentItemClicked(item)
  }

  const firstHeaderClasses = classNames({ isHidden: !showFirstHeader })
  const secondHeaderClasses = classNames({ isHidden: showFirstHeader })
  const hash = location.hash ? location.hash.toLowerCase() : ''
  return (
    <div className="talent-header-box">
      <div className={`flex flex-column items-center py2 ${firstHeaderClasses}`} />
      <div className={`container clearfix flex items-center ${secondHeaderClasses}`}>
        <div className="sm-col align-middle flex">
          <Logo />
        </div>
        <nav id="nav-talent" className="nav-talent nav menu-links sm-col-right ml-auto">
          <ul className="list-reset">
            {TALENT_HEADER_MENU_ITEMS.map(headerItem => {
              const item = headerItem.replace(' ', '');
              return (
                <li className="inline-block relative" onClick={handleTalentItemAction(item)} key={item}>
                  {`#${item.toLowerCase()}` === hash
                    ? <button className="nav-btn active-item link-button">{headerItem}</button>
                    : <button className="nav-btn link-button">{headerItem}</button>
                  }
                </li>
              )
            })}
            <li className="inline-block">
              <Anchor
                className="donate-nav-btn register-nav-btn"
                to="/seatontheplane#register"
                onClick={handleTalentItemAction('register')}
              >
                Register
              </Anchor>
            </li>
          </ul>
        </nav>
        <TalentMobileMenu
          handleTalentItemClicked={handleTalentItemClicked}
          hash={hash}
        />
      </div>
    </div>
  )
}

TalentHeader.propTypes = {
  location: PropTypes.object.isRequired,
  handleTalentItemClicked: PropTypes.func.isRequired,
}

export default TalentHeader
