import React, { useEffect } from 'react';
import Navbar from './utils/Navbar';
import Topbar from './utils/Topbar';
import Footer from './utils/Footer';
import "./styles/about.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const About = () => {

  useEffect(()=>{
      Aos.init({ duration: 2000})
  },[]);

  return (
  <div>
      <Topbar />
      <Navbar />
      <div className="aboutMain">
        <div className="main-title" data-aos="fade-up">
            <h1 className="title roboto-semi-bold-white-64px">
                ABOUT EAGLE PRO PAINTING LTD.
            </h1>
            <div className="sub-title roboto-semi-bold-gray-24px">
                Reliable Commercial &amp; Residential <br/>Painting Services That Will Exceed All Of Your Expectations
            </div>
        </div>
      </div>
      <div className="aboutDesc">
        <div  className="who-we-are">
            <img data-aos="fade-in" className="img-left-about" src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/image-2-2@2x.png" alt=""/>
            <h1 data-aos="flip-right" className="about-us roboto-semi-bold-white-24px">
                <span className="roboto-semi-bold-cape-cod-24px">
                WHO WE ARE
                <br />
                </span>
                <span className="roboto-semi-bold-black-24px">
                <br />
                </span>
                <span className="roboto-semi-bold-tundora-18px" style={{"lineHeight": "1.5"}}>
                Eagle Pro Painting Contractors is a homegrown, lower mainland owned and operated painting from the Fraser Valley area with diverse
                background.
                <br />‍<br />
                Eagle Pro Painting is unique in the fact that not only do we offer full suite of painting services, we offer a hands on approach where
                you deal directly with one of the owners of the company. We believe in a hand holding model for service and delivery of our
                services with clear and written expectations.
                </span>
            </h1>
        </div>
        <h1 className="reason-for-choice roboto-semi-bold-white-24px-22" data-aos="fade-down">
            <span className="roboto-semi-bold-cape-cod-24px">
                WHY CHOOSE EAGLE PRO PAINTING
                <br />
            </span>
            <span className="roboto-semi-bold-black-24px">
                <br />
            </span>
            <span className="roboto-semi-bold-tundora-18px" style={{"lineHeight": "1.5"}}>
                It&#39;s no bragging when you back it up! We carry a full line of commercial insurances and are up to date on equipment and safety
                procedures. Our process is simple, it doesn&#39;t happen if it isn&#39;t written down and understood. Each project is assigned a
                project manager, each project has a complete written scope that is checked off and walked together with the client upon completion
                and no job is complete until the client is satisfied.
                <br />
                <br />
                We believe in communication. Communication is the key to a successful project and we have all of the latest technology that allows
                our office to stay in touch with our project managers in the field and on the job, real time thus minimizing mistakes and delays.
            </span>
        </h1>
      </div>
      <Footer />
  </div>
  );
};

export default About;
