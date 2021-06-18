import React from 'react';
import { UpElement } from '../shared/svgElements';

export const ButtonUp: React.FC = () => {
  return (
    <button className="button button__up">
      <UpElement />
      Наверх
    </button>
  );
};
