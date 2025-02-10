import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Layout from '@components/Layout';
import { MemoryRouter } from 'react-router-dom';

describe('Layout', () => {
  it('renders header, footer, and children', () => {
    render(
      <MemoryRouter>
        <Layout>
          <p>Test Content</p>
        </Layout>
      </MemoryRouter>
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
