import React, { useState, useMemo, useContext } from 'react';
import { IAppContext } from '../shared/types';

const AppContext = React.createContext<IAppContext | null>(null);

// export const AppContextProvider = AppContext.Provider;
// export const AppContextConsumer = AppContext.Consumer;
export const AppContextSource = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  return context;
};

export const AppContextProvider = (props: any) => {
  const [source, setSource] = useState<any>([]);
  const [theme, setTheme] = useState<string>('light');
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const value = useMemo(
    () => ({
      isLoad,
      theme,
      source,
      setSource,
      setTheme,
      setIsLoad,
    }),
    [isLoad, theme, source],
  );
  return <AppContext.Provider value={value} {...props} />;
};