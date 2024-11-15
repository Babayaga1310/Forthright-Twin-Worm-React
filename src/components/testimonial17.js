import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text36">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text35">
                  Forexperts Academy Pro has truly transformed my trading
                  journey. The courses are comprehensive and the resources
                  provided are invaluable. I highly recommend it to anyone
                  looking to excel in Forex trading.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text26">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text34">
                            Forex Trader
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text33">
                        I highly recommend it to anyone looking to excel in
                        Forex trading.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text29">
                            Financial Analyst
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text30">
                        The expertise of the instructors at Forexperts Academy
                        Pro is unmatched. I have gained a deeper understanding
                        of Forex trading concepts and strategies that have
                        significantly improved my performance in the market.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            David Williams
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text31">
                            Investment Consultant
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text24">
                        Enrolling in Forexperts Academy Pro was one of the best
                        decisions I made for my career. The knowledge I have
                        acquired here has given me a competitive edge in the
                        Forex market.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text28">
                            Sarah Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27">
                            Risk Manager
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text25">
                        The practical approach to learning at Forexperts Academy
                        Pro has been instrumental in honing my trading skills.
                        The support from the community and instructors is
                        exceptional.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  review3: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1467632499275-7a693a761056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTI1Nzc3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  review4: undefined,
  author1Name: undefined,
  author4Position: undefined,
  author4Name: undefined,
  author2Position: undefined,
  review2: undefined,
  author4Alt: 'Image of Sarah Johnson',
  author3Position: undefined,
  author2Name: undefined,
  review1: undefined,
  author2Alt: 'Image of Jane Smith',
  author3Src:
    'https://images.unsplash.com/photo-1472521882609-05fb39814d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTI1Nzc3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1632377082370-6608a1e37c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTI1Nzc3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  heading1: undefined,
  author3Alt: 'Image of David Williams',
  author1Alt: 'Image of John Doe',
  author3Name: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1515202913167-d9a698095ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTI1Nzc3MHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial17.propTypes = {
  review3: PropTypes.element,
  author1Src: PropTypes.string,
  review4: PropTypes.element,
  author1Name: PropTypes.element,
  author4Position: PropTypes.element,
  author4Name: PropTypes.element,
  author2Position: PropTypes.element,
  review2: PropTypes.element,
  author4Alt: PropTypes.string,
  author3Position: PropTypes.element,
  author2Name: PropTypes.element,
  review1: PropTypes.element,
  author2Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author1Position: PropTypes.element,
  author4Src: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  author3Alt: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Name: PropTypes.element,
  author2Src: PropTypes.string,
}

export default Testimonial17
