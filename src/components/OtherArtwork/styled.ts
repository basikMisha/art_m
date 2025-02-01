import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '@/constants/colors';

export const Card = styled.div`
  max-width: 416px;
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
  text-align: left;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background: ${colors.white};
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  max-width: 219px;
  width: 100%;
`;
export const Info = styled.div`
  background: ${colors.white};
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.black};
  margin-bottom: 4px;
`;

export const Artist = styled.p`
  font-size: 14px;
  color: ${colors.orange};
  margin-bottom: 4px;
`;

export const PublicTag = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.black};
`;

export const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.isFavorite ? colors.hover : colors.gray)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => (props.isFavorite ? colors.hover : colors.gray)};
  }
`;

export const SVGIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${colors.orange};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;
