import styled from 'styled-components';
import { colors } from '@/constants/colors';
export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${colors.black};
  color: ${colors.white};
`;

export const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  color: ${colors.errorText};
  margin-bottom: 20px;
`;

export const ReloadButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: ${colors.white};
  background-color: ${colors.errorBg};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
