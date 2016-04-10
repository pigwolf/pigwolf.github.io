import React, { PropTypes } from 'react';
import classNames from 'classnames';

import PageNavbar from './page_navbar';

export default function Frontdoor(props) {
  return (
    <div className="frontdoor">
      <PageNavbar page={props.page} />
      <header className="frontdoor__header visible-md visible-lg">
        <div
          className={classNames('frontdoor__background', {
            'frontdoor__background--variant-1': props.variant === '1',
            'frontdoor__background--variant-2': props.variant === '2',
            'frontdoor__background--variant-3': props.variant === '3',
          })}
        />
        <h1 className="page-header frontdoor__title">
          {props.children}
        </h1>
      </header>
      <header className="frontdoor__mobile-header hidden-md hidden-lg">
        <div className="container">
          <div className="jumbotron">
            <h2>Herzlich willkommen</h2>
            <p>
              {props.children}
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

Frontdoor.propTypes = {
  page: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.any,
};

Frontdoor.defaultProps = {
  variant: '1',
};
