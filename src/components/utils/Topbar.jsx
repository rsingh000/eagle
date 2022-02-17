import React from 'react';
import "../styles/topbar.scss";

function App() {
  return (
    <div className="topbar">
      <LeftTopbar />
      <RightTopbar />
    </div>
  );
}

export default App;

function LeftTopbar() {
  return (
    <div className="left-topbar">
      <img
        className="fbicon"
        alt=""
        src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/fbicon@2x.png"
      />
      <img
        className="twittericon"
        alt=""
        src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/twittericon@2x.png"
      />
    </div>
  );
}


function RightTopbar() {
  return (
    <div className="right-topbar">
      <img
        className="akar-iconsphone"
        alt=""
        src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/akar-icons-phone@2x.png"
      />
      <div className="phone roboto-semi-bold-white-14px">
        +1 (778) 829-6747
      </div>
    </div>
  );
}

