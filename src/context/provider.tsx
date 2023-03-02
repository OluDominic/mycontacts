import React, {createContext, ReactNode, useReducer} from 'react';
import authInitialState from './initialStates/authState';
import contactInitialState from './initialStates/contactInitialState';
import auth from './reducers/auth';
import contacts from './reducers/contact';

export const GlobalContext = createContext({});

interface Props {
  children: ReactNode;
}

const GlobalProvider = ({children}: Props) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactState, contactDispatch] = useReducer(
    contacts,
    contactInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{authState, contactState, authDispatch, contactDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
