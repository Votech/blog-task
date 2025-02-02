import useGlobalStore from '@/lib/store';
import PostsHeaderAllOrLiked from './PostsHeaderAllOrLiked';
import PostsHeaderCategory from './PostsHeaderCategory';
import PostsHeaderSort from './PostsHeaderSort';

export default function PostsHeader() {
  const { category } = useGlobalStore();

  return (
    <div className="grid grid-cols-1 gap-5 xs2:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="col-start-1 row-start-1 flex items-center gap-5 lg:col-span-2">
        <h2 className="m-0">Wpisy</h2>
        {!!category && <PostsHeaderCategory />}
      </div>
      <div className="col-start-1 row-start-2 flex items-center md:col-start-2 md:row-start-1 lg:col-start-3">
        <PostsHeaderAllOrLiked />
      </div>
      <div className="relative row-start-3 flex items-center xs2:col-start-2 xs2:row-start-1 md:col-start-3 md:row-start-1 lg:col-start-4">
        <PostsHeaderSort />
      </div>
    </div>
  );
}
