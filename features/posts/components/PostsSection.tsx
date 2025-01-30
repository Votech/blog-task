import { PostCategory } from '@/types/blog';
import PostsHeader from './PostsHeader/PostsHeader';

interface Props {
  category: PostCategory | '';
  onUnselectCategory: () => void;
}

export default function PostsSection({ category, onUnselectCategory }: Props) {
  return (
    <div>
      <PostsHeader
        category={category}
        onUnselectCategory={onUnselectCategory}
      />
    </div>
  );
}
