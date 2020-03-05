import React, { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Link, navigate } from 'gatsby';
import { useTreble, updateStore } from 'treble-gsm';

export default function SearchBox() {

  const [{ activeNavPath }] = useTreble();
  const [openSearch, setOpenSearch] = useState(false);

  const handleOnKeyPress = (event) => {
    if (event.key === "Enter") {
      let value = event.target.value;
      navigate(`/search?keywords=${value}`);
    }
  }

  const handleOpenSearch = () => {
    let searchState = (activeNavPath !== '/search') ? true : false;
    setOpenSearch(searchState);
  }

  useEffect(() => {
    setOpenSearch(false);
  }, [activeNavPath])

  return (
    <>
      <div className='d-flex'>
        {
          !(openSearch) ?
            <div className='nav-search-icon'>
              <i className="fas fa-search" onClick={() => handleOpenSearch()}></i>
            </div>
            :

            <InputGroup className='nav-search-box'>
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