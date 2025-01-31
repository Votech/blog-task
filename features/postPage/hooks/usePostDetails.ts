import { PostJsonPlaceholder } from '@/types/blog';
import useSWR from 'swr';

async function fetcher(url: string): Promise<PostJsonPlaceholder> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`An error occurred while fetching the data from ${url}`);
  }
  return response.json();
}

export default function useJsonPlaceholder(id: string): {
  post: PostJsonPlaceholder | undefined;
  isLoading: boolean;
} {
  const URL = `${process.env.NEXT_PUBLIC_JSONPLACEHOLDER_API_URL}/posts/${id}`;
  const { data, isLoading } = useSWR(URL, fetcher);

  return {
    post: data,
    isLoading,
  };
}
