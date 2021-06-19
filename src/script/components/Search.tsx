import React from 'react';

import searchIcon from '../../assets/icons/search-solid.svg';

export const Search: React.FC = () => {
  return (
    <div className="search">
      <div>
        <label htmlFor="site-search">Search the site:</label>
        <input type="search" name="" id="site-search" aria-label="Search through site content" />
      </div>
      <button className="button">
        <img src={searchIcon} alt="icon search" />
      </button>
    </div>
  );
};
