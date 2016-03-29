import React, { PropTypes } from 'react';

import Footer from './footer';

export default function Root({ children }) {
  return (
    <div className="app">
      {children}
      <Footer />
    </div>
  );
}

Root.propTypes = {
  children: PropTypes.any.isRequired,
};
