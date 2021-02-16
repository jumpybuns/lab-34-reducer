import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

describe('Picks color, undo, redo', () => {
  afterEach(() => cleanup());
  it('handles the current value', async () => {
    render(<App />);

    const value = screen.getByLabelText('input');

    fireEvent.change(value, {
      target: {
        value: '#FF0000',
      },
    });

    const display = await screen.findByTestId('annoying');

    expect(display).toHaveStyle({
      backgroundColor: '#FF0000',
    });
  });

  it('handles the undo value', async () => {
    render(<App />);

    const value = screen.getByLabelText('input');

    fireEvent.change(value, {
      target: {
        value: '#FF0000',
      },
    });

    fireEvent.change(value, {
      target: {
        value: '#00FF00',
      },
    });

    const display = await screen.findByTestId('annoying');

    expect(display).toHaveStyle({
      backgroundColor: '#00FF00',
    });
  });

  it('handles the undo value', async () => {
    render(<App />);

    const value = screen.getByLabelText('input');

    fireEvent.change(value, {
      target: {
        value: '#FF0000',
      },
    });

    fireEvent.change(value, {
      target: {
        value: '#00FF00',
      },
    });

    fireEvent.change(value, {
      target: {
        value: '#FF0000',
      },
    });

    const display = await screen.findByTestId('annoying');

    expect(display).toHaveStyle({
      backgroundColor: '#FF0000',
    });
  });
});
