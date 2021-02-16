export const initialState = {
  current: '#FF0000',
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'INPUT_COLOR_CHANGE':
      return { ...state, current: action.payload };
    case 'INPUT_COLOR_CHANGE':
      return { ...state, before: action.payload };
    default:
      return state;
  }
}
