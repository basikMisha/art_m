import styled from "styled-components";
import { colors } from '@/constants/colors';

export const StyledFooter = styled.footer`
    width: 100%;
    background-color: ${colors.white};
`;

export const Container = styled.div`
  padding: 32px 0;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`