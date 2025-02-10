import { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorWrapper, Heading, ReloadButton, ErrorMessage } from './styled';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  handleReload = () => {
    this.setState({ error: null });
    window.location.reload();
  };

  render() {
    if (this.state.error) {
      return (
        <ErrorWrapper>
          <Heading>Something went wrong</Heading>
          <ErrorMessage>{this.state.error.message}</ErrorMessage>
          <ReloadButton onClick={this.handleReload}>Reload Page</ReloadButton>
        </ErrorWrapper>
      );
    }

    return this.props.children;
  }
}
