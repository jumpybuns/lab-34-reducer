import React, { useReducer } from 'react';
import reducer, { initialState } from '../../reducers/colorReducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (type, payload) => {
    dispatch({
      type,
      payload,
    });
  };

  return (
    <>
      <button onClick={() => handleChange('UNDO_COLOR_CHANGE', '')}>
        undo
      </button>
      <button onClick={() => handleChange('REDO_COLOR_CHANGE', '')}>
        redo
      </button>
      <label htmlFor="INPUT_COLOR_CHANGE">input</label>
      <input
        id="INPUT_COLOR_CHANGE"
        type="color"
        value={state.current}
        onChange={({ target }) =>
          handleChange('CURRENT_COLOR_CHANGE', target.value)
        }
      />

      <div
        data-testid="annoying"
        style={{
          backgroundColor: state.current,
          width: '10rem',
          height: '10rem',
        }}
      ></div>
    </>
  );
};

export default App;
