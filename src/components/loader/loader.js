import React from 'react';
import './loader.scss';

const Loader = props => {
  return (
    <div className="loader-wrapper">
      <img className="loader-logo" src="/loader.gif" alt='loader' />
    </div>
  )
}

export default Loader;
