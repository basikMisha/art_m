import { render, screen, fireEvent } from '@testing-library/react';
import SortDropdown from '@/components/SortDropdown';
import { describe, it, expect, vi } from 'vitest';
describe('SortDropdown component', () => {
  it('renders correctly with sorting options', () => {
    render(<SortDropdown onSortChange={() => {}} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Alphabetical' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Date' })).toBeInTheDocument();
  });

  it('calls onSortChange when a new option is selected', () => {
    const onSortChangeMock = vi.fn();
    render(<SortDropdown onSortChange={onSortChangeMock} />);

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'date' } });

    expect(onSortChangeMock).toHaveBeenCalledTimes(1);
    expect(onSortChangeMock).toHaveBeenCalledWith('date');
  });
});
