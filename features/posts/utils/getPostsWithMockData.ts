import { CATEGORY_LIST } from '@/lib/constants';
import { Post, PostJsonPlaceholder } from '@/types/blog';

export default function getPostsWithMockData(
  posts: PostJsonPlaceholder[],
): Post[] {
  return posts.map((post, index) => {
    const start = new Date(2024, 0, 1).getTime();
    const end = Date.now();
    const timestamp = new Date(
      start + (index * (end - start)) / posts.length,
    ).getTime();
    const category = CATEGORY_LIST[index % CATEGORY_LIST.length];

    return {
      category,
      timestamp,
      ...post,
    };
  });
}
