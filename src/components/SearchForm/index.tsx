import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container, Title, SearchWrapper, Input, SearchButton, SearchIcon } from './styled';

const schema = z.object({
  query: z.string().min(0),
});

interface SearchFormProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const { register, handleSubmit } = useForm<{ query: string }>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: { query: string }) => {
    onSearch(data.query);
  };

  return (
    <Container>
      <Title>
        Let's find some <span>art</span> here!
      </Title>
      <form onChange={handleSubmit(onSubmit)}>
        <SearchWrapper>
          <Input {...register('query')} placeholder="Search Art, Artist, Work..." />
          <SearchButton type="submit">
            <SearchIcon viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip1_112)">
                <path
                  d="M14.5 25C8.7 25 4 20.29 4 14.5C4 8.7 8.7 4 14.5 4C20.29 4 25 8.7 25 14.5C25 20.29 20.29 25 14.5 25Z"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 28L22 22"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip1_112">
                  <rect
                    id="search"
                    rx="0"
                    width="31"
                    height="31"
                    transform="translate(0.5 0.5)"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </SearchIcon>
          </SearchButton>
        </SearchWrapper>
      </form>
    </Container>
  );
};

export default SearchForm;
