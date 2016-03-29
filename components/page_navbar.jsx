import React from 'react';

export default function PageNavbar() {
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
            <li><a href="/">Home</a></li>
            <li><a href="/#marketing">Marketing</a></li>
            <li><a href="/#team">Team</a></li>
            <li><a href="/#contact">Kontakt</a></li>
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
