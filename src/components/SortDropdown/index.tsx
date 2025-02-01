import React from 'react';
import { Container, StyledSelect } from './styled';

interface SortDropdownProps {
  onSortChange: (sortOption: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ onSortChange }) => {
  return (
    <Container>
      <StyledSelect id="sort" onChange={(e) => onSortChange(e.target.value)}>
        <option value="alphabetical">Alphabetical</option>
        <option value="date">Date</option>
      </StyledSelect>
    </Container>
  );
};

export default SortDropdown;
