import React from 'react'
import './index.scss'

const CtaGrid = ({ elements }) => (
  <div className="full-width-wrap">
    <div className="cta-container flex">
      {elements.map((cta, index) => {
        return (
          <div key={index} className={`item center-contents item-${index + 1}`}>
            <div className="item-contents">
              <h3>
                {cta.title}
              </h3>
              <div className="sub-item-details show-on-hover">
                <p>
                  {cta.description}
                </p>
                <div className="sub-item-details show-on-hover">
                  {cta.link.indexOf("http") !== -1 ?
                    (
                      <a className="basic-btn" href={cta.link} rel="noopener noreferrer" target="_blank">
                        {cta.button}
                      </a>
                    ) :
                    (
                      <a className="basic-btn" href={cta.link}>
                        {cta.button}
                      </a>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
)

export default CtaGrid
