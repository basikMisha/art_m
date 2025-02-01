import { useState } from 'react';
import { StyledBurger, Menu, MenuItem, CloseButton } from './styled';
import { Link } from 'react-router-dom';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledBurger onClick={() => setIsOpen(true)}>
        <div />
        <div />
        <div />
      </StyledBurger>

      <Menu isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(false)}>✖</CloseButton>
        <MenuItem>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/favorites" onClick={() => setIsOpen(false)}>
            Your Favorites
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};
