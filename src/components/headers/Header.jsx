import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <a href="">
          <img
            className="header_logo_envato"
            src="https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg"
            alt=""
          />
        </a>
      </div>
      <div className="actions">
        <a className="header-buy-now" href="">Buy Now</a>
      </div>
    </div>
  );
};

export default Header;
