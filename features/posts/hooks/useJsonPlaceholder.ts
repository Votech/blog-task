import { PostJsonPlaceholder } from '@/types/blog';
import useSWRInfinite from 'swr/infinite';
import { POSTS_PER_PAGE } from '../constants';

async function fetcher(url: string): Promise<PostJsonPlaceholder[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`An error occurred while fetching the data from ${url}`);
  }
  return response.json();
}

interface UseJsonPlaceholder {
  posts: PostJsonPlaceholder[] | undefined;
  isLoading: boolean;
  isError: boolean;
  size: number;
  setSize: (size: number) => void;
}

export default function useJsonPlaceholder(): UseJsonPlaceholder {
  const getURL = (index: number) => {
    const URL = `${process.env.NEXT_PUBLIC_JSONPLACEHOLDER_API_URL}/posts/?_per_page=${POSTS_PER_PAGE}&_page=${index + 1}`;
    return URL;
  };

  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    getURL,
    fetcher,
    // Disable revalidation to help debbuging this app
    // for the purpose of this task
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateFirstPage: false,
    },
  );

  return {
    posts: data?.flat(),
    isLoading,
    isError: !!error,
    size,
    setSize,
  };
}
