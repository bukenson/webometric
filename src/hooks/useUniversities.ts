import { useQuery } from 'react-query';
import { fetchUniversities } from '../services/api';
import type { University } from '../types/university';

export function useUniversities() {
  return useQuery<University[], Error>(
    'universities',
    fetchUniversities,
    {
      refetchOnWindowFocus: false,
      retry: 1,
    }
  );
}