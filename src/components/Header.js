import React, {PropTypes} from 'react';

const Header = ({location}) => {
  return (
    <div>
      <header role="banner" id="global-header" className="c-global-header with-proposition">
        <div className="header-wrapper">
          <div className="header-global">
            <div className="header-logo">
              <a href="/" title="Go to the HMPPS homepage" id="logo" className="content">
                <img src="/pubilc/images/gov.uk_logotype_crown_invert_trans.png" width="36" height="32" alt="GOV.UK"/>
                <span>&nbsp;HMP {location}</span>
              </a>
            </div>
          </div>


          <div className="header-proposition">
            <div className="content">
              <a href="#proposition-links" className="js-header-toggle menu">Menu</a>
              <nav id="proposition-menu">
                {/*<a href="/" id="proposition-name">HMPPS {location}</a>*/}
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div id="global-header-bar"></div>
    </div>

  );
};

Header.propTypes = {
  location: PropTypes.string
}

export default Header;
