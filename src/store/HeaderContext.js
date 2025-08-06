import { createContext, useReducer, useContext } from "react";

const initialState = {
  showCurrency: false,
  showLanguage: false,
  searchQuery: "",
  showResults: false,
};

function headerReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_CURRENCY":
      return { ...state, showCurrency: !state.showCurrency, showLanguage: false };
    case "TOGGLE_LANGUAGE":
      return { ...state, showLanguage: !state.showLanguage, showCurrency: false };
    case "SET_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SHOW_RESULTS":
      return { ...state, showResults: true };
    case "HIDE_RESULTS":
      return { ...state, showResults: false, searchQuery: "" };
    default:
      return state;
  }
}

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(headerReducer, initialState);
  return (
    <HeaderContext.Provider value={{ state, dispatch }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
