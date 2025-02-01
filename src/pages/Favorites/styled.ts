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
