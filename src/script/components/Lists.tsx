import React from 'react';
import { IData } from '../shared/types';

interface ILists {
  title: string[];
  data: IData[];
}

export const Lists: React.FC<ILists> = ({ title, data = [] }: ILists) => {
  console.log(data);
  console.log(title);

  return (
    <div>
      {title.map((titles, index) => {
        return (
          <>
            <h4 key={index}>{titles}</h4>
            <ul>
              {data
                .filter((el) => el.title === titles)
                .map((item, index) => {
                  const url = `${item.urlBase}${item.file}`;
                  const description: string = item.description;
                  return (
                    <li key={index}>
                      <a className="link" href={url} target="_blank" rel="noreferrer">
                        {description}
                      </a>
                    </li>
                  );
                  // <List description={item.description} url={url} index={index} />;
                })}
            </ul>
          </>
        );
      })}
    </div>
  );
};
