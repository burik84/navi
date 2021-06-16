import React, { ReactElement } from 'react';

interface ILogo extends React.PropsWithChildren<any> {
  color?: string;
}
export const LogoElement: React.FC<ILogo> = ({ color = 'white' }: ILogo): ReactElement => {
  return (
    <div className="logo">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="bandcamp"
        className="svg-inline--fa fa-bandcamp fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill={color}
          d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm48.2,326.1h-181L207.9,178h181Z"
        ></path>
      </svg>
    </div>
  );
};
