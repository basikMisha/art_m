import styled from 'styled-components';
import { colors } from '@/constants/colors';

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${colors.black};
`;

export const Container = styled.div`
  padding: 32px 15px;
  max-width: 1310px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Inter;
`;
export const YourFavorites = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledSpan = styled.span`
  color: ${colors.white};
  font-size: 18px;
`;
