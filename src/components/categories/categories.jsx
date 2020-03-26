/*
  categories.
  Provides a category interface.
*/

import { useEffect } from 'react';
import { updateStore, useTreble } from 'treble-gsm';

export default function Categories({ catItems }) {

  //connects component to Store.jsx
  const [{ }, dispatch] = useTreble();

  //puts categories in global state on app load
  useEffect(() => {
    updateStore('updateCategories', catItems, dispatch);
  }, []);

  return null
}

