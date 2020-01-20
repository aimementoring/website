import React, { useState, useEffect } from 'react';
import Layout from '../../hocs/basicLayout';
import { getEntries } from '../../services/craftAPI';

const TermsAndConditions = () => {
  const [paragraph, setParagraph] = useState('');
  const [title, setTitle] = useState('');

  const fetchTermsAndConditions = async () => {
    const data = await getEntries('terms');
    setParagraph(data.data[0].generalPageMatrix[1].content.paragraph);
    setTitle(data.data[0].title);
  };

  useEffect(() => {
    fetchTermsAndConditions();
  }, []);

  return (
    <Layout>
      <div style={{ height: '117px', backgroundColor: 'black' }} />
      <div className="matrix-general">
        <div className="wrap-md mb0 md-mb3 lg-mb3 clearfix">
          <span className="line above" />
          <h1 className="above center c-black w100">{title}</h1>
        </div>
        <div className="wrap-md">
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: paragraph }} />
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;
