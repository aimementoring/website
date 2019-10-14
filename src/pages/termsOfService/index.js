import React, { PureComponent } from 'react';
import getEntries from '../../services/craftAPI';

class TermsOfService extends PureComponent {
  state = {
    paragraph: '',
    title: '',
  };

  componentDidMount() {
    getEntries('terms').then(data => {
      this.setState({
        paragraph: data.data[0].generalPageMatrix[1].content.paragraph,
        title: data.data[0].title,
      });
    });
  }

  render() {
    const { paragraph, title } = this.state;

    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default TermsOfService
