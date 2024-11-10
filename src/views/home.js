import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Forthright Twin Worm</title>
        <meta property="og:title" content="Forthright Twin Worm" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">/</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">/courses</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">/resources</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">/contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Courses</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Resources</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Enroll Now</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Get in Touch</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Welcome to Forexperts Academy Pro, your gateway to Forex trading
              expertise.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Explore our range of specialized courses designed to enhance your
              trading skills.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Access valuable resources to stay informed and make informed
              trading decisions.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Get in touch with us for any inquiries or to start your trading
              journey with us.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Enroll Now</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Enhance your Forex trading skills with expert guidance and
              resources at our specialized academy.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Welcome to Forexperts Academy Pro
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Comprehensive Courses</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Interactive Learning</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Expert Guidance</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Access a wide range of comprehensive courses designed by experts
              to enhance your Forex trading skills.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Engage in interactive learning sessions that simulate real trading
              scenarios for practical experience.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Receive expert guidance and mentorship from seasoned traders to
              help you navigate the complexities of the Forex market.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Enroll now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Join Forexperts Academy Pro today and start your journey to
              becoming a successful Forex trader.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              Ready to take your trading skills to the next level?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Comprehensive Courses</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Expert Guidance</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Resource Library</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Access a wide range of comprehensive courses covering various
              aspects of Forex trading.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Learn from industry experts who provide guidance and insights to
              help you improve your trading skills.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Explore our extensive resource library filled with valuable
              materials to support your learning journey.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text143">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text144">$99</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text145">$199</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text146">$299</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text147">Enroll Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text148">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text149">$999</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text150">Enroll Now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text151">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text152">$1999</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text153">Enroll Now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text154">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text155">$2999</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text157">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text159">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text160">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text161">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text162">Introduction to Forex Trading</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text163">Technical Analysis Basics</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text164">Risk Management Strategies</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text165">Advanced Technical Analysis</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text166">
              Fundamental Analysis Fundamentals
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text167">Trading Psychology Techniques</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text169">
              Advanced Risk Management Strategies
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text170">Algorithmic Trading Concepts</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text171">
              Live Trading Sessions with Experts
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text184">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text185">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text186">Create an Account</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text187">Choose a Course</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text188">Learn and Practice</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text189">Master Forex Trading</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text190">
              Sign up for Forexperts Academy Pro and create your account to
              access our courses and resources.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text191">
              Browse through our selection of courses taught by experts in Forex
              trading and choose the one that suits your needs.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text192">
              Engage with the course materials, practice trading strategies, and
              enhance your skills under the guidance of experienced traders.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text193">
              Apply what you have learned, stay updated with market trends, and
              become a master in Forex trading with Forexperts Academy Pro.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text194">
              I highly recommend it to anyone looking to excel in Forex trading.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text195">
              The expertise of the instructors at Forexperts Academy Pro is
              unmatched. I have gained a deeper understanding of Forex trading
              concepts and strategies that have significantly improved my
              performance in the market.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text196">
              Enrolling in Forexperts Academy Pro was one of the best decisions
              I made for my career. The knowledge I have acquired here has given
              me a competitive edge in the Forex market.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text197">
              The practical approach to learning at Forexperts Academy Pro has
              been instrumental in honing my trading skills. The support from
              the community and instructors is exceptional.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text198">
              Forexperts Academy Pro has truly transformed my trading journey.
              The courses are comprehensive and the resources provided are
              invaluable. I highly recommend it to anyone looking to excel in
              Forex trading.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text199">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text200">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text201">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text202">David Williams</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text203">Sarah Johnson</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text204">Forex Trader</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text205">Financial Analyst</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text206">Investment Consultant</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text207">Risk Manager</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208">
              For any inquiries or support, feel free to reach out to us at our
              headquarters.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text209">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">
              Forexperts Academy Pro Headquarters
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Online Support</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text212">
              Visit us at our main office for in-person assistance.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text213">
              Contact our support team online for any questions or assistance.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text214">Courses</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text215">Resources</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text216">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text218">FAQ</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text219">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
