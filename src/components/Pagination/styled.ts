import styled from 'styled-components';
import { colors } from '@/constants/colors';

export const PaginationContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin: 20px auto;
  width: 100%;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 4px 10px;
  border: none;
  background: ${({ active }) => (active ? colors.orange : colors.paginationNotActive)};
  color: ${({ active }) => (active ? colors.white : colors.black)};
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: ${({ active }) => (active ? colors.orange : colors.paginationHoverNotActive)};
  }
`;
