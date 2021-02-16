import React from 'react';

const ColorControls = ({ undo, redo, record }) => (
  <>
    <label htmlFor="UNDO_COLOR_CHANGE">undo color</label>
    <input
      id="UNDO_COLOR_CHANGE"
      type="color"
      value={current}
      onChange={({ target }) => record(target.value)}
    />
  </>
);
