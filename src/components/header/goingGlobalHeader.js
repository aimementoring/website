import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
// import MyContext from '../../layouts/Context';
import styles from './index.scss';

const GoingGlobalHeader = () => {
  //const { imaginationDeclarationNumber } = useContext(MyContext);

  return (
    <div className="talentHeaderBox">
      <div className="navMicrosite">
        <div className="logoContainer">
          <Logo />
        </div>
        <nav id="nav-microsite" className="navMenuLinks">
          <span className="micrositeNavMsg">
            {/* <strong>{imaginationDeclarationNumber}</strong> */}
            {' '}
People have pledged
          </span>
          <Link to="/" className="navLink">
            Pledge
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default GoingGlobalHeader;
