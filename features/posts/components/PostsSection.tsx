import { CATEGORY_LIST } from '@/lib/constants';
import { Post, PostCategory, PostJsonPlaceholder } from '@/types/blog';
import { LoaderCircle } from 'lucide-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { POSTS_LIMIT } from '../constants';
import useJsonPlaceholder from '../hooks/useJsonPlaceholder';
import PostsGrid from './PostsGrid/PostsGrid';
import PostsHeader from './PostsHeader/PostsHeader';

const getPostsToShow = (posts: PostJsonPlaceholder[]): Post[] => {
  const postsToShow = posts.map((post, index) => {
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

  return postsToShow;
};
interface Props {
  category: PostCategory | '';
  onUnselectCategory: () => void;
}

export default function PostsSection({ category, onUnselectCategory }: Props) {
  const { posts, size, setSize } = useJsonPlaceholder();
  const postsToShow = posts && getPostsToShow(posts);
  const hasMore = posts.length < POSTS_LIMIT;

  return (
    <div>
      <div className="mb-6 md:mb-10">
        <PostsHeader
          category={category}
          onUnselectCategory={onUnselectCategory}
        />
      </div>

      <InfiniteScroll
        dataLength={posts.length}
        next={() => setSize(size + 1)}
        hasMore={hasMore}
        scrollThreshold={1}
        loader={
          <div className="m-5 flex items-center justify-center text-center text-sm text-zinc-600">
            <LoaderCircle size={24} className="mr-3 animate-spin" />
            <p>Loading more posts...</p>
          </div>
        }
        endMessage={
          <div className="m-5">
            <p className="text-center text-sm text-zinc-600">
              You have reached the end! No more posts to show.
            </p>
          </div>
        }
      >
        {posts.length > 0 && <PostsGrid posts={postsToShow as Post[]} />}
      </InfiniteScroll>
    </div>
  );
}
