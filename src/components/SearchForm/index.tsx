import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('query')} placeholder="Search for art" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
