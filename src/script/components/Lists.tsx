import React from 'react';
import { IData } from '../shared/types';

type TProps = {
  section: string;
  data: IData[];
};

const info = {
  otpb: 'instruction',
  equip: 'equipment',
  methodologies: 'methodologies',
  map: 'map',
  artic: 'artic',
};

export const Lists: React.FC<TProps> = ({ section = 'otpb', data = [] }) => {
  console.log(data);
  return (
    <div>
      <p>{section}</p>
      <ul>
        {data.map((item, index) => {
          const l = `${item.urlBase}${item.file}`;
          return (
            <li key={index}>
              <a className="link" href={l} target="_blank" rel="noreferrer">
                {item.description}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
