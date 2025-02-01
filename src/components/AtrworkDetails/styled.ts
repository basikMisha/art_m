import styled from 'styled-components';
import { colors } from '@/constants/colors';

export const Container = styled.div`
  margin: 0 auto;
  padding: 120px 0;
  max-width: 1280px;
  width: 100%;
  display: flex;
  gap: 80px;
  background-color: ${colors.bg};
  @media (max-width: 992px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
interface ImageProps {
  background_url: string;
}

export const Image = styled.div<ImageProps>`
  width: 500px;
  height: 570px;
  background-image: url(${({ background_url }) => background_url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ContentContainer = styled.div`
  max-width: 640px;
  width: 100%;
  text-align: left;
  @media (max-width: 992px) {
    text-align: center;
  }
`;

export const ArtTitle = styled.h2`
  font-size: 32px;
  line-height: 40px;
  color: ${colors.black};
  margin-bottom: 32px;
`;

export const ArtArtist = styled.p`
  font-size: 24px;
  line-height: 30px;
  color: ${colors.title};
  margin-bottom: 16px;
`;

export const ArtDate = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${colors.black};
  margin-bottom: 172px;
  @media (max-width: 992px) {
    margin-bottom: 0px;
  }
`;

export const OverviewContainer = styled.div`
  padding: 16px;
  margin-top: 32px;
`;

export const DescTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.black};
  margin-bottom: 16px;
`;

export const DescRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

export const DescName = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.title};
  min-width: 160px;
  display: inline-block;
`;

export const DescValue = styled.p`
  font-size: 16px;
  color: ${colors.black};
  flex: 1;
  display: inline-block;
`;
