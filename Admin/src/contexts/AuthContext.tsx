import { createContext, ReactNode, useState, useEffect } from 'react'


type AuthContextType = {
  user: boolean;
  setUser: any;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props:AuthContextProviderProps) {


  const [user, setUser] = useState<boolean>(() => {
    const storedData = sessionStorage.getItem('user');
    return storedData ? JSON.parse(storedData) : false;
  });

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
  <AuthContext.Provider value={{ user, setUser }}>
    {props.children}
  </AuthContext.Provider>
    
  )
}
