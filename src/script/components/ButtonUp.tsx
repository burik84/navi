import React from 'react';

import { IconButton } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { useWindowDimensions, useHandleScroll } from '../services/WindowDimensions';

export const ButtonUp: React.FC = () => {
  const { height } = useWindowDimensions();
  const scrollY = useHandleScroll();

  const handleUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <IconButton
      className={scrollY.height >= 10 ? 'button button__up active' : 'button button__up'}
      aria-label="наверх"
      onClick={handleUp}
    >
      <KeyboardArrowUpIcon />
    </IconButton>
  );
};

('button button__up');
