import React from 'react';
import { PageButton, PaginationContainer } from './styled';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  return (
    <PaginationContainer>
      <PageButton disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        <svg
          width="10"
          height="15"
          viewBox="0 0 10 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.53209 13.7144L7 15L0.572119 7.33956L1.0734 6.91893L1.05398 6.89579L8.71442 0.467911L10 2L3.37037 7.56292L8.53209 13.7144Z"
            fill="#393939"
          />
        </svg>
      </PageButton>

      {getPageNumbers().map((page, index) =>
        typeof page === 'number' ? (
          <PageButton key={index} active={page === currentPage} onClick={() => onPageChange(page)}>
            {page}
          </PageButton>
        ) : (
          <span key={index}>...</span>
        )
      )}

      <PageButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <svg
          width="10"
          height="15"
          viewBox="0 0 10 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.46791 13.7144L3 15L9.42788 7.33956L8.9266 6.91893L8.94602 6.89579L1.28558 0.467911L-1.07377e-07 2L6.62963 7.56292L1.46791 13.7144Z"
            fill="#393939"
          />
        </svg>
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
