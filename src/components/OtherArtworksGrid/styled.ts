import styled from 'styled-components';

export const Grid = styled.div`
  max-width: 1280px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Три колонки */
  gap: 16px;
  margin: 40px auto 120px auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* Две колонки на средних экранах */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* Одна колонка на маленьких экранах */
  }
`;
