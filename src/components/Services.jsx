import React, { useEffect } from 'react';
import Navbar from './utils/Navbar';
import Topbar from './utils/Topbar';
import Footer from './utils/Footer';
import "./styles/services.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Services = () => {

  useEffect(()=>{
      Aos.init({ duration: 2000})
  },[]);


  return (
  <div>
      <Topbar />
      <Navbar />
      <div className="servicesMain">
        <div className="main-title" data-aos="fade-up">
            <h1 className="title roboto-semi-bold-white-64px">
                OUR SERVICES
            </h1>
            <div className="sub-title roboto-semi-bold-gray-24px">
                Reliable Commercial &amp; Residential <br />Painting Services That Will Exceed All Of Your Expectations
            </div>
        </div>
      </div>
      <div className="servicesDesc">
        <div  className="commercial">
            <img data-aos="fade-in" className="img-left" src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/image-2-2@2x.png" alt=""/>
            <h1 data-aos="flip-right" className="roboto-semi-bold-white-24px">
                <span className="roboto-semi-bold-cape-cod-24px">
                COMMERCIAL PAINTING SERVICES
                <br />
                </span>
                <span className="roboto-semi-bold-black-24px">
                <br />
                </span>
                <span className="roboto-semi-bold-tundora-18px" style={{"lineHeight": "1.5"}}>
                Commercial painting is just as important as residential painting. In fact, it could be even more important depending on your customers and business. Choose one of the top industrial painting company in lower mainland.
                Our painting contractors assure the job will be completed right the first time. Eagle carries all lines of commercial insurances and practice all of the latest safety protocols.
                By choosing Eagle Painting, you are guaranteed quality, convenience and value.<br/>
                <span className="gradientColor">EXTERIOR PAINTING<br/>INTERIOR PAINTING<br/>ELECTROSTATIC PAINTING<br/></span>
                </span>
            </h1>
        </div>
        <div  className="residential">
            <h1 data-aos="fade-down" className="roboto-semi-bold-white-24px">
                <span className="roboto-semi-bold-cape-cod-24px">
                RESIDENTIAL PAINTING SERVICES
                <br />
                </span>
                <span className="roboto-semi-bold-black-24px">
                <br />
                </span>
                <span className="roboto-semi-bold-tundora-18px" style={{"lineHeight": "1.5"}}>
                    Nothing brings out a homes beauty like a fresh coat of paint inside or outside. When you’re ready to improve your homes look, Eagle Painting Contractors puts you at ease with our professional painters and project management and we strive to stay within your budget and time frame.
                    Some of the areas we service include. Vancouver, Surrey, Burnaby, North Vancouver, Abbotsford, Aldergrove, Fraser Valley.<br/>
                <span className="gradientColor">EXTERIOR PAINTING<br/>INTERIOR PAINTING<br/>FIXTURE REMOVAL AND REPLACEMENT<br/></span>
                </span>
            </h1>
            <img data-aos="fade-right" className="img-right" src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/respic-1@2x.png" alt=""/>

        </div>
      </div>
      <Footer />
  </div>
  );
};

export default Services;
