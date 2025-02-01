import styled from 'styled-components'
import { colors } from '@/constants/colors'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 100px 0;
`

export const LoaderStyled = styled.div`
  display: flex;
  gap: 1rem;

  div {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: ${colors.orange};
    animation: pulse 1.5s infinite ease-in-out;
  }

  div:nth-child(2) {
    animation-delay: 0.2s;
  }

  div:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.6;
    }
    50% {
      transform: scale(1.5);
      opacity: 1;
    }
  }
`
