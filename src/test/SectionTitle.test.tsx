import { render, screen } from '@testing-library/react';
import SectionTitle from '@/components/Title';
import { describe, it, expect } from 'vitest';

describe('SectionTitle', () => {
  it('отображает переданный заголовок и подзаголовок', () => {
    render(<SectionTitle title="Главный заголовок" subtitle="Подзаголовок" />);

    expect(screen.getByText('Главный заголовок')).toBeInTheDocument();
    expect(screen.getByText('Подзаголовок')).toBeInTheDocument();
  });

  it('корректно рендерится без ошибок', () => {
    const { container } = render(<SectionTitle title="Test Title" subtitle="Test Subtitle" />);
    expect(container).toMatchSnapshot();
  });

  it('поддерживает динамические данные', () => {
    const title = 'Динамический заголовок';
    const subtitle = 'Динамический подзаголовок';

    render(<SectionTitle title={title} subtitle={subtitle} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });
});
