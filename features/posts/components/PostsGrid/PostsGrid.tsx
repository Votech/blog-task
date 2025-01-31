import { Post } from '@/types/blog';
import PostCard from './PostCard';

interface Props {
  posts: Post[];
}

export default function PostsGrid({ posts }: Props) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
      {posts?.length > 0 &&
        posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
