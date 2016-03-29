import React, { PropTypes } from 'react';

import PageNavbar from './page_navbar';

export default function Frontdoor(props) {
  return (
    <div className="frontdoor">
      <PageNavbar />
      <header className="frontdoor__header visible-md visible-lg">
        <div className="frontdoor__background" />
        <h1 className="page-header frontdoor__title">
          Pigwolf bietet Ihnen die richtige Strategie
          für intelligentes Wachstum!
          <br />
        </h1>
      </header>
      <header className="frontdoor__mobile-header hidden-md hidden-lg">
        <div className="container">
          <div className="jumbotron">
            <h2>Herzlich willkommen</h2>
            <p>
              Pigwolf bietet Ihnen die richtige Strategie
              für intelligentes Wachstum!
            </p>
          </div>
        </div>
      </header>
      {props.children}
    </div>
  );
}

Frontdoor.propTypes = {
  children: PropTypes.any.isRequired,
};
