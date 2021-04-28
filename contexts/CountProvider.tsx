import React, {PropsWithChildren, useMemo, useState} from 'react';

type CountContextType = {
  count: number;
  incrementCounter?: () => void;
  incrementCounter?: () => void;
  resetCounter?: () => void;
};

export const CountContext = React.createContext<CountContextType>({
  count: 0,
});

export const CountProvider: React.FC<PropsWithChildren<React.ReactNode>> = ({
  children,
}) => {
  // const [count, setCount] = useState<count>(defaultCount);

  // const countValue = useMemo(() => ({count, setCount}), [count, setCount]);
  const countValue = useCounter();

  return (
    <CountContext.Provider value={countValue}>{children}</CountContext.Provider>
  );
};
