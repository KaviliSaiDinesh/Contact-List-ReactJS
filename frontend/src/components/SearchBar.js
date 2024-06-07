import React, { useContext, useState } from 'react';
import { SearchContext } from '../SearchContext';


const SearchBar = () => {

  const {setSearchText} = useContext(SearchContext)

  const searchContacts = (event) =>{
    setSearchText(event.target.value);
  };


  return (
    <div className="search-bar">
      <span className='search-icon'><i className='fas fa-search'></i></span>
      <input name="text" onChange={searchContacts} type="text" placeholder="Search contact" />
    </div>
  );
};

export default SearchBar;
