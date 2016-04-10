import React, { PropTypes } from 'react';

function activeClass(props, page) {
  return props.page === page ? 'active' : '';
}

export default function PageNavbar(props) {
  return (
    <nav className="page-navbar navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-collapse"
          >
            <span className="sr-only">
              Toggle navigation
            </span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a href="/" className="navbar-brand">
            <div className="page-navbar__logo-container">
              <img className="page-navbar__logo" src="/images/logo-dark.png" />
            </div>
          </a>
        </div>
        <div id="navbar-collapse" className="collapse navbar-collapse">
          <ul className="nav navbar-nav page-navbar__nav">
            <li className={activeClass(props, 'index')}>
              <a href="/">Home</a>
            </li>
            <li className={activeClass(props, 'marketing')}>
              <a href="/marketing.html">Marketing</a>
            </li>
            <li className={activeClass(props, 'recruiting')}>
              <a href="/recruiting.html">Recruiting</a>
            </li>
            <li className={activeClass(props, 'team')}>
              <a href="/#team">Team</a>
            </li>
            <li className={activeClass(props, 'contact')}>
              <a href="/#contact">Kontakt</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="//board.pigwolf.com">Interesse?</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

PageNavbar.propTypes = {
  page: PropTypes.string.isRequired,
};
