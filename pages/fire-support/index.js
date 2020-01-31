import React from 'react';
import { getAssetsBaseUrl } from '../../services/craftAPI';
import { uploadCustomEOI } from '../../services/portalApi';
import EoiForm from '../../components/eoiForm/fireSupportForm';
import Layout from '../../hocs/basicLayout';
import styles from './styles.module.scss';

const assetsUrl = getAssetsBaseUrl();
const tableName = 'Fire Support';

const FireSupport = ({ handleReloadData }) => {
  // const { history } = this.props;

  return (
    <Layout>
      <div>
        <div />
        <div className={styles.microSite}>
          <section className={styles.sectionWrapper}>
            <div className={styles.heroPanelWrapper}>
              <h1 className={styles.pageHeroHeader}>Mentor Fire Relief Support</h1>
              <img
                src={`${assetsUrl}/assets/images/fire-support/support-hands@2x.png`}
                alt="Supporting Hands"
                style={{ width: '550px' }}
              />
              {/* <h1 className={`${styles.pageHeroHeader} ${styles.mantra}`}>
                Better Together
              </h1> */}
            </div>
          </section>

          <section className={styles.eoiSection}>
            <div className={styles.formWrapper}>
              <h4>
                Brutal fires are raging across Australia. We are calling on you
                AIME mentors, past and present, and anyone
                in the AIME network. Please volunteer your time to
                be a one-off AIME mentor,
                from today until the end of March, to support the victims of fires
                across our country.
              </h4>
            </div>
          </section>
          <section className={styles.imgSection}>
            <div className={styles.maplocayfires}>
              <p>
                AIME works in schools and communities many of which have been ravaged
                by fires up and down the eastern seaboard.
              </p>
              <img
                src={`${assetsUrl}/assets/images/fire-support/firesaimemap@2x.png`}
                alt="Fires and AIME locations map"
              />
            </div>
          </section>
          <section className={styles.eoiSection}>
            <div>
              <p>
                The following areas are most in need of our support right now:
              </p>
              <p>
                <strong>
                  Bega
                </strong>
                <br />
                <strong>
                  Batemans Bay
                </strong>
                <br />
                <strong>
                  Shoalhaven
                </strong>
                <br />
                <strong>
                  Gippsland
                </strong>
                <br />
                <strong>
                  Kalgoorlie
                </strong>
              </p>
              <p>
                Even if you are not located near one of these areas
                we’ll work out how we can get you involved. Just
                let us know your program site that you were or are
                connected with (it will make things easier for our team to coordinate),
                the dates you are free over the next two months,
                and how many hours you can commit, and we will aim to connect you
                with the organisations that need you.
              </p>
              <p>
                We cannot ignore the realities of climate change and the effects it’s
                having on our lives, no matter what the politics. The situation demands
                more, and what leaders say and do today will define if they are
                suitable for what’s to come.
              </p>
              <p>
                <mark className={styles.textHighlight}>
                  We are better together.
                </mark>
              </p>

              <EoiForm
                // history={history}
                uploadData={uploadCustomEOI}
                tableName={tableName}
                showBeAFriendCheckbox
                handleReloadData={handleReloadData}
              />
            </div>
          </section>
        </div>
      </div>
    </Layout>
    );
  };
  
  Register.propTypes = {
    handleReloadData: PropTypes.func.isRequired,
  };

  export default FireSupport;
  
