import React from 'react';
import { MyComponent, Heading } from './components/MyComponent';

export function App(): JSX.Element {
  return (
    <div>
      <h1>Hello world!</h1>
      <MyComponent name="First" color="red" />
      <Heading name="Second" color="black" />
    </div>
  );
}
