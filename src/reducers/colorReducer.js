export const initialState = {
  current: '#FF0000',
  before: [],
  after: [],
};

export default function reducer(state, action) {
  const { current, before, after } = state;
  switch (action.type) {
    case 'CURRENT_COLOR_CHANGE':
      return {
        ...state,
        before: [...before, current],
        current: action.payload,
      };
    case 'UNDO_COLOR_CHANGE':
      return {
        after: [current, ...after],
        current: before[before.length - 1],
        before: before.slice(0, -1),
      };
    case 'REDO_COLOR':
      return {
        before: [...before, current],
        current: after[0],
        after: after.slice(1),
      };
    default:
      return state;
  }
}
