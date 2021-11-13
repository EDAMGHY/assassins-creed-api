import { useContext, useReducer, createContext, useEffect } from 'react';
import reducer from './reducer';
const AppContext = createContext();

const initialState = {
  loading: true,
  games: [],
  singleGame: {},
  current: '',
  currentGame: '',
};
const AppProvider = ({ children }) => {
  const fetchGames = async () => {
    const res = await fetch('/api/v1/games');
    const data = await res.json();
    dispatch({ type: 'GET_GAMES', payload: data });
    dispatch({ type: 'SET_LOADING' });
  };

  const fetchSingleGame = async (id) => {
    const res = await fetch(`/api/v1/games/${id}`);
    const data = await res.json();
    dispatch({ type: 'GET_SINGLE_GAME', payload: data });
    dispatch({ type: 'SET_LOADING' });
  };
  const updateTitle = () => {
    document.title = 'Games';
    dispatch({ type: 'SET_CURRENT', payload: document.title.toLowerCase() });
  };

  const currentGame = () => {
    document.title = `${state.currentGame}`;
    dispatch({ type: 'CURRENT_GAME', payload: state.singleGame.name });
  };
  useEffect(() => {
    fetchGames();
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        ...state,
        fetchGames,
        fetchSingleGame,
        updateTitle,
        currentGame,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
