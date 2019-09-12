import React, { PureComponent } from 'react';
import getEntries from '../../services/craftAPI';
import Report from '../../components/report';

export default class Reports extends PureComponent {
  state = {
    reports: [],
    categorySelected: 'All reports',
    categoryTitles: [],
  };

  componentDidMount() {
    let { reports } = this.state;
    if (!reports.length) {
      let categoryTitles;
      getEntries('reports').then(entry => {
        reports = entry.data;
        if (!reports.reportTagsTitles) {
          categoryTitles = ['All reports', 'Annual', 'Financial', 'Interim', 'Research'];
        } else {
          categoryTitles = reports.reportTagsTitles;
        }
        this.setState({
          reports,
          categoryTitles,
          reportsToShow: reports,
        });
      });
    }
  }

  getCategoryLinks = () => {
    const { categorySelected, categoryTitles } = this.state;
    return categoryTitles.map(category => {
      const active = category === categorySelected ? 'active' : '';
      return (
        <li className="block mr2" key={category}>
          <a className={`filter-list ${active}`} onClick={this.handleCategoryChange(category)}>
            {category}
          </a>
        </li>
      );
    });
  };

  handleCategoryChange = newCategory => e => {
    e.preventDefault();
    const { reports, categorySelected } = this.state;
    if (newCategory === categorySelected) {
      return;
    }
    if (newCategory === 'All reports') {
      this.setState({
        reportsToShow: reports,
        categorySelected: newCategory,
      });
      return;
    }
    const reportsToShow = reports.filter(report => {
      const searchString = `${report.slug} ${report.previewText} ${report.title}`.toLowerCase();
      return searchString.indexOf(newCategory.toLowerCase()) > -1;
    });
    this.setState({
      reportsToShow,
      categorySelected: newCategory,
    });
  };

  render() {
    const { reportsToShow } = this.state;
    return (
      <React.Fragment>
        <div className="hero-banner--default hero-banner--impact full-width-wrap">
          <div className="flex flex-wrap items-center full-height">
            <div className="banner-wrapper">
              <h1>
                <span className="highlight-text">
                  <em>
                    Reports
                    <br />
                    <span className="scratch-underline">&nbsp;</span>
                  </em>
                </span>
              </h1>
            </div>
          </div>
        </div>

        <section className="relative">
          <div className="scratch-overlay-wrapper top-scratch bg-white" />

          {reportsToShow && (
            <div className="wrap py3">
              <div className="filter-list-container">
                <h4 className="c-brand-primary py2 f-15 px2 border border-radius mt3">Category</h4>
                <ul className="flex flex-wrap">{this.getCategoryLinks()}</ul>
              </div>

              <div className="grid reports-grid mb4">
                {reportsToShow.map(report => {
                  return <Report key={report.slug} report={report} />;
                })}
              </div>
            </div>
          )}
        </section>
      </React.Fragment>
    );
  }
}