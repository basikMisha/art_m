import styled from 'styled-components';

export const Grid = styled.div<{ minHeight: number }>`
  max-width: 1280px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  min-height: ${({ minHeight }) => (minHeight > 0 ? `${minHeight}px` : '400px')};
`;
