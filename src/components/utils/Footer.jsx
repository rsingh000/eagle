/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import "../styles/footer.scss";
import { Link } from 'react-router-dom';
import "https://kit.fontawesome.com/a076d05399.js";

const Footer = () => {
  return (
    
<footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Eagle Pro Painting Ltd.</h4>
  	 			<ul>
  	 				<li><Link to="/about" onClick={()=>window.scrollTo(0, 0)}>About Us</Link></li>
  	 				<li><Link to="/services" onClick={()=>window.scrollTo(0, 0)}>Services</Link></li>
  	 				<li><Link to="/work" onClick={()=>window.scrollTo(0, 0)}>Our Work</Link></li>
  	 				<li><Link to="/contact" onClick={()=>window.scrollTo(0, 0)}>Contact Us</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Business Hours</h4>
  	 			<ul style={{color: "#ddd", fontSize: "18px"}}>
  	 				<li>Weekdays&emsp;8:00 am - 5:00 pm</li>
  	 				<li>Sundays & Holidays&emsp;Closed</li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
               <h4>Follow us</h4>
  	 			<div className="social-links">
  	 				<a href="/"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="/"><i className="fab fa-twitter"></i></a>
  	 				<a href="/"><i className="fab fa-instagram"></i></a>
  	 				<a href="/"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
            <div className="footer-col">
               <h4>Locate us</h4>
               <iframe
                width="90%"
                height="70%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=9286 Stuart Crescent Surrey&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                ></iframe>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>)};

   {/* <div className="footer" >
        <div className="address roboto-bold-black-18px" >
            <span className="roboto-bold-white-18px">
                EAGLE PAINTING CONTRACTORS
                <br />
            </span>
            <span className="roboto-medium-white-18px">
                <br />
                Address: 9286 Stuart Crescent,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Surrey BC V3V
                1T6
                <br />
                <br />
                Phone: (778) 829-6747
            </span>
        </div>
        <div className="hours roboto-bold-white-18px" >
            <span className="roboto-bold-white-18px">
                &nbsp;&nbsp;Business Hours
                <br />
                <br />
            </span>
            <span className="roboto-medium-white-18px">
                Sunday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Closed
                <br />
                Monday to Saturday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8:00 am to 5:00 pm
            </span>
        </div>
        <div className="map" >
            <iframe
                width="100%"
                height="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=9286 Stuart Crescent Surrey&t=&z=12&ie=UTF8&iwloc=B&output=embed"
            ></iframe>
        </div>
    </div>  */}


export default Footer;
