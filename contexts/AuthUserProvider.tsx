import React, {PropsWithChildren, useMemo, useState} from 'react';

export type Auth = {
  isAuth: boolean;
  setAuth?: (isAuth: boolean) => void;
};

export const AuthUserContext = React.createContext<any | undefined>(undefined);

export const AuthUserProvider: React.FC<PropsWithChildren<any>> = ({
  children,
}) => {
  const [isAuth, setAuth] = useState<Auth>();

  const authValue = useMemo(
    () => ({
      isAuth,
      setAuth,
    }),
    [isAuth, setAuth],
  );

  return (
    <AuthUserContext.Provider value={authValue}>
      {children}
    </AuthUserContext.Provider>
  );
};
