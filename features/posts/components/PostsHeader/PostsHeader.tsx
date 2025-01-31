import { PostCategory } from '@/types/blog';
import PostsHeaderAllOrLiked from './PostsHeaderAllOrLiked';
import PostsHeaderCategory from './PostsHeaderCategory';
import PostsHeaderSort from './PostsHeaderSort';

interface Props {
  category: PostCategory | '';
  onUnselectCategory: () => void;
  onToggleLikedPostsFilter: (shouldFilterLiekdPosts: boolean) => void;
  shouldFilterLikedPosts: boolean;
}

export default function PostsHeader({
  category,
  onUnselectCategory,
  onToggleLikedPostsFilter,
  shouldFilterLikedPosts,
}: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 xs2:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* Category */}
      <div className="col-start-1 row-start-1 flex items-center gap-5 lg:col-span-2">
        <h2>Wpisy</h2>
        {category && (
          <PostsHeaderCategory
            category={category}
            onUnselectCategory={onUnselectCategory}
          />
        )}
      </div>

      {/* All or Liked */}
      <div className="col-start-1 row-start-2 flex items-center md:col-start-2 md:row-start-1 lg:col-start-3">
        <PostsHeaderAllOrLiked
          onToggleLikedPostsFilter={onToggleLikedPostsFilter}
          shouldFilterLikedPosts={shouldFilterLikedPosts}
        />
      </div>

      {/* Sort */}
      <div className="relative row-start-3 flex items-center xs2:col-start-2 xs2:row-start-1 md:col-start-3 md:row-start-1 lg:col-start-4">
        <PostsHeaderSort />
      </div>
    </div>
  );
}
