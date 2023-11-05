import React, {createContext, useContext, ReactNode, useState} from 'react';

interface UserContextProps {
  userRole: string;
  setUserRole: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [userRole, setUserRole] = useState<string>('user');

  return (
    <UserContext.Provider value={{userRole, setUserRole}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserRole = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserRole must be used within a UserProvider');
  }
  return context;
};
