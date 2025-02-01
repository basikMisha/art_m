import styled from 'styled-components';
import { colors } from '@/constants/colors';

export const StyledBurger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;

  div {
    width: 30px;
    height: 3px;
    background: ${colors.white};
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100vh;
  background: ${colors.black};
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: right 0.3s ease-in-out;
  z-index: 1000;
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: ${colors.white};
  font-size: 24px;
  cursor: pointer;
`;

export const MenuItem = styled.div`
  margin-top: 20px;

  a {
    color: ${colors.white};
    text-decoration: none;
    font-size: 18px;
  }
`;
