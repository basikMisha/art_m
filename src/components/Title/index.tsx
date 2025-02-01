import React from 'react';
import { Wrapper, Title, Subtitle } from './style';
interface SectionTitleProps {
  subtitle: string;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title }) => {
  return (
    <Wrapper>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default SectionTitle;
