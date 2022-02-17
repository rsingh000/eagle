import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.scss";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Estimate from '../Estimate'

const Navbar = () => {

  const [fixNav, setFixNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  const stickNavbar = () => {
    console.log(window.scrollY)
    if(window.scrollY >= 10){
      setFixNav(true);
    } else {
      setFixNav(false);
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
  })

  return (
    <>
    <nav className={ fixNav ? "fixNav nav" : "nav" }>
      <Link to="/" className="logo">
          <img
            className="logoImg"
            alt=""
            src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/logo-1@2x.png"
          />

      </Link>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() =>  isMobile && setIsMobile(!isMobile)}>
        <li><Link to="/about" className="about" onClick={()=>window.scrollTo(0, 0)}>ABOUT</Link></li>
        <li><Link to="/services" className="services" onClick={()=>window.scrollTo(0, 0)}>SERVICES</Link></li>
        <li><Link to="/work" className="work" onClick={()=>window.scrollTo(0, 0)}>OUR WORK</Link></li>
        <li><Link to="/contact" className="contact" onClick={()=>window.scrollTo(0, 0)}>CONTACT</Link></li>
        <li><a href className="estimate" onClick={onOpenModal} >FREE ESTIMATE</a></li>
      </ul>
      <img
            className="phoneNav" onClick={()=>window.open("tel:7788296747")}
            src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/phone@2x.png"
            alt=""
      />

      { isMobile ? 
      <img
            className="iconNav"
            src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/navicon@2x.png"
            alt=""
            onClick={()=>setIsMobile(!isMobile)}
      /> :
      <img
        className="iconNav"
        alt=""
        src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/fontisto-nav-icon-a@2x.png"
        onClick={()=>setIsMobile(!isMobile)}
      />      
  }  
    </nav>
    <Modal open={open} onClose={onCloseModal} center style={{padding: 0}}>
    <Estimate />
  </Modal>
  </>
  )
}

export default Navbar;

    /* <div>

      <div className={ fixNav ? "fixNav pentagon-nav" : "pentagon-nav" }>
          <div className="logo">
              <img
                  className="logo-1"
                  alt=""
                  src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/logo-1@2x.png"
              />
          </div>
          <div className="navbar">
              <Menu22
                  services1Props={menu22Data.services1Props}
                  services2Props={menu22Data.services2Props}
              />
          </div>
      </div>
      <div className="topbar">
        <div className="topbar-1">
          <Logo />
          <img
            className="phone"
            src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/phone@2x.png"
            alt=""
          />
          <img
            className="fontistonav-icon-a"
            src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/fontisto-nav-icon-a@2x.png"
            alt=""
          />
        </div>
      </div>
    </div> */


/* function Logo() {
  return (
    <div className="logoMobile">
      <img
        className="untitled-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/untitled-1@2x.png"
        alt=""
      />
    </div>
  );
}

function Menu22(props) {
    const { services1Props, services2Props } = props;
  
    return (
      <div className="menu">
        <About />
        <Services>{services1Props.children}</Services>
        <OurWork />
        <Services className={services2Props.className}>
          {services2Props.children}
        </Services>
        <Estimate />
      </div>
    );
}

function About() {
    return (
      <div className="about">
        <div className="about-1 roboto-semi-bold-gray-14px">
          ABOUT
        </div>
      </div>
    );
}
  
  
function Services(props) {
    const { children, className } = props;
  
    return (
      <div className={`menu-item-1 ${className || ""}`}>
        <div className="services roboto-semi-bold-gray-14px">
          {children}
        </div>
      </div>
    );
}
  
  
function OurWork() {
    return (
      <div className="our-work">
        <div className="our-work-1 roboto-semi-bold-gray-14px">
          OUR WORK
        </div>
      </div>
    );
}
  
  
function Estimate() {
    return (
      <div className="estimate">
        <div className="free-estimate roboto-semi-bold-white-14px">
          FREE ESTIMATE
        </div>
      </div>
    );
}
  
  
const services1Data = {
    children: "SERVICES",
};

const services2Data = {
    children: "CONTACT",
    className: "menu-item",
};

const menu22Data = {
    services1Props: services1Data,
    services2Props: services2Data,
}; */

