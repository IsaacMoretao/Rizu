import {
  createContext,
  ReactNode,
  useState
} from 'react';

type state = {

}

type AuthContextType = {
  visible: string,
  setVisible: string | any
}

type AuthContextProviderProps = {
  children: ReactNode;
}

 export const UseContext = createContext({} as AuthContextType);

 export function Context(props:AuthContextProviderProps) {

    const [visible, setVisible] = useState("none");


  return (
    <UseContext.Provider
    value={{
      visible,
      setVisible
    }}>
      {props.children}
    </UseContext.Provider>
      
  )

}