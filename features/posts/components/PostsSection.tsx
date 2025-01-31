import { CATEGORY_LIST } from '@/lib/constants';
import { Post, PostCategory, PostJsonPlaceholder } from '@/types/blog';
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
  const { posts } = useJsonPlaceholder();

  const postsToShow = posts && getPostsToShow(posts);

  return (
    <div>
      <div className="mb-6 md:mb-10">
        <PostsHeader
          category={category}
          onUnselectCategory={onUnselectCategory}
        />
      </div>
      {postsToShow && <PostsGrid posts={postsToShow} />}
    </div>
  );
}
