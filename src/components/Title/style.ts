import styled from 'styled-components';
import { colors } from '@/constants/colors';

export const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
  margin-top: 120px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${colors.orange};
  font-weight: 400;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.black};
`;
