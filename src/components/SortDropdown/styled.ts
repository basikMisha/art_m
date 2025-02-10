import styled from 'styled-components';
import { colors } from '@/constants/colors';

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 16px auto;
`;

export const StyledSelect = styled.select`
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid ${colors.gray};
  background-color: ${colors.white};
  color: ${colors.black};
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    border-color: ${colors.orange};
  }

  &:focus {
    outline: none;
    border-color: ${colors.orange};
    box-shadow: 0 0 5px ${colors.sortBoxShadow};
  }
`;
