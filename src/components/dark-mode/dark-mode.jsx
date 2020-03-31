import React, { useEffect } from 'react';
import { useTreble, updateStore } from 'treble-gsm';

export default function DarkMode({ auto }) {
  const [{ }, dispatch] = useTreble();

  const darkModeDetection = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      updateStore('darkMode', true, dispatch);
    }
  }
  //detects if OS is set in dark mode
  useEffect(() => {
    if (auto) {
      darkModeDetection();
    }
  }, []);

  return null
}