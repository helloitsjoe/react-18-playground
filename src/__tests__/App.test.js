import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from '../App';

describe('App', () => {
  it('is encouraging', () => {
    render(<App />);
    expect(screen.getByText(/you're doing great/i)).toBeTruthy();
    user.click(screen.getByText(/you're doing great/i));
  });
});
