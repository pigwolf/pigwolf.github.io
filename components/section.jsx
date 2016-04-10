import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function Section(props) {
  return (
    <section
      id={props.id}
      className={
        classNames('section', {
          'section--white': !!props.white,
          'section--thin': !!props.thin,
        })
      }
    >
      <div className="container">
        {props.children}
      </div>
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  white: PropTypes.bool,
  thin: PropTypes.bool,
  children: PropTypes.any,
};
