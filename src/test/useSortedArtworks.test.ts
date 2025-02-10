import { renderHook } from '@testing-library/react';
import { useSortedArtworks } from '@/hooks/useSortedArtworks';
import { Artwork } from '@/types/Artwork';
import { describe, it, expect } from 'vitest';
describe('useSortedArtworks', () => {
  const mockArtworks: Artwork[] = [
    {
      id: 1,
      title: 'B Artwork',
      date_display: '2000-01-01',
      artist_title: 'Artist 1',
      artist_display: '',
      image_id: '',
      department_title: '',
      dimensions: '',
      credit_line: '',
      place_of_origin: '',
      is_public_domain: false,
    },
    {
      id: 2,
      title: 'A Artwork',
      date_display: '2010-05-05',
      artist_title: 'Artist 2',
      artist_display: '',
      image_id: '',
      department_title: '',
      dimensions: '',
      credit_line: '',
      place_of_origin: '',
      is_public_domain: false,
    },
    {
      id: 3,
      title: 'C Artwork',
      date_display: '2005-03-03',
      artist_title: 'Artist 3',
      artist_display: '',
      image_id: '',
      department_title: '',
      dimensions: '',
      credit_line: '',
      place_of_origin: '',
      is_public_domain: false,
    },
  ];

  it('should return artworks sorted alphabetically', () => {
    const { result } = renderHook(() => useSortedArtworks(mockArtworks, 'alphabetical'));

    expect(result.current[0].title).toBe('A Artwork');
    expect(result.current[1].title).toBe('B Artwork');
    expect(result.current[2].title).toBe('C Artwork');
  });

  it('should return artworks sorted by date', () => {
    const { result } = renderHook(() => useSortedArtworks(mockArtworks, 'date'));

    expect(result.current[0].date_display).toBe('2000-01-01');
    expect(result.current[1].date_display).toBe('2005-03-03');
    expect(result.current[2].date_display).toBe('2010-05-05');
  });

  it('should return artworks in the original order when no sorting option is given', () => {
    const { result } = renderHook(() => useSortedArtworks(mockArtworks, ''));

    expect(result.current[0].title).toBe('B Artwork');
    expect(result.current[1].title).toBe('A Artwork');
    expect(result.current[2].title).toBe('C Artwork');
  });

  it('should return artworks in the original order if an invalid sort option is provided', () => {
    const { result } = renderHook(() => useSortedArtworks(mockArtworks, 'invalid'));

    expect(result.current[0].title).toBe('B Artwork');
    expect(result.current[1].title).toBe('A Artwork');
    expect(result.current[2].title).toBe('C Artwork');
  });
});
