import React from 'react';
import './Banner.css';
const Banner = () => {
  return (
    <div className="wrapper">
      <div
        className="preview_banner_area"
        style={{
          backgroundImage: `url("https://www.radiustheme.com/demo/html/digeco/img/banner/banner1.jpg")`,
        }}
      >
        <div className="animated-img">
          <img src="./images/banner2.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="logo-area">
              <a href="">
                <img src="./images/logo.png" alt="Logo" />
              </a>
            </div>

            <div className="intro">
              <h1 className="preview-title">
                <span className="fixed-text">
                  Best
                </span>
              </h1>
              <h2 className="fixed-text2">HTML Template</h2>
              <p>
                11 Home Pages With Eye Catching Inner Pages.
                Over 100+ interface blocks.
              </p>
            </div>
            <ul className="inline">
              <li>
                <a href="#" target="_blank" className="ghost-btn">Buy Now</a>
              </li>
              <li>
                <a href="#" target="_blank" className="buy-btn">See Demo</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
