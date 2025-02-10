import { Footer } from '@components/Footer';
import { ReactNode } from 'react';
import { Header } from '@components/Header';
import { ErrorBoundary } from '../ErrorBoundary';
import { Wrapper, StyledMain } from './styled';
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <ErrorBoundary>
        <StyledMain>{children}</StyledMain>
      </ErrorBoundary>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
