import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { BurgerMenu } from '@components/BurgerMenu';

describe('BurgerMenu', () => {
  it('renders burger button', () => {
    render(
      <MemoryRouter>
        <BurgerMenu />
      </MemoryRouter>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('opens the menu when clicking on the burger', () => {
    render(
      <MemoryRouter>
        <BurgerMenu />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button'));

    const menu = screen.getByRole('navigation');
    expect(getComputedStyle(menu).right).toBe('-100%');
  });

  it('closes the menu when clicking the close button', () => {
    render(
      <MemoryRouter>
        <BurgerMenu />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('✖'));

    const menu = screen.getByRole('navigation');
    expect(getComputedStyle(menu).right).toBe('-100%');
  });

  it('closes the menu when clicking a link', () => {
    render(
      <MemoryRouter>
        <BurgerMenu />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Home'));

    const menu = screen.getByRole('navigation');
    expect(getComputedStyle(menu).right).toBe('-100%');
  });
});
