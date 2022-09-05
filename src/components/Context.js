import React, { useContext, useEffect, useReducer } from 'react';
import data from './Data';
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
  cart: data,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearAll = () => {
    dispatch({ type: 'CLear_All' });
  };

  const remove = id => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const increase = id => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const decrease = id => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
  }, [state.cart]);

  return <AppContext.Provider value={{ ...state, clearAll, remove, increase, decrease }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
