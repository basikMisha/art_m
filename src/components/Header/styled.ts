import styled from 'styled-components';
import { colors } from '@/constants/colors';

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${colors.black};
`;

export const Container = styled.div`
  padding: 32px 0;
  max-width: 1280px;
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
`;

export const StyledSpan = styled.span`
  color: ${colors.white};
  font-size: 18px;
`;
