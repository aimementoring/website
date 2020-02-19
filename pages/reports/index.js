import React, { PureComponent } from 'react';
import dynamic from 'next/dynamic';
import Title from 'aime-blueprint/lib/components/title';
import { getEntries } from '../../services/craftAPI';
import Layout from '../../hocs/basicLayout';

const Report = dynamic(() => import('../../components/report'));

class Reports extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
      categorySelected: 'All reports',
      categoryTitles: [],
    };
  }

  componentDidMount() {
    this.fetchReports();
  }

  fetchReports = async () => {
    let { reports } = this.state;
    if (!reports.length) {
      let categoryTitles;
      const entry = await getEntries('reports');
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
    }
  };

  getCategoryLinks = () => {
    const { categorySelected, categoryTitles } = this.state;
    return categoryTitles.map((category) => {
      const active = category === categorySelected ? 'active' : '';
      return (
        <li className="block mr2" key={category}>
          <div
            className={`filter-list ${active}`}
            onClick={this.handleCategoryChange(category)}
            onKeyPress={this.handleCategoryChange(category)}
            role="presentation"
          >
            {category}
          </div>
        </li>
      );
    });
  };

  handleCategoryChange = (newCategory) => (e) => {
    e.preventDefault();
    const { reports, categorySelected } = this.state;
    if (newCategory === categorySelected) return;
    if (newCategory === 'All reports') {
      this.setState({
        reportsToShow: reports,
        categorySelected: newCategory,
      });
      return;
    }
    const reportsToShow = reports.filter((report) => {
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
      <Layout>
        <div className="hero-banner--default full-width-wrap">
          <div className="flex flex-wrap items-center full-height">
            <div className="banner-wrapper">
              <Title type="headingLockup" className="bannerHeaderImpact" theme={process.env.REACT_APP_THEME}>
                <strong>
                  Reports
                </strong>
              </Title>
              
            </div>
          </div>
        </div>
        <section className="relative">
          {reportsToShow && (
            <div className="wrap py3">
              <div className="filter-list-container">
                <h4 className="c-brand-primary py2 f-15 px2 border border-radius mt3">Category</h4>
                <ul className="flex flex-wrap">{this.getCategoryLinks()}</ul>
              </div>
              <div className="grid reports-grid mb4">
                {reportsToShow.map((report) => <Report key={report.slug} report={report} />)}
              </div>
            </div>
          )}
        </section>
      </Layout>
    );
  }
}

export default Reports;
