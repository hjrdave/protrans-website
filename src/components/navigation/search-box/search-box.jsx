/*
  search-box.jsx
  Search Input for Navigation comp.
*/

import React, { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Link, navigate } from 'gatsby';
import { useTreble, updateStore } from 'treble-gsm';

export default function SearchBox({ type }) {

  const [{ activeNavPath }, dispatch] = useTreble();
  const [openSearch, setOpenSearch] = useState(true);
  const [searchAnimation, setSearchAnimation] = useState(false);

  const handleOnKeyPress = (event) => {
    if (event.key === "Enter") {
      let value = event.target.value;
      navigate(`/search?keywords=${value}`);

      //closes mobile nav when enter on searchbox
      updateStore('updateMobileNavState', false, dispatch)
    }
  }

  const handleOpenSearch = () => {
    let searchState = (activeNavPath !== '/search') ? true : false;
    setOpenSearch(searchState);
  }

  const handleSearchAnimation = () => {
    setTimeout(() => {
      setSearchAnimation(true);
    })
  }

  useEffect(() => {
    setOpenSearch((type === 'mobile') ? true : false);
    setSearchAnimation(false);
  }, [activeNavPath]);

  return (
    <>
      <div className='d-flex nav-search-container'>
        {
          !(openSearch) ?
            <div className='nav-search-icon'>
              <i className="fas fa-search" onClick={() => { handleOpenSearch(); handleSearchAnimation(); }}></i>
            </div>
            :

            <InputGroup className={`nav-search-box ${(searchAnimation) ? 'nav-search-box-animate' : ''}`}>
              <InputGroup.Prepend>
                <InputGroup.Text><Link to={'/search'}><i className="fas fa-search"></i></Link></InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Search"
                aria-label="Search"
                onKeyPress={(event) => { handleOnKeyPress(event) }}
                autoFocus={true}
              />
            </InputGroup>
        }


      </div>
    </>
  )
}