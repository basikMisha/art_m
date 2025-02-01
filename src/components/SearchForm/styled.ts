import styled from 'styled-components';
import { colors } from '@/constants/colors';

export const Container = styled.div`
  max-width: 1310px;
  padding: 0 15px;
  width: 100%;
  text-align: center;
  margin: 120px auto;

  @media (max-width: 768px) {
    margin: 60px auto;
  }
`;

export const Title = styled.h1`
  max-width: 684px;
  font-weight: 700;
  font-size: 64px;
  margin: 0 auto;
  padding-bottom: 72px;
  text-transform: capitalize;

  span {
    color: ${colors.orange};
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.gray};
  border-radius: 25px;
  padding: 10px 16px;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: ${colors.black};

  &::placeholder {
    color: rgba(57, 57, 57, 0.5);
    font-size: 14px;
    font-family: Inter;
  }
`;

export const SearchButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const SearchIcon = styled.svg`
  width: 32px;
  height: 32px;
  stroke: currentColor;
  fill: none;
  color: ${colors.black}; /* Можно заменить на нужный цвет */
`;
