export const initialState = {
  current: '#FF0000',
  before: [],
  after: [],
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'CURRENT_COLOR_CHANGE':
      return {
        before: [...state.before, state.current],
        current: action.payload,
        after: [],
      };
    case 'UNDO_COLOR_CHANGE':
      return {
        after: [state.current, state.after],
        current: state.before[state.before.length - 1],
        before: state.current.slice(state.before.length - 1),
      };
    case 'REDO_COLOR':
      return {
        colorHistory: [...state.colorHistory, state.currentColor],
        currentColor: state.colorFuture[0],
        colorFuture: state.colorFuture.slice(state.colorFuture.length - 1),
      };
    default:
      return state;
  }
}
