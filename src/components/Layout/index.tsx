import { Footer } from '@components/Footer';
import { ReactNode } from 'react';
import { Header } from '@components/Header';
import { Wrapper, StyledMain } from './styled';
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
