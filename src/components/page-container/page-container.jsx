/*
  page-container.jsx
  Container that wraps around content on every page.
*/

import React, { useEffect } from "react";
import { useTreble, updateStore } from 'treble-gsm';

export default function PageContainer({ children, id, activePath }) {

  const [{ }, dispatch] = useTreble();

  //updates page path to global state for navigation active list items
  useEffect(() => {
    updateStore('updateActiveNavPath', activePath?.pathname, dispatch);
  }, [activePath]);

  return (
    <>
      <div id={id} className='page-container'>
        {children}
      </div>
    </>
  )
}
