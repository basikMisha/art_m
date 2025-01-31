import React from 'react';

interface SortDropdownProps {
  onSortChange: (sortOption: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ onSortChange }) => {
  return (
    <div>
      <select id="sort" onChange={(e) => onSortChange(e.target.value)}>
        <option value="alphabetical">Alphabetical</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
};

export default SortDropdown;
