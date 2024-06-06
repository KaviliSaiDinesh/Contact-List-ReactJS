import React from 'react';


const SearchBar = () => {

  return (
    <div className="search-bar">
      <span className='search-icon'><i className='fas fa-search'></i></span>
      <input type="text" placeholder="Search contact" />
    </div>
  );
};

export default SearchBar;
