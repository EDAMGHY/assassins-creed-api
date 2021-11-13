const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_GAMES':
      return {
        ...state,
        games: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: false,
      };

    case 'GET_SINGLE_GAME':
      return {
        ...state,
        singleGame: action.payload,
      };
    case 'SET_CURRENT':
      return {
        ...state,
        current: action.payload,
      };
    case 'CURRENT_GAME':
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
