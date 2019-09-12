import React, { useState, useEffect } from 'react';
import HoodedScholarForm from '../../components/eoiForm';
import { uploadCustomEOI } from '../../services/portalApi';
import { firstCharacterToUpperCaseAndSpacesForDivision } from '../../utils/utilities';
import { eoiData } from './data.js';
import './dynamicEOI.scss';

const DynamicEOI = ({ match, history }) => {
  const [tableName, setTableName] = useState('');
  const [title, setTitle] = useState('Expression of Interest!');
  const [subTitle, setSubTitle] = useState('Please complete your data');
  const [img, setImg] = useState('');
  const eoiPages = Object.keys(eoiData);

  useEffect(() => {
    window.scrollTo(0, 0);
    const preTableName = match.params.tableName;
    const tableNameToSave = firstCharacterToUpperCaseAndSpacesForDivision(preTableName, '-');
    setTableName(tableNameToSave);
    const data = eoiData[preTableName];
    if (data) {
      if (data.title) {
        setTitle(data.title);
      }
      if (data.subTitle) {
        setSubTitle(data.subTitle);
      }
      if (data.img) {
        setImg(data.img);
      }
    }
  }, []);

  return (
    <div>
      <div
        className="hero-banner--default hero-banner--jobs full-width-wrap"
        style={img ? { backgroundImage: `url(${img})` } : {}}
      >
        <div className="flex flex-wrap items-center">
          <div className="banner-wrapper subpage-banner center pt3 title-margin">
            <h1>
              <span className="highlight-text">
                <em>
                  {title}
                  <br />
                </em>
              </span>
              <span className="sm-col-2 mx-auto block pt1 border-bottom border-gradient" />
            </h1>
          </div>
          <div className="wrap mx-auto center c-white pb4 title-margin">
            <p className="bold feature-font-family pb2 mx-auto sm-col-8">{subTitle}</p>
          </div>
        </div>
      </div>

      <div className="padding-custom-form">
        <HoodedScholarForm
          history={history}
          uploadData={uploadCustomEOI}
          tableName={tableName}
          showBeAFriendCheckbox
        />
      </div>
      {/* to make the deploy  */}
      <div className="display-none">
        {eoiPages && (
          <div>
            {eoiPages.map(eoiPage => (
              <a href={`/eoi/${eoiPage}`} key={eoiPage}>
                hidden link
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicEOI;
